import React, { useState } from 'react';
import YellowButton from '../../components/ui/button';
import { coursesPG } from '../../datas/coursesPg';
import { coursesUG } from '../../datas/coursesUg';
import { coursesDiploma } from '../../datas/Diploma';

const allCourses = [...coursesPG, ...coursesUG, ...coursesDiploma];

const countryCodes = [
  { name: 'Afghanistan', code: '+93', flag: '🇦🇫' },
  { name: 'Albania', code: '+355', flag: '🇦🇱' },
  { name: 'Algeria', code: '+213', flag: '🇩🇿' },
  { name: 'Andorra', code: '+376', flag: '🇦🇩' },
  { name: 'Angola', code: '+244', flag: '🇦🇴' },
  { name: 'Argentina', code: '+54', flag: '🇦🇷' },
  { name: 'Armenia', code: '+374', flag: '🇦🇲' },
  { name: 'Australia', code: '+61', flag: '🇦🇺' },
  { name: 'Austria', code: '+43', flag: '🇦🇹' },
  { name: 'Azerbaijan', code: '+994', flag: '🇦🇿' },

  { name: 'Bahrain', code: '+973', flag: '🇧🇭' },
  { name: 'Bangladesh', code: '+880', flag: '🇧🇩' },
  { name: 'Belarus', code: '+375', flag: '🇧🇾' },
  { name: 'Belgium', code: '+32', flag: '🇧🇪' },
  { name: 'Bhutan', code: '+975', flag: '🇧🇹' },
  { name: 'Bolivia', code: '+591', flag: '🇧🇴' },
  { name: 'Bosnia and Herzegovina', code: '+387', flag: '🇧🇦' },
  { name: 'Botswana', code: '+267', flag: '🇧🇼' },
  { name: 'Brazil', code: '+55', flag: '🇧🇷' },
  { name: 'Brunei', code: '+673', flag: '🇧🇳' },
  { name: 'Bulgaria', code: '+359', flag: '🇧🇬' },

  { name: 'Cambodia', code: '+855', flag: '🇰🇭' },
  { name: 'Cameroon', code: '+237', flag: '🇨🇲' },
  { name: 'Canada', code: '+1', flag: '🇨🇦' },
  { name: 'Chile', code: '+56', flag: '🇨🇱' },
  { name: 'China', code: '+86', flag: '🇨🇳' },
  { name: 'Colombia', code: '+57', flag: '🇨🇴' },
  { name: 'Costa Rica', code: '+506', flag: '🇨🇷' },
  { name: 'Croatia', code: '+385', flag: '🇭🇷' },
  { name: 'Cuba', code: '+53', flag: '🇨🇺' },
  { name: 'Cyprus', code: '+357', flag: '🇨🇾' },
  { name: 'Czech Republic', code: '+420', flag: '🇨🇿' },

  { name: 'Denmark', code: '+45', flag: '🇩🇰' },
  { name: 'Dominican Republic', code: '+1', flag: '🇩🇴' },

  { name: 'Ecuador', code: '+593', flag: '🇪🇨' },
  { name: 'Egypt', code: '+20', flag: '🇪🇬' },
  { name: 'El Salvador', code: '+503', flag: '🇸🇻' },
  { name: 'Estonia', code: '+372', flag: '🇪🇪' },
  { name: 'Ethiopia', code: '+251', flag: '🇪🇹' },

  { name: 'Finland', code: '+358', flag: '🇫🇮' },
  { name: 'France', code: '+33', flag: '🇫🇷' },

  { name: 'Georgia', code: '+995', flag: '🇬🇪' },
  { name: 'Germany', code: '+49', flag: '🇩🇪' },
  { name: 'Ghana', code: '+233', flag: '🇬🇭' },
  { name: 'Greece', code: '+30', flag: '🇬🇷' },
  { name: 'Guatemala', code: '+502', flag: '🇬🇹' },

  { name: 'Haiti', code: '+509', flag: '🇭🇹' },
  { name: 'Honduras', code: '+504', flag: '🇭🇳' },
  { name: 'Hong Kong', code: '+852', flag: '🇭🇰' },
  { name: 'Hungary', code: '+36', flag: '🇭🇺' },

  { name: 'Iceland', code: '+354', flag: '🇮🇸' },
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'Indonesia', code: '+62', flag: '🇮🇩' },
  { name: 'Iran', code: '+98', flag: '🇮🇷' },
  { name: 'Iraq', code: '+964', flag: '🇮🇶' },
  { name: 'Ireland', code: '+353', flag: '🇮🇪' },
  { name: 'Israel', code: '+972', flag: '🇮🇱' },
  { name: 'Italy', code: '+39', flag: '🇮🇹' },

  { name: 'Jamaica', code: '+1', flag: '🇯🇲' },
  { name: 'Japan', code: '+81', flag: '🇯🇵' },
  { name: 'Jordan', code: '+962', flag: '🇯🇴' },

  { name: 'Kazakhstan', code: '+7', flag: '🇰🇿' },
  { name: 'Kenya', code: '+254', flag: '🇰🇪' },
  { name: 'Kuwait', code: '+965', flag: '🇰🇼' },

  { name: 'Laos', code: '+856', flag: '🇱🇦' },
  { name: 'Latvia', code: '+371', flag: '🇱🇻' },
  { name: 'Lebanon', code: '+961', flag: '🇱🇧' },
  { name: 'Libya', code: '+218', flag: '🇱🇾' },
  { name: 'Lithuania', code: '+370', flag: '🇱🇹' },
  { name: 'Luxembourg', code: '+352', flag: '🇱🇺' },

  { name: 'Malaysia', code: '+60', flag: '🇲🇾' },
  { name: 'Maldives', code: '+960', flag: '🇲🇻' },
  { name: 'Mexico', code: '+52', flag: '🇲🇽' },
  { name: 'Mongolia', code: '+976', flag: '🇲🇳' },
  { name: 'Morocco', code: '+212', flag: '🇲🇦' },
  { name: 'Myanmar', code: '+95', flag: '🇲🇲' },

  { name: 'Namibia', code: '+264', flag: '🇳🇦' },
  { name: 'Nepal', code: '+977', flag: '🇳🇵' },
  { name: 'Netherlands', code: '+31', flag: '🇳🇱' },
  { name: 'New Zealand', code: '+64', flag: '🇳🇿' },
  { name: 'Nigeria', code: '+234', flag: '🇳🇬' },
  { name: 'North Korea', code: '+850', flag: '🇰🇵' },
  { name: 'Norway', code: '+47', flag: '🇳🇴' },

  { name: 'Oman', code: '+968', flag: '🇴🇲' },

  { name: 'Pakistan', code: '+92', flag: '🇵🇰' },
  { name: 'Panama', code: '+507', flag: '🇵🇦' },
  { name: 'Paraguay', code: '+595', flag: '🇵🇾' },
  { name: 'Peru', code: '+51', flag: '🇵🇪' },
  { name: 'Philippines', code: '+63', flag: '🇵🇭' },
  { name: 'Poland', code: '+48', flag: '🇵🇱' },
  { name: 'Portugal', code: '+351', flag: '🇵🇹' },

  { name: 'Qatar', code: '+974', flag: '🇶🇦' },

  { name: 'Romania', code: '+40', flag: '🇷🇴' },
  { name: 'Russia', code: '+7', flag: '🇷🇺' },

  { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
  { name: 'Serbia', code: '+381', flag: '🇷🇸' },
  { name: 'Singapore', code: '+65', flag: '🇸🇬' },
  { name: 'Slovakia', code: '+421', flag: '🇸🇰' },
  { name: 'Slovenia', code: '+386', flag: '🇸🇮' },
  { name: 'South Africa', code: '+27', flag: '🇿🇦' },
  { name: 'South Korea', code: '+82', flag: '🇰🇷' },
  { name: 'Spain', code: '+34', flag: '🇪🇸' },
  { name: 'Sri Lanka', code: '+94', flag: '🇱🇰' },
  { name: 'Sweden', code: '+46', flag: '🇸🇪' },
  { name: 'Switzerland', code: '+41', flag: '🇨🇭' },
  { name: 'Syria', code: '+963', flag: '🇸🇾' },

  { name: 'Taiwan', code: '+886', flag: '🇹🇼' },
  { name: 'Tanzania', code: '+255', flag: '🇹🇿' },
  { name: 'Thailand', code: '+66', flag: '🇹🇭' },
  { name: 'Tunisia', code: '+216', flag: '🇹🇳' },
  { name: 'Turkey', code: '+90', flag: '🇹🇷' },

  { name: 'Ukraine', code: '+380', flag: '🇺🇦' },
  { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'Uruguay', code: '+598', flag: '🇺🇾' },
  { name: 'Uzbekistan', code: '+998', flag: '🇺🇿' },

  { name: 'Venezuela', code: '+58', flag: '🇻🇪' },
  { name: 'Vietnam', code: '+84', flag: '🇻🇳' },

  { name: 'Yemen', code: '+967', flag: '🇾🇪' },

  { name: 'Zambia', code: '+260', flag: '🇿🇲' },
  { name: 'Zimbabwe', code: '+263', flag: '🇿🇼' },
];

const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const SuggestUniversity = () => {
    const [step, setStep] = useState(1);
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
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
        currentQualification: '',
    });

    const nextStep = () => {
        if (step === 2) {
            const { fullName, email, mobile, whatsapp, state, city, language } = formData;
            if (!fullName || !email || !mobile || !whatsapp || !state || !city || !language) {
                setError('Please fill out all fields in Your Information.');
                return;
            }
        }
        setError('');
        setStep(prev => prev + 1);
    };
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
    
    const handleSubmit = async (e) => {
        const { careerLocation, currentQualification } = formData;
        if (!careerLocation || !currentQualification) {
            setError('Please fill out all fields before submitting.');
            return;
        }
        setError('');
        setLoading(true);
        const submissionData = {
            ...formData,
            mobile: formData.mobileCountryCode + formData.mobile,
            whatsapp: formData.whatsappCountryCode + formData.whatsapp,
        };
        
        e.preventDefault();

        try {
        const response = await fetch(
        import.meta.env.VITE_SCRIPT_URL,
        {
            method: "POST",
            body: JSON.stringify(submissionData),
        }
        );

        const data = await response.json();

        if (data.success) {
            setSubmitted(true);
        } else {
            setError('There was an error submitting the form. Please try again.');
        }

        } catch (error) {
        console.log(error);
        setError('There was an error submitting the form. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const selectedCourse = allCourses.find(course => course.name === formData.course);

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div>
                        <h2 className="text-[1.15rem] md:text-[1em] lg:text-[1.25em] font-medium text-start text-[#232f65] mb-4">What course are you interested in pursuing?</h2>
                        <div className='flex flex-wrap justify-center gap-2 mb-6'>
                            {allCourses.map(course => (
                                <button
                                    key={course.name}
                                    onClick={() => handleCourseSelect(course.name)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${formData.course === course.name ? 'bg-blue-800 text-white' : 'bg-[#232f65] text-white hover:bg-blue-800'}`}
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
                                    className="w-full px-4 py-3 border-1 border-[#afafaf] rounded-xl focus:outline-none transition-colors bg-white"
                                >
                                    <option value="">Select a specialization (optional)</option>
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
                        <h2 className="text-[1.15rem] md:text-[1em] lg:text-[1.25em] font-medium  text-[#232f65] mb-4">Your Information</h2>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required className="w-full px-4 py-3 border-1 border-[#afafaf] rounded-xl focus:outline-none" />
                            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" type="email" required className="w-full px-4 py-3 border-1 border-[#afafaf] rounded-xl focus:outline-none" />
                            <div className="flex">
                                <select name="mobileCountryCode" value={formData.mobileCountryCode} onChange={handleChange} className="border-1 border-r-0 border-[#afafaf] rounded-l-xl bg-gray-100 p-2 focus:outline-none">
                                    {countryCodes.map(c => <option key={c.name} value={c.code}>{c.flag} ({c.code})</option>)}
                                </select>
                                <input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" required className="w-full px-4 py-3 border-1 border-[#afafaf] rounded-r-xl focus:outline-none" />
                            </div>
                            <div className="flex">
                                <select name="whatsappCountryCode" value={formData.whatsappCountryCode} onChange={handleChange} className="border-1 border-r-0 border-[#afafaf] rounded-l-xl bg-gray-100 p-2 focus:outline-none">
                                    {countryCodes.map(c => <option key={c.name} value={c.code}>{c.flag}({c.code})</option>)}
                                </select>
                                <input name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="WhatsApp Number" required className="w-full px-4 py-3 border-1 border-[#afafaf] rounded-r-xl focus:outline-none" />
                            </div>
                            <select name="state" value={formData.state} onChange={handleChange} required className="w-full px-4 py-3 border-1 border-[#afafaf] rounded-xl focus:outline-none">
                                <option value="">Select State</option>
                                {indianStates.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                            <input name="city" value={formData.city} onChange={handleChange} placeholder="City" required className="w-full px-4 py-3 border-1 border-[#afafaf] rounded-xl focus:outline-none" />
                            <select name="language" value={formData.language} onChange={handleChange} required className="w-full px-4 py-3 border-1 border-[#afafaf] rounded-xl md:col-span-2 focus:outline-none">
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
                        <h2 className="sm:text-[1.15rem] md:text-[1em] lg:text-[1.25em] font-medium text-start text-[#232f65] mb-4">Where do you want to build your career?</h2>
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
                        <div className='mt-6'>
                            <label className='block text-sm font-medium text-[#232f65] mb-2'>
                                Current Qualification
                            </label>
                            <select
                                name="currentQualification"
                                value={formData.currentQualification}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-[#afafaf] rounded-xl focus:outline-none transition-colors bg-white"
                            >
                                <option value="">Select Qualification</option>
                                <option value="Higher Secondary">Higher Secondary</option>
                                <option value="Diploma">Diploma</option>
                                <option value="Under Graduate">Under Graduate</option>
                                <option value="Post Graduation">Post Graduation</option>
                            </select>
                        </div>
                    </div>
                );
        }
    };

    return (
        <section className='flex items-center justify-center mx-2 mt-4 mb-10 bg-white md:py-10'>
            <div className="w-full max-w-4xl min-h-[60vh] mx-auto border-2 rounded-4xl border-[#232f65] px-4 md:px-10 py-6 flex flex-col justify-center">
                {submitted ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                        <svg className="w-16 h-16 mb-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <h1 className="text-[1.35rem] md:text-[1.75em] lg:text-[2em] font-medium text-[#232f65] mb-4">Thank you for your Submission!</h1>
                        <p className="text-lg text-gray-600">Our team will contact you shortly.</p>
                    </div>
                ) : (
                    <>
                        <h1 className="text-[1.35rem] md:text-[1.75em] lg:text-[2em] font-medium text-center text-[#232f65] mb-6 md:mb-10 leading-tight">
                            Get Your Online University Assessment Report in 1 Minute
                        </h1>
                        {error && <p className="mb-4 text-center text-red-500">{error}</p>}
                        {renderStep()}
                        <div className="flex justify-center gap-4 mt-6">
                            {step > 1 && <button onClick={prevStep} className="border-1 border-[#232f65] text-[#232f65] px-6 py-3 rounded-lg font-semibold transition-colors">Back</button>}
                            {step < 3 ?
                                <YellowButton name='Next' onClick={nextStep} disabled={step === 1 && !formData.course} /> :
                                <YellowButton name={loading ? 'Submitting...' : 'Submit'} onClick={handleSubmit} disabled={loading} />
                            }
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default SuggestUniversity;
