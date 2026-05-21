import React from "react";
import { Link } from "react-router-dom";
import YellowButton from "../../components/ui/button";

export default function AboutPage() {
  const highlights = [
    {
      title: "Student-First Guidance",
      description:
        "Every student gets practical support from course shortlisting to final admission.",
    },
    {
      title: "Trusted University Network",
      description:
        "We connect students with recognized institutions and future-ready programs.",
    },
    {
      title: "Career-Focused Planning",
      description:
        "Our mentors help you choose the right path for long-term academic and career growth.",
    },
  ];

  return (
    <main className="overflow-hidden bg-linear-to-br from-[#fefefe] to-[#fffcf6]">
      <section className="mx-auto w-full px-4 py-10 md:max-w-[80%] md:px-6 md:py-14 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-4 md:space-y-6">
            <p className="font-medium text-center text-[1.75em] leading-tight text-[#2a3572] md:text-start md:text-[2.25em] lg:text-[2.75em]">
                About Us
            </p>
            <p className="text-center text-base text-[#4b4b4b] md:text-start md:text-[1.15em]">
              Nexgen Education helps students discover the right universities,
              programs, and opportunities through personalized mentoring,
              transparent guidance, and practical planning at every stage. From
              understanding a student's goals and strengths to selecting the
              best-fit course and institution, we provide clear, step-by-step
              support that removes confusion and builds confidence. Our team is
              focused on helping every learner make informed decisions, prepare
              for the future, and move forward with a strong academic and
              career direction.
            </p>
          </div>

          <div className="rounded-3xl border border-[#e6e9f5] bg-[#f3f6ff] p-4 md:p-8">
            <h2 className="mb-6 text-2xl font-semibold text-[#2a3572]">
              Why Students Choose Us
            </h2>
            <div className="space-y-5">
              {highlights.map((item) => (
                <div key={item.title} className="p-3 bg-white rounded-2xl">
                  <p className="text-lg font-semibold text-[#2a3572]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#4b4b4b]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-12 w-full max-w-[95%] rounded-4xl bg-[#232f65] px-4 py-10 md:max-w-[80%] md:px-8 md:py-12 lg:px-10">
        <div className="grid gap-6 text-center sm:grid-cols-3">
          <div>
            <p className="text-3xl font-semibold text-[#edcf2e]">5000+</p>
            <p className="mt-2 text-sm text-white/85 md:text-base">
              Students Guided
            </p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-[#edcf2e]">100+</p>
            <p className="mt-2 text-sm text-white/85 md:text-base">
              Mentor Sessions Monthly
            </p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-[#edcf2e]">1:1</p>
            <p className="mt-2 text-sm text-white/85 md:text-base">
              Personalized Counseling
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
