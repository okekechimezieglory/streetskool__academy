# 🚀 StreetSkool: School outside school! 🌟

Unlock the future of education with StreetSkool! 🎓 A cutting-edge platform where learning meets community, offering courses for every skill level using local dialects. Whether you're a student or an instructor, StreetSkool is your hub for accessible, engaging, and impactful education. 🎒

## ✨ Project Overview

StreetSkool aims to democratize education by providing a platform where anyone can learn and teach. Key features include:

- 🧑‍🏫 **Instructor Dashboard**: Create and manage courses effortlessly.
- 📚 **Diverse Course Library**: Explore a wide range of topics.
- 📈 **Performance Tracking**: Monitor student progress and course performance.
- 🔒 **Secure Payments**: Seamless and safe transactions with Solana Pay.

## 💻 Installation

Get StreetSkool up and running locally with these simple steps:

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/okekechimezieglory/streetskool__academy.git
    ```

2.  **Navigate to the Project Directory**:
    ```bash
    cd streetskool__academy
    ```

3.  **Install Dependencies**:
    ```bash
    npm install
    ```

4.  **Set Up Environment Variables**:

    -   Create a `.env` file in the root directory.
    -   Add your database URL and other necessary environment variables.

    ```
    DATABASE_URL="YOUR_DATABASE_URL"
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="YOUR_CLERK_PUBLISHABLE_KEY"
    CLERK_SECRET_KEY="YOUR_CLERK_SECRET_KEY"
    NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
    NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/instructor/courses"
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/instructor/courses"
    NEXT_PUBLIC_UPLOADTHING_APP_ID="YOUR_UPLOADTHING_APP_ID"
    UPLOADTHING_SECRET="YOUR_UPLOADTHING_SECRET"
    MUX_TOKEN_ID="YOUR_MUX_TOKEN_ID"
    MUX_TOKEN_SECRET="YOUR_MUX_TOKEN_SECRET"
    ```

5.  **Run Prisma Migrations**:
    ```bash
    npx prisma migrate dev
    ```

6.  **Seed the Database (Optional)**:
    ```bash
    npm run seed
    ```

7.  **Start the Development Server**:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 🚀

## 🛠️ Usage

### Creating a New Course

<details>
<summary>Expand to view detailed steps</summary>

1.  Navigate to the Instructor Dashboard.
2.  Click on "Create New Course".
3.  Fill in the course details:
    -   Title
    -   Category
    -   Subcategory
4.  Click "Create" to save the basic information.
</details>

### Editing Course Details

<details>
<summary>Expand to view detailed steps</summary>

1.  In the Instructor Dashboard, find the course you want to edit.
2.  Click the "Edit" icon next to the course title.
3.  Modify the course details:
    -   Subtitle
    -   Description
    -   Level
    -   Banner Image
    -   Price
4.  Click "Save" to update the course.
</details>

### Adding Sections to a Course

<details>
<summary>Expand to view detailed steps</summary>

1.  Navigate to the Curriculum section of your course.
2.  Click "Add New Section".
3.  Enter the title for the new section and click "Create".
4.  Edit the section details:
    -   Description
    -   Video URL
    -   Resources
5.  Publish the section to make it available to students.
</details>

### Solana Pay Integration

<details>
<summary>Expand to view detailed steps</summary>

1.  Navigate to the course overview page.
2.  Click the "Buy this course" button.
3.  A QR code will be displayed.
4.  Scan the QR code with your Solana wallet to complete the purchase.
</details>

## 🌟 Key Features

*   🧑‍🏫 **Instructor Dashboard**: Manage and create courses with ease.
*   📚 **Course Library**: Access a wide range of courses across various categories.
*   📊 **Performance Analytics**: Track your courses' performance and student progress.
*   💰 **Secure Payments**: Integrated with Solana Pay for secure transactions.
*   📱 **Responsive Design**: Enjoy a seamless experience on any device.
*   ✏️ **Rich Text Editor**: Create engaging course content with a user-friendly editor.

## 💻 Technologies Used

| Technology         | Link                                                                                                 |
| :----------------- | :--------------------------------------------------------------------------------------------------- |
| Next.js            | [https://nextjs.org/](https://nextjs.org/)                                                            |
| TypeScript         | [https://www.typescriptlang.org/](https://www.typescriptlang.org/)                                  |
| Clerk              | [https://clerk.com/](https://clerk.com/)                                                              |
| Prisma             | [https://www.prisma.io/](https://www.prisma.io/)                                                      |
| Tailwind CSS       | [https://tailwindcss.com/](https://tailwindcss.com/)                                                  |
| UploadThing        | [https://www.uploadthing.com/](https://www.uploadthing.com/)                                            |
| Mux                | [https://mux.com/](https://mux.com/)                                                                  |
| Solana Pay         | [https://solanapay.com/](https://solanapay.com/)                                                      |
| React Hook Form    | [https://react-hook-form.com/](https://react-hook-form.com/)                                          |
| Zod                | [https://zod.dev/](https://zod.dev/)                                                                |
| Radix UI           | [https://www.radix-ui.com/](https://www.radix-ui.com/)                                                |
| React Quill        | [https://github.com/zenoamaro/react-quill](https://github.com/zenoamaro/react-quill)                 |
| Recharts           | [https://recharts.org/en-US/](https://recharts.org/en-US/)                                            |
| Headless UI        | [https://headlessui.com/](https://headlessui.com/)                                                      |
| Hello Pangea DND   | [https://github.com/hello-pangea/dnd](https://github.com/hello-pangea/dnd)                                                      |

## 🙌 Contributing

We welcome contributions to StreetSkool! 🎉 Follow these guidelines to get started:

*   🌟 **Fork the Repository**: Create your own copy of the project.
*   🌱 **Create a Branch**: Make your changes in a dedicated branch.
*   🛠️ **Implement Changes**: Add your improvements or fix bugs.
*   ✅ **Test Thoroughly**: Ensure your changes work as expected.
*   🚀 **Submit a Pull Request**: Propose your changes to the main project.

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## ✍️ Author Info

*   Author: Chimezie Glory Okeke
    *   [GitHub](https://github.com/okekechimezieglory)
    *   [LinkedIn](https://linkedin.com/in/okekechimezieglory)

