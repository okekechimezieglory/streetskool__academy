import { db } from "@/lib/db";
import getCoursesByCategory from "../actions/getCourses";
import Categories from "@/components/custom/Categories";
import CourseCard from "@/components/courses/CourseCard";
import Introduction from "@/components/layout/Introduction";
import FAQ from "@/components/sections/FAQ.";
import Contact from "@/components/sections/Contact";
import CardSection from "@/components/layout/CardSection";
import StatsSection from "@/components/layout/StatsSection";

export default async function Home() {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
    include: {
      subCategories: {
        orderBy: {
          name: "asc",
        },
      },
    },
  });

  const courses = await getCoursesByCategory(null);
  return (
    <div className="md:mt-5 md:px-10 xl:px-16 pb-16">
      <Introduction/>
      <CardSection />
      <Categories categories={categories} selectedCategory={null} />
      <div className="flex flex-wrap gap-7 justify-center">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <StatsSection />
      <div className="mt-12">
      <FAQ />
      </div>
      {/* <Contact /> */}
    </div>
  );
}
