import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export const POST = async (req: NextRequest) => {
  try {
    const paymentData = await req.json();

    // Validate payment data (you may want to add more validation)
    const { courseId, userId } = paymentData;

    // Check if the payment is valid (you may want to implement additional checks)
    if (!courseId || !userId) {
      return new NextResponse("Invalid payment data", { status: 400 });
    }

    // Update the purchase record
    await db.purchase.create({
      data: {
        customerId: userId,
        courseId: courseId,
      },
    });

    return new NextResponse("Payment Successful", { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
