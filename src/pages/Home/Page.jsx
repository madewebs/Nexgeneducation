import React, { useState } from 'react'
import img from '../../assets/img.png'
import alumniImg from '../../assets/ui/man.png'
import medalImg from '../../assets/ui/medal.png'
import chatImg from '../../assets/ui/chat.png'
import { TypeAnimation } from 'react-type-animation'
import YellowButton from '../../components/ui/button'
import { coursesDiploma } from '../../datas/Diploma'
import { coursesPG } from '../../datas/coursesPg'
import { coursesUG } from '../../datas/coursesUg'


export default function HomePage() {
  const [activeProgram, setActiveProgram] = useState('ug')


  const mains=[
    {
      name:"5000+",
      focus:"Alumni",
      icon:alumniImg,
    },
    {

      name:"India's 1st",
      focus:"Suggestion Platform",
      icon:medalImg,
    },
    {

      name:"100+",
      focus:"Experienced Mentors",
      icon:chatImg,
    }
  ]
  
  const programTabs=[
    { key:'ug', label:'Online UG', items:coursesUG },
    { key:'pg', label:'Online PG', items:coursesPG },
    { key:'diploma', label:'Diploma', items:coursesDiploma },
  ]

  const activeItems = programTabs.find((tab) => tab.key === activeProgram)?.items ?? []
  return (
    <main className="overflow-hidden bg-[#fffef5]">

      <section className='flex flex-col justify-center mx-auto w-full max-w-7xl px-4 py-8 md:px-6 lg:px-8 lg:py-8 min-h-[45vh] md:min-h-[65vh]'>
        <div className='mb-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14'>
          <div className='md:hidden flex justify-center pt-4 order-first'>
            <div className='relative w-full max-w-[320px]'>
              <div className='absolute inset-6 -z-10 rounded-full bg-[#dfe8ff] blur-3xl opacity-70' />
              <img
                src={img}
                alt="Hero illustration"
                className='relative z-10 w-full h-auto object-contain drop-shadow-xl'
              />
            </div>
          </div>
          <div className='space-y-3 md:space-y-5 order-last md:order-0'>
            <p className='text-center md:text-start text-4xl md:text-5xl lg:text-[3.5em] text-[#3b4ebe] font-light'>
              Find a Best
              <TypeAnimation
                sequence={[
                  'Online University.',
                  2000, 
                  'Career.',
                  2000,
                  'Mentor.',
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className='text-[1.25em] block font-medium'
              />
            </p>
            <p className='text-[#4b4b4b] text-[1em] md:text-[1.25em] leading-tight text-center md:text-start'>Take the first step toward your international education goals with guidance from our experienced counsellors.</p>
            <div className='flex gap-4 place-content-center md:place-content-start'>
              <YellowButton name="Suggest me a University"/>
            </div>
          </div>
          <div className='hidden md:flex w-full justify-center lg:justify-end'>
            <div className='relative w-full max-w-130 shrink-0'>
              <div className='absolute inset-0 -z-10 rounded-full bg-[#dfe8ff] blur-3xl opacity-70' />
              <img
                src={img}
                alt="Hero illustration"
                className='relative z-10 w-full h-auto object-contain drop-shadow-2xl'
              />
            </div>
          </div>
        </div>
        <div className='mx-auto grid w-full max-w-4xl grid-cols-3 justify-items-center gap-4 text-[#2a3572] text-center md:gap-8 lg:gap-12'>
          {mains.map((item,index)=>(
            <div
              key={index}
              className='flex flex-col items-center justify-center'>
              <img src={item.icon} alt=""
                className='w-5 h-5 md:w-10 md:h-10'
              />
              <p className='font-semibold text-md md:text-2xl'>{item.name}</p>
              <p className='text-[0.7em] md:text-[1em] leading-tight font-medium'>{item.focus}</p>
            </div>
          ))}
        </div>    
      </section>

      {/* 2 section */}
      <section className='bg-[#f2f8ff] min-h-[50vh]'>
        <div className='mx-auto space-y-6 w-full max-w-7xl px-4 py-10 md:px-6 lg:px-8'>
          <div className='flex flex-col gap-6 md:justify-center items-center'>
            <p className='text-2xl font-semibold text-[#2a3572] md:text-3xl'>20+ Online Courses</p>
            <div className='flex flex-wrap justify-start gap-3'>
              {programTabs.map((tab) => {
                const isActive = activeProgram === tab.key
                return (
                  <button
                    key={tab.key}
                    type='button'
                    onMouseEnter={() => setActiveProgram(tab.key)}
                    onFocus={() => setActiveProgram(tab.key)}
                    onClick={() => setActiveProgram(tab.key)}
                    className={`rounded-xs px-4 py-2 text-md font-semibold transition ${isActive ? 'bg-[#2a3572] text-white shadow-md' : 'bg-white text-[#2a3572] hover:bg-[#dfe8ff]'}`}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>

          <div className='mt-8 rounded-xs bg-white p-5 shadow-sm md:p-8'>
            <div className='mb-4 flex items-center justify-between gap-4'>
              <p className='text-lg font-semibold text-[#2a3572]'>
                {programTabs.find((tab) => tab.key === activeProgram)?.label}
              </p>
            </div>

            <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
              {activeItems.map((course) => (
                <div
                  key={course.name}
                  className='border-[#2a3572] rounded-b-xl border bg-[#ffffff] px-4 py-5 text-center text-[#2a3572] transition hover:-translate-y-1 hover:shadow-md'
                >
                  <p className='text-base font-semibold md:text-lg'>{course.name}</p>
                  <p>Suggest Me</p>
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-2  md:justify-center items-center'>
            <p className='text-2xl font-semibold text-[#2a3572] md:text-3xl'>90+ Online Universities</p>
            <YellowButton name="View available Universities"/>
          </div>
        </div>
      </section>
    </main>
  )
}
