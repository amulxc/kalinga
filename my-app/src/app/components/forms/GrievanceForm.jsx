'use client'

import React, { useState } from 'react'
import { FormWrapper, InputField, FormGrid } from './FormComponents'
import GlobalArrowButton from '../general/global-arrow_button'
import { submitForm } from '../../config/api'

export default function GrievanceForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        department: '',
        committee_category: '',
        faculty: '',
        details: '',
    })
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({ type: '', message: '' })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus({ type: '', message: '' })

        try {
            await submitForm('/grievance-forms/', formData)
            setStatus({ type: 'success', message: 'Grievance submitted. We will look into it.' })
        } catch (err) {
            setStatus({ type: 'error', message: err.message || 'Error submitting form.' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <FormWrapper
            title="Grievance Redressal Form"
            description="We value your feedback and concerns. Please provide details of your grievance."
            theme="blue"
        >
            <form onSubmit={handleSubmit}>
                <FormGrid>
                    <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
                    <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
                    <InputField label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />
                    <InputField
                        label="Department" name="department" type="select" value={formData.department} onChange={handleChange} required
                        options={[
                            { value: '1', label: 'Academic Affairs' },
                            { value: '2', label: 'Examinations' },
                            { value: '3', label: 'Administration' }
                        ]}
                    />
                    <InputField
                        label="Committee Category" name="committee_category" type="select" value={formData.committee_category} onChange={handleChange} required
                        options={[
                            { value: '1', label: 'Student Welfare' },
                            { value: '2', label: 'Internal Quality' },
                            { value: '3', label: 'Anti-Ragging' }
                        ]}
                    />
                    <InputField
                        label="Faculty" name="faculty" type="select" value={formData.faculty} onChange={handleChange} required
                        options={[
                            { value: '1', label: 'Faculty of Engineering' },
                            { value: '2', label: 'Faculty of Management' },
                            { value: '3', label: 'Faculty of Law' }
                        ]}
                    />
                </FormGrid>
                <InputField label="Details of Grievance" name="details" type="textarea" value={formData.details} onChange={handleChange} required />

                <div className="flex justify-center mt-10">
                    <GlobalArrowButton variant="white" onClick={handleSubmit}>
                        {loading ? 'Submitting...' : 'Submit Grievance'}
                    </GlobalArrowButton>
                </div>

                {status.message && (
                    <p className={`text-center mt-4 ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {status.message}
                    </p>
                )}
            </form>
        </FormWrapper>
    )
}
