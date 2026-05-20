import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { coursesPG } from "../../datas/coursesPg";
import { coursesUG } from "../../datas/coursesUg";
import { coursesDiploma } from "../../datas/Diploma";

const imageMap = {
  "courses1.jpg":
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  "courses2.jpg":
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  "courses3.jpg":
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  "courses4.jpg":
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  "courses5.jpg":
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
};

const categoryLabelMap = {
  "online-pg": "Online PG",
  "online-ug": "Online UG",
  diploma: "Diploma",
};

function findCourseByName(name) {
  const allCourses = [
    ...coursesPG.map((course) => ({ ...course, category: "online-pg" })),
    ...coursesUG.map((course) => ({ ...course, category: "online-ug" })),
    ...coursesDiploma.map((course) => ({ ...course, category: "diploma" })),
  ];

  return allCourses.find(
    (course) => course.name.toLowerCase() === decodeURIComponent(name).toLowerCase()
  );
}

export default function CourseTemplatePage() {
  const { courseName } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseName]);

  const fallbackCourse = findCourseByName(courseName || "");
  const course = state?.course || fallbackCourse;
  const category = state?.category || fallbackCourse?.category;

  if (!course) {
    return (
      <section className="min-h-[70vh] px-4 py-20 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#e4e4e4] bg-white p-10 text-center">
          <h1 className="text-3xl font-semibold text-[#2a3572]">Course Not Found</h1>
          <p className="mt-3 text-[#4b4b4b]">The selected course could not be loaded.</p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-xl border border-[#edcf2e] px-5 py-2 font-medium text-[#2a3572]"
          >
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  const courseImage = imageMap[course.img] || imageMap["courses1.jpg"];
  const categoryLabel = categoryLabelMap[category] || "Course";

  return (
    <section className="min-h-screen px-4 py-10 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="mb-6 inline-flex items-center rounded-xl border border-[#edcf2e] px-4 py-2 text-sm font-medium text-[#2a3572]"
        >
          Back to Courses
        </Link>

        <div className="grid gap-8 overflow-hidden rounded-4xl border border-[#e4e4e4] bg-white p-4 md:grid-cols-2 md:p-8">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={courseImage}
              alt={course.name}
              className="object-cover w-full h-full min-h-65"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 inline-flex w-fit rounded-full bg-[#eef7ff] px-4 py-1 text-sm font-medium text-[#2a3572]">
              {categoryLabel}
            </p>
            <h1 className="text-[1.8em] font-semibold text-[#2a3572] md:text-[2.2em]">{course.name}</h1>
            <p className="mt-4 text-[#4b4b4b]">
              This is the template page for <span className="font-semibold">{course.name}</span>. You can use
              this same layout for all courses and load each course's data dynamically.
            </p>

            <ul className="mt-5 space-y-2 text-[#4b4b4b]">
              <li>Duration: 2 Years (Typical)</li>
              <li>Mode: Online / Hybrid</li>
              <li>Support: Mentorship + Placement Guidance</li>
            </ul>

            <Link
              to="/"
              className="mt-6 inline-flex w-fit rounded-xl bg-[#edcf2e] px-5 py-2 font-semibold text-[#2a3572]"
            >
              Explore More Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
