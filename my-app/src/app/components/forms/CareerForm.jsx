'use client'

import React, { useState } from 'react'
import { FormWrapper, InputField, FormGrid } from './FormComponents'
import GlobalArrowButton from '../general/global-arrow_button'
import { submitForm } from '../../config/api'

export default function CareerForm() {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        mobile_number: '',
        alternate_phone: '',
        date_of_birth: '',
        gender: '',
        nationality: '',
        current_city: '',
        state: '',
        country: '',
        position_applied_for: '',
        department: '',
        employment_type: '',
        preferred_campus: '',
        expected_salary: '',
        notice_period: '',
    })
    const [departments, setDepartments] = useState([])
    const [resume, setResume] = useState(null)
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({ type: '', message: '' })

    const fetchDepartments = async () => {
        try {
            const response = await fetch('https://kalinga.dupebox.com/api/departments/')
            const data = await response.json()
            const results = data.results || data
            setDepartments(results.map(d => ({ value: d.id.toString(), label: d.name })))
        } catch (err) {
            console.error("Failed to fetch departments", err)
        }
    }

    React.useEffect(() => {
        fetchDepartments()
    }, [])

    const handleChange = (e) => {
        const { name, value, files } = e.target
        if (name === 'resume') {
            setResume(files[0])
        } else {
            setFormData(prev => ({ ...prev, [name]: value }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus({ type: '', message: '' })

        const data = new FormData()
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key])
        })
        if (resume) {
            data.append('resume', resume)
        } else {
            setStatus({ type: 'error', message: 'Resume is required' })
            setLoading(false)
            return
        }

        try {
            await submitForm('/career-forms/', data, true)
            setStatus({ type: 'success', message: 'Application submitted successfully!' })
            // Reset form
        } catch (err) {
            setStatus({ type: 'error', message: err.message || 'Error submitting application.' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <FormWrapper
            title="Career Application Form"
            description="Join our team and help shape the future of education."
            theme="blue"
        >
            <form onSubmit={handleSubmit}>
                <h3 className="text-white text-xl mb-6 border-b border-white/20 pb-2">Personal Details</h3>
                <FormGrid>
                    <InputField label="Full Name" name="full_name" value={formData.full_name} onChange={handleChange} required />
                    <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
                    <InputField label="Mobile Number" name="mobile_number" value={formData.mobile_number} onChange={handleChange} required />
                    <InputField label="Alternate Phone" name="alternate_phone" value={formData.alternate_phone} onChange={handleChange} />
                    <InputField label="Date of Birth" name="date_of_birth" type="date" value={formData.date_of_birth} onChange={handleChange} required />
                    <InputField
                        label="Gender" name="gender" type="select" value={formData.gender} onChange={handleChange} required
                        options={[
                            { value: 'male', label: 'Male' },
                            { value: 'female', label: 'Female' },
                            { value: 'other', label: 'Other' },
                            { value: 'prefer_not_to_say', label: 'Prefer not to say' }
                        ]}
                    />
                    <InputField label="Nationality" name="nationality" value={formData.nationality} onChange={handleChange} required />
                    <InputField label="Current City" name="current_city" value={formData.current_city} onChange={handleChange} required />
                    <InputField label="State" name="state" value={formData.state} onChange={handleChange} required />
                    <InputField label="Country" name="country" value={formData.country} onChange={handleChange} required />
                </FormGrid>

                <h3 className="text-white text-xl mt-10 mb-6 border-b border-white/20 pb-2">Position & Professional Details</h3>
                <FormGrid>
                    <InputField label="Position Applied For" name="position_applied_for" value={formData.position_applied_for} onChange={handleChange} required />
                    <InputField
                        label="Department" name="department" type="select" value={formData.department} onChange={handleChange} required
                        options={departments}
                    />
                    <InputField
                        label="Employment Type" name="employment_type" type="select" value={formData.employment_type} onChange={handleChange} required
                        options={[
                            { value: 'teaching', label: 'Teaching' },
                            { value: 'non_teaching', label: 'Non-Teaching' },
                            { value: 'administrative', label: 'Administrative' },
                            { value: 'contract_visiting', label: 'Contract/Visiting' }
                        ]}
                    />
                    <InputField label="Preferred Campus" name="preferred_campus" value={formData.preferred_campus} onChange={handleChange} />
                    <InputField label="Expected Salary" name="expected_salary" value={formData.expected_salary} onChange={handleChange} />
                    <InputField label="Notice Period" name="notice_period" value={formData.notice_period} onChange={handleChange} />
                    <InputField label="Resume (PDF/DOC)" name="resume" type="file" onChange={handleChange} required />
                </FormGrid>

                <div className="flex justify-center mt-12">
                    <GlobalArrowButton variant="white" onClick={handleSubmit}>
                        {loading ? 'Submitting...' : 'Submit Application'}
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
