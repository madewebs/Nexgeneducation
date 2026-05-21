import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import heroImage1 from '../../assets/img1.png'
import heroImage2 from '../../assets/img2.png'
import logo from '../../assets/nexgeneducationlogo.png'
import heroImage3 from '../../assets/img3.png'
import contactImage from '../../assets/contact.png'
import YellowButton from "../../components/ui/button";
import { coursesPG } from "../../datas/coursesPg";
import { coursesUG } from "../../datas/coursesUg";
import { coursesDiploma } from "../../datas/Diploma";
import { Link } from "react-router-dom";

export default function HomePage() {
const [selectedCategory, setSelectedCategory] = useState("online-pg");
const tabsContainerRef = useRef(null);
const scrollTimeoutRef = useRef(null);
const isClickingRef = useRef(false);
const [currentSlide, setCurrentSlide] = useState(0);

const heroSlides = [
  {
    id: 1,
    title: "Empowering students through quality education and global learning opportunities.",
    description: "Start your study abroad journey with expert guidance, personalized counseling, and support at every step.",
    image: heroImage1,
    button: "Suggest me a University"
  },
  {
    id: 2,
    title: "Discover top universities tailored to your career aspirations.",
    description: "We help you navigate through scholarships, admissions, and visas seamlessly.",
    image: heroImage2,
    button: "Find Scholarships"
  },
  {
    id: 3,
    title: "Your dream of studying abroad begins with the right guidance.",
    description: "We help students choose the right universities, courses, and career paths to build a successful future abroad.",
    image: heroImage3,
    button: "Talk to an Expert"
  }
];

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, 3000);
  return () => clearInterval(timer);
}, []);

const [touchStart, setTouchStart] = useState(null);
const [touchEnd, setTouchEnd] = useState(null);
const minSwipeDistance = 50;

const handleTouchStart = (e) => {
  setTouchEnd(null);
  setTouchStart(e.targetTouches[0].clientX);
};

const handleTouchMove = (e) => {
  setTouchEnd(e.targetTouches[0].clientX);
};

const handleTouchEnd = () => {
  if (!touchStart || !touchEnd) return;
  const distance = touchStart - touchEnd;
  const isLeftSwipe = distance > minSwipeDistance;
  const isRightSwipe = distance < -minSwipeDistance;
  
  if (isLeftSwipe) {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }
  if (isRightSwipe) {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  }
};

const tabButtonClass =
  "inline-flex shrink-0 snap-center h-12 w-44 items-center justify-center rounded-2xl px-6 font-semibold transition-all";

// Array of categories in order
const categories = ["online-pg", "online-ug", "others", "placement-cell"];

// Helper to scroll natively using behavior: smooth
const smoothScrollToBtn = (btn) => {
  if (!tabsContainerRef.current) return;
  const containerCenter = tabsContainerRef.current.offsetWidth / 2;
  const btnCenter = btn.offsetLeft + (btn.offsetWidth / 2);
  const scrollPos = btnCenter - containerCenter;

  // Use native smooth scrolling instead of GSAP to avoid conflict with CSS scroll snapping
  tabsContainerRef.current.scrollTo({
    left: scrollPos,
    behavior: "smooth"
  });
};

// GSAP animation to center the active button on mount and when category changes
useEffect(() => {
  if (tabsContainerRef.current && window.innerWidth < 768) {
    const activeBtn = tabsContainerRef.current.querySelector(`button[data-category="${selectedCategory}"]`);
    if (activeBtn) {
      smoothScrollToBtn(activeBtn);
      // Reset flag after a delay to allow scroll to complete
      setTimeout(() => {
          isClickingRef.current = false;
      }, 500); 
    }
  }
}, [selectedCategory]);

const handleScroll = () => {
  if (isClickingRef.current || window.innerWidth >= 768) return;
  
  if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
  
  scrollTimeoutRef.current = setTimeout(() => {
    if (!tabsContainerRef.current) return;
    const container = tabsContainerRef.current;
    const containerCenter = container.offsetWidth / 2;
    const scrollLeft = container.scrollLeft;
    
    let closestCategory = null;
    let minDistance = Infinity;
    
    const buttons = container.querySelectorAll("button[data-category]");
    buttons.forEach((btn) => {
      const btnCenter = btn.offsetLeft + (btn.offsetWidth / 2) - scrollLeft;
      const distance = Math.abs(btnCenter - containerCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestCategory = btn.getAttribute("data-category");
      }
    });
    
    if (closestCategory && closestCategory !== selectedCategory) {
      isClickingRef.current = true;
      setSelectedCategory(closestCategory);
    }
  }, 150); // wait until native inertial scroll likely finishes
};

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
  "others": coursesDiploma.map((course) => ({
    ...course,
    img: courseImageMap[course.img],
  })),
  "placement-cell": [],
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
      <div 
        className="relative w-full overflow-hidden touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide) => (
            <div key={slide.id} className="flex flex-col-reverse items-center w-full gap-8 mt-10 shrink-0 md:py-10 md:flex-row md:mt-0">
              {/* Text Content */}
              <div className="space-y-3 md:space-y-6 md:w-1/2">
                <h1
                  style={{ fontFamily: "var(--font-montserrat)" }}
                  className="text-center md:text-start text-[1.75em] md:text-[2.25em] lg:text-[2.75em] xl:[3.75em] text-[#2a3572] font-medium tracking-tight leading-tight"
                >
                  {slide.title}
                </h1>
                <p className="text-[#4b4b4b] text-base md:text-[1.25em] leading-snug text-center md:text-start">
                  {slide.description}
                </p>
                <div className="flex justify-center gap-4 mt-4 md:max-w-sm md:mt-8 md:justify-start">
                  <YellowButton name={slide.button} />
                </div>
              </div>

              {/* Image Content */}
              <div className="flex justify-center w-full pt-4 lg:justify-end md:pt-0 md:w-1/2">
                <div className="relative w-full max-w-112.5 lg:max-w-full shrink-0 flex items-center justify-center">
                  <div className="absolute rounded-full shadow-2xl inset-6 md:inset-0 -z-10 blur-3xl opacity-70" />
                  <img
                    src={slide.image}
                    alt="Hero illustration"
                    className="relative z-10 object-contain w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-[#2a3572]" : "w-2 bg-[#d1d5db]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
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
        <p className="text-[1.65em] md:text-[2em] lg:text-[2.25em] font-medium text-center text-[#fefefe] mb-4 md:mb-4">
          20 + Online Courses
        </p>

        {/* Category Tabs */}
        <div 
          ref={tabsContainerRef}
          onScroll={handleScroll}
          className="relative flex overflow-x-auto overflow-y-hidden md:flex-wrap md:justify-center gap-3 mb-4 md:mb-10 w-full px-[calc(50vw-88px)] md:px-0 no-scrollbar touch-pan-x snap-x snap-mandatory"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none', 
            WebkitOverflowScrolling: 'touch' 
          }}
        >
          <button
            data-category="online-pg"
            onClick={() => { isClickingRef.current = true; setSelectedCategory("online-pg"); }}
            className={`${tabButtonClass} ${
              selectedCategory === "online-pg"
                ? "bg-[#fce042] text-[#2a3572]active-tab"
                : "bg-gray-100 text-[#2a3572] hover:bg-gray-200"
            }`}
          >
            Online PG
          </button>
          <button
            data-category="online-ug"
            onClick={() => { isClickingRef.current = true; setSelectedCategory("online-ug"); }}
            className={`${tabButtonClass} ${
              selectedCategory === "online-ug"
                ? "bg-[#fce042] text-[#2a3572] active-tab"
                : "bg-gray-100 text-[#2a3572] hover:bg-gray-200"
            }`}
          >
            Online UG
          </button>
          <button
            data-category="others"
            onClick={() => { isClickingRef.current = true; setSelectedCategory("others"); }}
            className={`${tabButtonClass} ${
              selectedCategory === "others"
                ? "bg-[#fce042] text-[#2a3572] active-tab"
                : "bg-gray-100 text-[#2a3572] hover:bg-gray-200"
            }`}
          >
            Others
          </button>
          <button
            data-category="placement-cell"
            onClick={() => { isClickingRef.current = true; setSelectedCategory("placement-cell"); }}
            className={`${tabButtonClass} ${
              selectedCategory === "placement-cell"
                ? "bg-[#fce042] text-[#2a3572] active-tab"
                : "bg-gray-100 text-[#2a3572] hover:bg-gray-200"
            }`}
          >
            Placement Cell
          </button>
        </div>

        {/* Slider Dots Indicator (Mobile Only) */}
        <div className="flex justify-center gap-2 mb-10 md:hidden">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { isClickingRef.current = true; setSelectedCategory(cat); }}
              className={`h-2 rounded-full transition-all duration-300 ${
                selectedCategory === cat ? "w-6 bg-[#edcf2e]" : "w-2 bg-[#d1d5db]"
              }`}
              aria-label={`Go to ${cat}`}
            />
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-3">
          {getCourses().map((course, index) => (
            <Link
              to={`/course/${encodeURIComponent(course.name)}`}
              state={{ course, category: selectedCategory }}
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
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Contact Us Section */}
    <section className='px-4 py-10 md:px-6 lg:px-8 bg-[#fefefe]'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-[1.75em] md:text-[2.25em] lg:text-[2.75em] font-medium text-center text-[#2a3572] mb-2'>
          Get in Touch With Us
        </h2>
        <p className='text-center text-[#4b4b4b] text-lg mb-8 leading-tight '>
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
                const whatsappNumber = '918891788828';
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
