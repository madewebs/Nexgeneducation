import React, { useState } from "react";
import heroImage from '../../assets/img.png'
import contactImage from '../../assets/img1.png'
import YellowButton from "../../components/ui/button";
import { coursesPG } from "../../datas/coursesPg";
import { coursesUG } from "../../datas/coursesUg";
import { coursesDiploma } from "../../datas/Diploma";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("online-pg");

  const courseImageMap = {
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

  const courseData = {
    "online-pg": coursesPG.map((course) => ({
      ...course,
      img: courseImageMap[course.img],
    })),
    "online-ug": coursesUG.map((course) => ({
      ...course,
      img: courseImageMap[course.img],
    })),
    diploma: coursesDiploma.map((course) => ({
      ...course,
      img: courseImageMap[course.img],
    })),
  };

  const getCourses = () => courseData[selectedCategory] || [];

  const front = [
    {
      img: "https://img.icons8.com/ios-filled/100/2a3572/conference-call.png",
      head: "5000+",
      sub: "Alumni",
    },
    {
      img: "https://img.icons8.com/ios-filled/100/2a3572/medal2.png",
      head: "India's 1st",
      sub: "Suggestion Platform",
    },
    {
      img: "https://img.icons8.com/ios-filled/100/2a3572/comments.png",
      head: "100+",
      sub: "Experienced Mentors",
    },
  ];
  return (
    <main className="overflow-hidden bg-linear-to-br from-[#fefefe] to-[#fffcf6]">
      <section className="flex flex-col justify-center md:mx-auto w-full md:max-w-[80%] px-4 md:px-6 lg:px-8 min-h-[60vh] md:min-h-[80vh]">
        <div className="flex flex-col-reverse items-center gap-8 md:py-10 md:flex-row">
          {/* Text Content */}
          <div className="space-y-3 md:space-y-6 md:w-1/2">
            <h1
              style={{ fontFamily: "var(--font-montserrat)" }}
              className="text-center md:text-start text-[1.75em] md:text-[2.25em] lg:text-[2.75em] xl:[3.75em] text-[#2a3572] font-medium tracking-tight leading-tight"
            >
              Empowering students to reach world-class universities and build
              successful global careers.
            </h1>
            <p className="text-[#4b4b4b] text-base md:text-[1.25em] leading-snug text-center md:text-start">
              Start your study abroad journey with expert guidance, personalized
              counseling, and support at every step.
            </p>
            <div className="flex justify-center gap-4 mt-4 md:max-w-sm md:mt-8 md:justify-start">
              <YellowButton name="Suggest me a University" />
            </div>
          </div>

          {/* Image Content */}
          <div className="flex justify-center w-full pt-4 lg:justify-end md:pt-0 md:w-1/2">
            <div className="relative w-full max-w-112.5 lg:max-w-full shrink-0">
              <div className="absolute inset-6 md:inset-0 -z-10 rounded-full bg-[#f0f4ff] md:bg-[#dfe8ff] blur-3xl opacity-70" />
              <img
                src={heroImage}
                alt="Hero illustration"
                className="relative z-10 object-contain w-full h-auto drop-shadow-xl md:drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full max-w-3xl py-8 mx-auto my-8 md:justify-start bg-[#eef7ff] border border-[#e0e0e0] rounded-3xl">
          {front.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center flex-1 text-center md:justify-start"
            >
              <img
                src={item.img}
                alt={item.head}
                className="object-contain w-6 h-6 mx-auto"
              />
              <p className="font-semibold text-lg md:text-xl text-[#2a3572]">
                {item.head}
              </p>
              <p className="text-xs md:text-base text-[#4b4b4b]">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#232f65] rounded-4xl mx-2 py-6 md:py-10 mt-4 mb-10">
        <div className="w-full md:max-w-[80%] mx-auto px-6">
          <p className="text-[1.5em] md:text-[2em] lg:text-[2.25em] font-medium text-center text-[#fefefe] mb-4 md:mb-4">
            20 + Online Courses
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button
              onClick={() => setSelectedCategory("online-pg")}
              className={`px-4 py-2 rounded-2xl font-semibold transition-all ${
                selectedCategory === "online-pg"
                  ? "bg-[#edcf2e] text-white"
                  : "bg-gray-100 text-[#2a3572] hover:bg-gray-200"
              }`}
            >
              Online PG
            </button>
            <button
              onClick={() => setSelectedCategory("online-ug")}
              className={`px-4 py-2 rounded-2xl font-semibold transition-all ${
                selectedCategory === "online-ug"
                  ? "bg-[#edcf2e] text-white"
                  : "bg-gray-100 text-[#2a3572] hover:bg-gray-200"
              }`}
            >
              Online UG
            </button>
            <button
              onClick={() => setSelectedCategory("diploma")}
              className={`px-4 py-2 rounded-2xl font-semibold transition-all ${
                selectedCategory === "diploma"
                  ? "bg-[#edcf2e] text-white"
                  : "bg-gray-100 text-[#2a3572] hover:bg-gray-200"
              }`}
            >
              Diploma
            </button>
          </div>
          {/* Courses Grid */}
          <div className="grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-3">
            {getCourses().map((course, index) => (
              <div
                key={index}
                className="overflow-hidden w-full border-2 border-[#9e9e9e] rounded-4xl hover:shadow-lg transition-shadow bg-white"
              >
                <div className="relative w-full overflow-hidden rounded-4xl aspect-video ">
                  <img
                    src={course.img}
                    alt={course.name}
                    className="absolute inset-0 object-cover object-center w-full h-full"
                  />
                </div>
                <div className="p-2 text-center ">
                  <p className="font-semibold text-[#2a3572]">{course.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className='min-h-screen px-4 py-16 bg-white md:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-[1.75em] md:text-[2.25em] lg:text-[2.75em] font-medium text-center text-[#2a3572] mb-2'>
            Get in Touch With Us
          </h2>
          <p className='text-center text-[#4b4b4b] text-lg mb-8 '>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <div className='grid items-center grid-cols-1 gap-10 md:grid-cols-2'>
            {/* Form Column */}
            <div className='flex flex-col justify-center'>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const name = formData.get('name');
                  const phone = formData.get('phone');
                  const email = formData.get('email');
                  const message = formData.get('message');
                  
                  const whatsappMessage = `Hello! My name is ${name}. Email: ${email}, Phone: ${phone}. Message: ${message}`;
                  const encodedMessage = encodeURIComponent(whatsappMessage);
                  // Replace with your WhatsApp number (format: country code + number, e.g., 919876543210)
                  const whatsappNumber = '919876543210';
                  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
                  e.target.reset();
                }}
                className='space-y-4'
              >
                {/* Name Field */}
                <div>
                  <label className='block text-sm font-medium text-[#2a3572] mb-2'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    required
                    placeholder='Enter your full name'
                    className='w-full px-4 py-3 border-2 border-[#e0e0e0] rounded-xl focus:outline-none transition-colors bg-white'
                  />
                </div>

                {/* Phone Number Field */}
                <div>
                  <label className='block text-sm font-medium text-[#2a3572] mb-2'>
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    required
                    placeholder='Enter your phone number'
                    className='w-full px-4 py-3 border-2 border-[#e0e0e0] rounded-xl focus:outline-none transition-colors bg-white'
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className='block text-sm font-medium text-[#2a3572] mb-2'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    name='email'
                    required
                    placeholder='Enter your email address'
                    className='w-full px-4 py-3 border-2 border-[#e0e0e0] rounded-xl focus:outline-none transition-colors bg-white'
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className='block text-sm font-medium text-[#2a3572] mb-2'>
                    Message
                  </label>
                  <textarea
                    name='message'
                    required
                    rows='5'
                    placeholder='Write your message here...'
                    className='w-full px-4 py-3 border-2 border-[#e0e0e0] rounded-xl focus:outline-none transition-colors bg-white resize-none'
                  />
                </div>
                  <YellowButton name='Send via Whatsapp' type='submit' />
              </form>
            </div>

            {/* Image Column */}
            <div className='items-center justify-center hidden md:flex'>
              <div className='relative w-full max-w-md'>
                <div className='absolute inset-0 -z-10 rounded-3xl blur-2xl opacity-40' />
                <img
                  src={contactImage}
                  alt='Contact us illustration'
                  className='object-cover w-full h-auto rounded-3xl'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
