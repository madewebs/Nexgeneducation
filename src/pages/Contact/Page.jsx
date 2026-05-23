import React from 'react'
import YellowButton from '../../components/ui/button';
import contactImage from '../../assets/contact.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
export default function ContactPage() {
  return (
    <section className='bg-[#232f65] rounded-4xl mx-2 py-6 md:py-10 mt-4 mb-10 p-4'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-[1.75em] md:text-[2.25em] lg:text-[2.75em] font-medium text-center text-[#fefefe] mb-2'>
          Get in Touch With Us
        </h2>
        <p className='text-center text-[#fefefe] text-md md:text-lg mb-8 leading-tight '>
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
                <label className='block text-sm font-medium text-[#fefefe] mb-2'>
                  Full Name
                </label>
                <input
                  type='text'
                  name='name'
                  required
                  placeholder='Enter your full name'
                  className='w-full px-4 py-3 border-2 border-[#afafaf] rounded-xl focus:outline-none transition-colors bg-white'
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label className='block text-sm font-medium text-[#fefefe] mb-2'>
                  Phone Number
                </label>
                <input
                  type='tel'
                  name='phone'
                  required
                  placeholder='Enter your phone number'
                  className='w-full px-4 py-3 border-2 border-[#afafaf] rounded-xl focus:outline-none transition-colors bg-white'
                />
              </div>

              {/* Email Field */}
              <div>
                <label className='block text-sm font-medium text-[#fefefe] mb-2'>
                  Email Address
                </label>
                <input
                  type='email'
                  name='email'
                  required
                  placeholder='Enter your email address'
                  className='w-full px-4 py-3 border-2 border-[#afafaf] rounded-xl focus:outline-none transition-colors bg-white'
                />
              </div>

              {/* Message Field */}
              <div>
                <label className='block text-sm font-medium text-[#fefefe] mb-2'>
                  Message
                </label>
                <textarea
                  name='message'
                  required
                  rows='5'
                  placeholder='Write your message here...'
                  className='w-full px-4 py-3 border-2 border-[#afafaf] rounded-xl focus:outline-none transition-colors bg-white resize-none'
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

        {/* Direct Contact Channels */}
        <div className='mt-8 pt-8 border-t border-[#fefefe]/10'>
          <div className='text-center mb-6'>
            <p className='text-[#fefefe]/60 text-sm max-w-md mx-auto'>
              Prefer direct communication? Reach out to us instantly through any of the channels below.
            </p>
          </div>

          <div className='grid grid-cols-3 gap-6 max-w-2xl mx-auto'>
            {/* Phone Card */}
            <a
              href='tel:+918891788828'
              className='relative overflow-hidden flex flex-col items-center text-center p-6 lg:p-8'
            >
              <div className='text-[#facc42] flex items-center justify-center mb-2'>
                <FontAwesomeIcon icon={faPhone} size='2xl' />
              </div>
              <h3 className='text-xs md:text-sm text-[#fefefe]/60 font-medium uppercase'>Phone Support</h3>
            </a>

            {/* WhatsApp Card */}
            <a
              href='https://wa.me/918891788828'
              target='_blank'
              rel='noopener noreferrer'
              className='relative overflow-hidden flex flex-col items-center text-center p-6 lg:p-8'
            >
              <div className='text-green-400 flex items-center justify-center text-2xl mb-2'>
                <FontAwesomeIcon icon={faWhatsapp} size='2xl' />
              </div>
              <h3 className='text-xs md:text-sm text-[#fefefe]/60 font-medium uppercase tracking-wider'>WhatsApp Chat</h3>
            </a>

            {/* Email Card */}
            <a
              href='mailto:nexgeneduind@gmail.com'
              className='relative overflow-hidden flex flex-col items-center text-center p-6 lg:p-8'
            >
              <div className='text-blue-400 flex items-center justify-center text-2xl mb-2'>
                <FontAwesomeIcon icon={faEnvelope} size='2xl' />
              </div>
              <h3 className='text-xs md:text-sm text-[#fefefe]/60 font-medium uppercase tracking-wider'>Email Address</h3>
            </a>
          </div>
        </div>
      </div>
    </section >
  )
}
