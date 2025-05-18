import { NextRequest, NextResponse } from "next/server";
import { Connection, PublicKey, Keypair } from "@solana/web3.js";
import { currentUser } from "@clerk/nextjs/server";
import { getSolToUsdRate } from "@/lib/getSolToUsdRate";
import { db } from "@/lib/db";
import { encodeURL } from "@solana/pay";
import { BigNumber } from "bignumber.js";

export const POST = async (
  req: NextRequest,
  { params }: { params: { courseId: string } }
) => {
  try {
    const user = await currentUser();

    if (!user || !user.id || !user.emailAddresses?.[0]?.emailAddress) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.findUnique({
      where: { id: params.courseId, isPublished: true },
    });

    if (!course) {
      return new NextResponse("Course Not Found", { status: 404 });
    }

    // Ensure price is not null
    if (course.price === null) {
      return new NextResponse("Course price is not available", { status: 400 });
  }

    const purchase = await db.purchase.findUnique({
      where: {
        customerId_courseId: { customerId: user.id, courseId: course.id },
      },
    });

    if (purchase) {
      return new NextResponse("Course Already Purchased", { status: 400 });
    }

    // Fetch the current SOL to USD exchange rate
    const solToUsdRate = await getSolToUsdRate();
    const amountInDollars = new BigNumber(course.price);
    const amountInSol = amountInDollars.div(solToUsdRate); // Convert to SOL

    // Create a connection to the Solana cluster
    const connection = new Connection("https://api.mainnet-beta.solana.com");
    // Define the recipient's wallet address
    const recipient = new PublicKey("84yzjGocEHwC3qqkfPK2fDTgENqgaU3s259zPdbqu4jQ");

     const reference = Keypair.generate().publicKey;
    const url = encodeURL({
        recipient,
        amount: amountInSol,
        reference,
        label: "Streetschool Course Purchase",
        message: `Payment for course: ${course.title}`,
    });

    // Return the URL to the client
    return NextResponse.json({ url });

  } catch (err) {
    console.log(err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
