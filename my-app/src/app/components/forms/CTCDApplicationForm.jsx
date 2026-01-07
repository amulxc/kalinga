'use client'

import React, { useState } from 'react'
import { FormWrapper, InputField, FormGrid } from './FormComponents'
import GlobalArrowButton from '../general/global-arrow_button'
import { submitForm } from '../../config/api'

export default function CTCDApplicationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        organisation: '',
        area_of_interest: '',
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
            await submitForm('/ctcd-applications/', formData)
            setStatus({ type: 'success', message: 'Application submitted!' })
        } catch (err) {
            setStatus({ type: 'error', message: err.message || 'Error submitting form.' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <FormWrapper
            title="CTCD Application Form"
            description="Professional training and consultancy division applications."
            theme="blue"
        >
            <form onSubmit={handleSubmit}>
                <FormGrid>
                    <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
                    <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
                    <InputField label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />
                    <InputField label="Organisation" name="organisation" value={formData.organisation} onChange={handleChange} required />
                </FormGrid>
                <InputField label="Area of Interest" name="area_of_interest" type="textarea" value={formData.area_of_interest} onChange={handleChange} required />

                <div className="flex justify-center mt-10">
                    <GlobalArrowButton variant="white" onClick={handleSubmit}>
                        {loading ? 'Submitting...' : 'Submit Application'}
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
