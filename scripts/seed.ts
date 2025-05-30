const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

async function main() {
  try {
    const categories = [
      {
        name: "IT & Software",
        subCategories: {
          create: [
            { name: "Web Development" },
            { name: "Mobile App Development" },
          ],
        },
      },
      {
        name: "Backend Engineering",
        subCategories: {
          create: [
            { name: "Backend Web Development" },
            { name: "Backend Mobile App Development" },
            { name: "Data Science" },
            { name: "Cyber Security" },
            { name: "Web3 Development" },
          ],
        },
      },
      {
        name: "Frontend Engineering",
        subCategories: {
          create: [
            { name: "Frontend Web Development" },
            { name: "Frontend Mobile App Development" },
            { name: "Frontend Data Science" },
            { name: "Frontend Cyber Security" },
            { name: "Frontend Web3 Development" },
          ],
        },
      },
      {
        name: "Cloud Engineering",
        subCategories: {
          create: [
            { name: "Cloud Web Development" },
            { name: "Cloud Mobile App Development" },
            { name: "Cloud Data Science" },
            { name: "Cloud Cyber Security" },
            { name: "Cloud Web3 Development" },
          ],
        },
      },
      {
        name: "Blockchain Engineering",
        subCategories: {
          create: [
            { name: "Blockchain Web Development" },
            { name: "Blockchain Mobile App Development" },
            { name: "Blockchain Data Science" },
            { name: "Blockchain Cyber Security" },
            { name: "Blockchain Web3 Development" },
          ],
        },
      },
      {
        name: "Data Science",
        subCategories: {
          create: [
            { name: "Graphics Design" },
            { name: "3D & Animation" },
            { name: "Interior Design" },
            { name: "UI/UX Design" },
            { name: "Product Management" },
            { name: "Web3 Development" },
          ],
        },
      },
      {
        name: "Igbo Courses",
        subCategories: {
          create: [
            { name: "Igbo Web Development" },
            { name: "Igbo Mobile App Development" },
            { name: "Igbo Data Science" },
            { name: "Igbo Cyber Security" },
            { name: "Igbo Web3 Development" },
          ],
        },
      },
      {
        name: "Hausa Courses",
        subCategories: {
          create: [
            { name: "Hausa Web Development" },
            { name: "Hausa Mobile App Development" },
            { name: "Hausa Data Science" },
            { name: "Hausa Web3 Development" },
          ],
        },
      },
      {
        name: "Yoruba Courses",
        subCategories: {
          create: [
            { name: "Yoruba Web Development" },
            { name: "Yoruba Mobile App Development" },
            { name: "Yoruba Data Science" },
            { name: "Yoruba Cyber Security" },
            { name: "Yoruba Web3 Development" },
          ],
        },
      },
      {
        name: "Pidgin Courses",
        subCategories: {
          create: [
            { name: "Pidgin Web Development" },
            { name: "Pidgin Mobile App Development" },
            { name: "Pidgin Data Science" },
            { name: "Pidgin Web3 Development" },
          ],
        },
      },
    ];

    // Sequentially create each category with its subcategories
    for (const category of categories) {
      const existingCategory = await database.category.findUnique({
        where: { name: category.name },
      });
      if (!existingCategory) {
        await database.category.create({
          data: {
            name: category.name,
            subCategories: category.subCategories,
          },
          include: {
            subCategories: true,
          },
        });
      } else {
        console.log(`Category already exists: ${category.name}`);
      }
    }

    await database.level.createMany({
      data: [
        { name: "Beginner" },
        { name: "Intermediate" },
        { name: "Expert" },
        { name: "All levels" },
      ],
    });

    console.log("Seeding successfully");
  } catch (error) {
    console.log("Seeding failed", error);
  } finally {
    await database.$disconnect();
  }
}

main();
