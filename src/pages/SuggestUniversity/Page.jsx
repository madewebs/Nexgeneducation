import React, { useState } from 'react';
import YellowButton from '../../components/ui/button';
import { coursesPG } from '../../datas/coursesPg';
import { coursesUG } from '../../datas/coursesUg';
import { coursesDiploma } from '../../datas/Diploma';

const allCourses = [...coursesPG, ...coursesUG, ...coursesDiploma];

const countryCodes = [
    { name: 'India', code: '+91', flag: '🇮🇳' },
    { name: 'United States', code: '+1', flag: '🇺🇸' },
    { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
    { name: 'Australia', code: '+61', flag: '🇦🇺' },
    { name: 'Canada', code: '+1', flag: '🇨🇦' },
    { name: 'Germany', code: '+49', flag: '🇩🇪' },
    { name: 'France', code: '+33', flag: '🇫🇷' },
    { name: 'Japan', code: '+81', flag: '🇯🇵' },
    { name: 'China', code: '+86', flag: '🇨🇳' },
    { name: 'Brazil', code: '+55', flag: '🇧🇷' },
    { name: 'South Africa', code: '+27', flag: '🇿🇦' },
    // Add more countries as needed
];

const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const SuggestUniversity = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        course: '',
        specialization: '',
        fullName: '',
        email: '',
        mobile: '',
        whatsapp: '',
        state: '',
        city: '',
        language: '',
        mobileCountryCode: '+91',
        whatsappCountryCode: '+91',
        careerLocation: '',
    });

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleCourseSelect = (courseName) => {
        setFormData({ ...formData, course: courseName, specialization: '' });
    };

    const handleCareerLocationSelect = (location) => {
        setFormData({ ...formData, careerLocation: location });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const selectedCourse = allCourses.find(course => course.name === formData.course);

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div>
                        <h2 className="text-[1.2rem] md:text-[1em] lg:text-[1.25em] font-medium text-start text-[#232f65] mb-4">What course are you interested in pursuing?</h2>
                        <div className='flex flex-wrap justify-center gap-4 mb-6'>
                            {allCourses.map(course => (
                                <button
                                    key={course.name}
                                    onClick={() => handleCourseSelect(course.name)}
                                    className={`px-4 py-2 rounded-lg font-semibold transition-colors text-md ${formData.course === course.name ? 'bg-blue-800 text-white' : 'bg-[#232f65] text-white hover:bg-blue-800'}`}
                                >
                                    {course.name}
                                </button>
                            ))}
                        </div>

                        {formData.course && (
                            <div className='mt-6'>
                                <label className='block text-sm font-medium text-[#232f65] mb-2'>
                                    Choose a specialization for your selected course
                                </label>
                                <select
                                    name="specialization"
                                    value={formData.specialization}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-[#afafaf] rounded-xl focus:outline-none transition-colors bg-white"
                                >
                                    <option value="">Select a specialization</option>
                                    {selectedCourse && selectedCourse.specializations.map(spec => (
                                        <option key={spec} value={spec}>{spec}</option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>
                );
            case 2:
                return (
                    <div>
                        <h2 className="text-[1.2rem] md:text-[1em] lg:text-[1.25em] font-medium  text-[#232f65] mb-4">Personal Information</h2>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="w-full px-4 py-3 border-2 border-[#afafaf] rounded-xl focus:outline-none" />
                            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full px-4 py-3 border-2 border-[#afafaf] rounded-xl focus:outline-none" />
                            <div className="flex">
                                <select name="mobileCountryCode" value={formData.mobileCountryCode} onChange={handleChange} className="border-2 border-r-0 border-[#afafaf] rounded-l-xl bg-gray-100 p-2 focus:outline-none">
                                    {countryCodes.map(c => <option key={c.name} value={c.code}>{c.flag} {c.code}</option>)}
                                </select>
                                <input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" className="w-full px-4 py-3 border-2 border-[#afafaf] rounded-r-xl focus:outline-none" />
                            </div>
                            <div className="flex">
                                <select name="whatsappCountryCode" value={formData.whatsappCountryCode} onChange={handleChange} className="border-2 border-r-0 border-[#afafaf] rounded-l-xl bg-gray-100 p-2 focus:outline-none">
                                    {countryCodes.map(c => <option key={c.name} value={c.code}>{c.flag} {c.code}</option>)}
                                </select>
                                <input name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="WhatsApp Number" className="w-full px-4 py-3 border-2 border-[#afafaf] rounded-r-xl focus:outline-none" />
                            </div>
                            <select name="state" value={formData.state} onChange={handleChange} className="w-full px-4 py-3 border-2 border-[#afafaf] rounded-xl focus:outline-none">
                                <option value="">Select State</option>
                                {indianStates.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                            <input name="city" value={formData.city} onChange={handleChange} placeholder="City" className="w-full px-4 py-3 border-2 border-[#afafaf] rounded-xl focus:outline-none" />
                            <select name="language" value={formData.language} onChange={handleChange} className="w-full px-4 py-3 border-2 border-[#afafaf] rounded-xl md:col-span-2 focus:outline-none">
                                <option value="">Convenient speaking language</option>
                                <option value="English">English</option>
                                <option value="Malayalam">Malayalam</option>
                                <option value="Hindi">Hindi</option>
                                <option value="Kannada">Kannada</option>
                                <option value="Telugu">Telugu</option>
                            </select>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <h2 className="text-[1.2rem] md:text-[1em] lg:text-[1.25em] font-medium text-start text-[#232f65] mb-4">Where do you want to build your career? *</h2>
                        <div className='flex gap-4'>
                            <button
                                onClick={() => handleCareerLocationSelect('Abroad')}
                                className={`px-6 py-2 rounded-lg font-semibold transition-colors text-md ${formData.careerLocation === 'Abroad' ? 'bg-blue-800 text-white' : 'bg-[#232f65] text-white hover:bg-blue-800'}`}
                            >
                                Abroad
                            </button>
                            <button
                                onClick={() => handleCareerLocationSelect('India')}
                                className={`px-6 py-2 rounded-lg font-semibold transition-colors text-md ${formData.careerLocation === 'India' ? 'bg-blue-800 text-white' : 'bg-[#232f65] text-white hover:bg-blue-800'}`}
                            >
                                India
                            </button>
                        </div>
                    </div>
                );
            default:
                return <div>Thank you for your submission!</div>;
        }
    };

    return (
        <section className='mx-2 mt-4 mb-10 bg-white md:py-10'>
            <div className="max-w-4xl mx-auto border-2 rounded-4xl border-[#232f65] px-4 md:px-10 py-6 ">
                <h1 className="text-[1.45em] md:text-[1.75em] lg:text-[2em] font-medium text-center text-[#232f65] mb-6 md:mb-10">
                    Get Your Online University Assessment Report in 1 Minute
                </h1>
                {renderStep()}
                <div className="flex justify-center gap-4 mt-6">
                    {step > 1 && <button onClick={prevStep} className="border-2 border-[#232f65] text-[#232f65] px-6 py-3 rounded-lg font-semibold transition-colors">Back</button>}
                    {step < 3 ?
                        <YellowButton name='Next' onClick={nextStep} /> :
                        <YellowButton name='Submit' onClick={() => alert(`Form Submitted!`)} />
                    }
                </div>
            </div>
        </section>
    );
};

export default SuggestUniversity;
