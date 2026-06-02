import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import heroImage1 from '../../assets/img1.webp'
import heroImage2 from '../../assets/img2.webp'
import logo from '../../assets/nexgeneducationlogo.png'
import heroImage3 from '../../assets/img3.webp'
import whatsapp from '../../assets/ui/whatsapp.png'
import wpButton from '../../assets/ui/wpButton.png'
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
    title: "Knowledge at your fingertips",
    description: "Whether you are a worker or a housewife anywhere in the world you can get your education we help you for a better tomorrow click here today",
    image: heroImage1,
    button: "Suggest me a University",
    link: "/suggest-university"
  },
  {
    id: 2,
    title: "Bringing world-class education right to your screen",
    description: "No longer will your work be a hindrance to your studies. Click here today for a better future tomorrow. with the help of our expert career guidance coaches",
    image: heroImage2,
    button: "Whatsapp",
    link: "https://wa.me/918891788828"
  },
  {
    id: 3,
    title: "Education without borders, learning without limits",
    description: "Learn anywhere, achieve everywhere. Click here today for your better tomorrow",
    image: heroImage3,
    button: "Talk to an Expert",
    link: "tel:+918891788828"
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
const categories = ["online-pg", "online-ug", "others"];

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
    head: "22 years of Experience",
    sub: "In Education field",
  },
  {
    img: "https://img.icons8.com/ios-filled/100/2a3572/comments.png",
    head: "100+",
    sub: "Experienced Mentors",
  },
];
return (
  <main className="overflow-hidden bg-linear-to-br from-[#fefefe] to-[#fffcf6]">
    <div 
      className="fixed bottom-8 right-6 md:right-10 z-200"
      onClick={(e) => {
          e.preventDefault();
          const whatsappNumber = '918891788828';
          window.open(`https://wa.me/${whatsappNumber}`, '_blank');
          e.target.reset();
        }}>
      <img 
        src={whatsapp}
        alt='nexxgen Whatsapp'
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="h-14 w-14 md:h-16 md:w-16"
        loading="lazy"
         />
    </div>
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
                  className="text-center md:text-start text-[1.95em] md:text-[2.5em] lg:text-[2.95em] xl:[3.95em] text-[#2a3572] font-medium tracking-tight leading-tight"
                >
                  {slide.title}
                </h1>
                <p className="text-[#4b4b4b] text-base md:text-[1.25em] leading-snug text-center md:text-start">
                  {slide.description}
                </p>
                <div className="flex justify-center w-full gap-4 mt-4 md:max-w-sm md:mt-8 md:justify-start">
                  { slide.id==2 ? (
                    <a href={slide.link} className="w-full gap-2 md:w-auto lg:min-w-56 xl:min-w-64">
                      <YellowButton name={slide.button} className="cursor-pointer" >
                        <img src={wpButton} alt="whatsapp" className="w-6 h-6" onContextMenu={(e) => e.preventDefault()} loading="lazy"/>
                      </YellowButton>
                    </a>):
                    (
                      <a href={slide.link} className="w-full md:w-auto lg:min-w-56 xl:min-w-64">
                      <YellowButton name={slide.button} className="cursor-pointer" />
                    </a>)
                    }
                </div>
              </div>

              {/* Image Content */}
              <div className="flex justify-center w-full pt-4 lg:justify-end md:pt-0 md:w-1/2">
                <div className="relative w-full max-w-112.5 lg:max-w-full shrink-0 flex items-center justify-center">
                  <div className="absolute rounded-full shadow-2xl inset-6 md:inset-0 -z-10 blur-3xl opacity-70" />
                  <img
                    src={slide.image}
                    alt="Hero illustration"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    loading="lazy"
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
              loading="lazy"
              onContextMenu={(e) => e.preventDefault()}
              className="object-contain w-6 h-6 mx-auto"
            />
            <p className="font-semibold text-center leading-tight text-md md:text-xl text-[#2a3572]">
              {item.head}
            </p>
            <p className="text-xs md:text-base text-[#4b4b4b]">{item.sub}</p>
          </div>
        ))}
      </div>
    </section>

    <section id="courses" className="bg-[#232f65] rounded-4xl mx-2 py-6 md:py-10 mt-4 mb-10">
      <div className="w-full md:max-w-[80%] mx-auto px-6">
        <p className="text-[1.65em] md:text-[2em] lg:text-[2.25em] font-semibold text-center text-[#fefefe] mb-4 md:mb-4">
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
                  loading="lazy"
                  onContextMenu={(e) => e.preventDefault()}
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

    {/* Placement Cell Section */}
    <section className="px-4 py-10 md:py-12 md:px-6 lg:px-8 bg-[#eef7ff] border border-[#e0e0e0] mb-10 mx-2 rounded-4xl md:mx-auto md:max-w-[80%] relative overflow-hidden">
      <div className='relative z-10 max-w-6xl mx-auto'>
        <div className='grid items-center grid-cols-1 gap-10 lg:gap-16 md:grid-cols-2'>
          {/* Info Column */}
          <div className='flex flex-col justify-center space-y-6'>
            <h2 className='text-[1.75em] md:text-[2.25em] lg:text-[2.75em] font-medium text-center md:text-left text-[#2a3572] leading-tight'>
              Launch Your Career with Our Placement Cell
            </h2>
            <p className='text-center md:text-left text-[#4b4b4b] text-lg leading-tight'>
              We connect you with top hiring partners and equip you with the necessary skills to succeed. Register your details with us to get started!
            </p>
            
            <div className="flex-col hidden pt-4 space-y-4 md:flex">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#fce042]/30 shrink-0">
                        <svg className="w-6 h-6 text-[#2a3572]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-[#2a3572]">Top Recruiters</h4>
                        <p className="text-sm text-[#4b4b4b]">Direct connections to leading companies</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#fce042]/30 shrink-0">
                        <svg className="w-6 h-6 text-[#2a3572]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-[#2a3572]">Career Mentoring</h4>
                        <p className="text-sm text-[#4b4b4b]">Expert guidance for your interviews</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Form Column */}
          <div className='flex flex-col justify-center bg-white p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e0e0e0]'>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get('name');
                const phone = formData.get('phone');
                const email = formData.get('email');
                
                const whatsappMessage = `Hello! I am inquiring about the Placement Cell. My name is ${name}. Email: ${email}, Phone: ${phone}.`;
                const encodedMessage = encodeURIComponent(whatsappMessage);
                const whatsappNumber = '918891788828';
                window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
                e.target.reset();
              }}
              className='space-y-4'
            >
              <h3 className="mb-2 text-xl font-medium text-center text-[#2a3572]">Register for Placement Assistance</h3>
              <p className="text-sm text-center text-[#4b4b4b] mb-4">Take the first step towards your dream job</p>
              
              {/* Name Field */}
              <div>
                <label className='block mb-1.5 text-sm font-medium text-[#2a3572]'>
                  Full Name
                </label>
                <input
                  type='text'
                  name='name'
                  required
                  placeholder='Enter your full name'
                  className='w-full px-4 py-3 bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl focus:outline-none transition-colors'
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label className='block mb-1.5 text-sm font-medium text-[#2a3572]'>
                  Phone Number
                </label>
                <input
                  type='tel'
                  name='phone'
                  required
                  placeholder='Enter your phone number'
                  className='w-full px-4 py-3 bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl focus:outline-none transition-colors'
                />
              </div>

              {/* Email Field */}
              <div>
                <label className='block mb-1.5 text-sm font-medium text-[#2a3572]'>
                  Email Address
                </label>
                <input
                  type='email'
                  name='email'
                  required
                  placeholder='Enter your email address'
                  className='w-full px-4 py-3 bg-[#f8f9fa] border border-[#e0e0e0] rounded-xl focus:outline-none transition-colors'
                />
              </div>

              <div className="pt-3">
                <YellowButton name='Enquire via Whatsapp' type='submit' />
              </div>
            </form>
          </div>
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
                loading="lazy"
                src={contactImage}
                alt='Contact us illustration'
                onContextMenu={(e) => e.preventDefault()}
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
