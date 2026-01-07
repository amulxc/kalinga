'use client'

import React, { useState } from 'react'
import { FormWrapper, InputField, FormGrid } from './FormComponents'
import GlobalArrowButton from '../general/global-arrow_button'
import { submitForm } from '../../config/api'

export default function AlumniForm() {
    const [formData, setFormData] = useState({
        name: '',
        father_name: '',
        dob: '',
        course: '',
        batch: '',
        enrollment_no: '',
        residential_address: '',
        pin_code: '',
        mobile_no: '',
        phone_no: '',
        personal_email: '',
        occupation: '',
        company_name: '',
        designation: '',
        office_address: '',
        office_pin_code: '',
        studying_course_name: '',
        university_college_name: '',
        nature_of_business: '',
        self_employed_company_name: '',
        special_achievements: '',
        alumni_membership_fee: '',
        undertaking_accepted: false,
        contribute_mentoring: false,
        contribute_scholarships: false,
        contribute_expertise: false,
        contribute_internships: false,
        contribute_industrial_visits: false,
        contribute_funds: false,
        other_contribution: '',
    })

    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({ type: '', message: '' })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus({ type: '', message: '' })

        try {
            await submitForm('/alumni-forms/', formData)
            setStatus({ type: 'success', message: 'Alumni registration successful!' })
        } catch (err) {
            setStatus({ type: 'error', message: err.message || 'Error submitting form.' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <FormWrapper
            title="Alumni Registration Form"
            description="Stay connected with your alma mater. Register today to join the Kalinga Alumni Network."
            theme="blue"
        >
            <form onSubmit={handleSubmit}>
                <h3 className="text-white text-xl mb-6 border-b border-white/20 pb-2 font-stix">Personal & Academic Details</h3>
                <FormGrid>
                    <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
                    <InputField label="Father's Name" name="father_name" value={formData.father_name} onChange={handleChange} required />
                    <InputField label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} required />
                    <InputField label="Course Completed" name="course" value={formData.course} onChange={handleChange} required />
                    <InputField label="Batch (e.g. 2018-2022)" name="batch" value={formData.batch} onChange={handleChange} required />
                    <InputField label="Enrollment Number" name="enrollment_no" value={formData.enrollment_no} onChange={handleChange} required />
                    <InputField label="Personal Email" name="personal_email" type="email" value={formData.personal_email} onChange={handleChange} required />
                    <InputField label="Mobile Number" name="mobile_no" value={formData.mobile_no} onChange={handleChange} required />
                    <InputField label="Phone Number (Optional)" name="phone_no" value={formData.phone_no} onChange={handleChange} />
                    <InputField label="Pincode" name="pin_code" value={formData.pin_code} onChange={handleChange} required />
                </FormGrid>
                <div className="mt-4">
                    <InputField label="Residential Address" name="residential_address" type="textarea" value={formData.residential_address} onChange={handleChange} required />
                </div>

                <h3 className="text-white text-xl mt-10 mb-6 border-b border-white/20 pb-2 font-stix">Professional Status</h3>
                <div className="mb-6">
                    <InputField
                        label="Current Occupation" name="occupation" type="select" value={formData.occupation} onChange={handleChange} required
                        options={[
                            { value: 'employed', label: 'Employed' },
                            { value: 'higher_studies', label: 'Higher Studies' },
                            { value: 'self_employed', label: 'Self Employed' },
                            { value: 'home_maker', label: 'Home Maker' },
                            { value: 'other', label: 'Other' }
                        ]}
                    />
                </div>

                {formData.occupation === 'employed' && (
                    <FormGrid>
                        <InputField label="Company Name" name="company_name" value={formData.company_name} onChange={handleChange} />
                        <InputField label="Designation" name="designation" value={formData.designation} onChange={handleChange} />
                        <InputField label="Office Pincode" name="office_pin_code" value={formData.office_pin_code} onChange={handleChange} />
                        <div className="md:col-span-2">
                            <InputField label="Office Address" name="office_address" type="textarea" value={formData.office_address} onChange={handleChange} />
                        </div>
                    </FormGrid>
                )}

                {formData.occupation === 'higher_studies' && (
                    <FormGrid>
                        <InputField label="Course Name" name="studying_course_name" value={formData.studying_course_name} onChange={handleChange} />
                        <InputField label="University/College Name" name="university_college_name" value={formData.university_college_name} onChange={handleChange} />
                    </FormGrid>
                )}

                {formData.occupation === 'self_employed' && (
                    <FormGrid>
                        <InputField label="Company Name" name="self_employed_company_name" value={formData.self_employed_company_name} onChange={handleChange} />
                        <InputField label="Nature of Business" name="nature_of_business" value={formData.nature_of_business} onChange={handleChange} />
                    </FormGrid>
                )}

                <h3 className="text-white text-xl mt-10 mb-6 border-b border-white/20 pb-2 font-stix">Contributions & Membership</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <p className="text-white mb-2">How would you like to contribute?</p>
                        {[
                            { id: 'contribute_mentoring', label: 'Mentoring' },
                            { id: 'contribute_scholarships', label: 'Scholarships' },
                            { id: 'contribute_expertise', label: 'Expertise' },
                            { id: 'contribute_internships', label: 'Internships' },
                            { id: 'contribute_industrial_visits', label: 'Industrial Visits' },
                            { id: 'contribute_funds', label: 'Funds' },
                        ].map(item => (
                            <label key={item.id} className="flex items-center text-white/80 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name={item.id}
                                    checked={formData[item.id]}
                                    onChange={handleChange}
                                    className="mr-3 w-4 h-4 accent-[var(--dark-orange-red-light)]"
                                />
                                {item.label}
                            </label>
                        ))}
                    </div>
                    <div>
                        <InputField label="Other Contributions" name="other_contribution" type="textarea" value={formData.other_contribution} onChange={handleChange} />
                        <InputField label="Special Achievements" name="special_achievements" type="textarea" value={formData.special_achievements} onChange={handleChange} />
                        <InputField
                            label="Membership Fee" name="alumni_membership_fee" type="select" value={formData.alumni_membership_fee} onChange={handleChange} required
                            options={[
                                { value: 'one_year', label: 'One Year' },
                                { value: 'lifetime', label: 'Lifetime' }
                            ]}
                        />
                    </div>
                </div>

                <div className="mt-8">
                    <label className="flex items-start text-white/80 cursor-pointer text-sm">
                        <input
                            type="checkbox"
                            name="undertaking_accepted"
                            checked={formData.undertaking_accepted}
                            onChange={handleChange}
                            required
                            className="mr-3 mt-1 w-4 h-4 accent-[var(--dark-orange-red-light)]"
                        />
                        I hereby declare that all the information provided above is true and correct to the best of my knowledge. I agree to abide by the rules and regulations of the Kalinga Alumni Network.
                    </label>
                </div>

                <div className="flex justify-center mt-12">
                    <GlobalArrowButton variant="white" onClick={handleSubmit}>
                        {loading ? 'Submitting...' : 'Register as Alumni'}
                    </GlobalArrowButton>
                </div>

                {status.message && (
                    <p className={`text-center mt-6 py-3 px-6 rounded-lg ${status.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                        {status.message}
                    </p>
                )}
            </form>
        </FormWrapper>
    )
}
