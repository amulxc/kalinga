'use client'

import React, { useState } from 'react'
import { FormWrapper, InputField, FormGrid } from './FormComponents'
import GlobalArrowButton from '../general/global-arrow_button'
import { submitForm } from '../../config/api'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
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
            await submitForm('/contact-forms/', formData)
            setStatus({ type: 'success', message: 'Message sent!' })
        } catch (err) {
            setStatus({ type: 'error', message: err.message || 'Error sending message.' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex justify-center flex-col items-center">
            <FormWrapper
                title="Get in Touch"
                description="Have questions? We're here to help. Send us a message and we'll reply as soon as possible."
                theme="red"
                className="max-w-3xl"
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <InputField label="Name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" />
                    <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" />
                    <InputField label="Phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Your Phone" />
                    <InputField label="Message" name="message" type="textarea" value={formData.message} onChange={handleChange} required placeholder="How can we help?" />

                    <div className="pt-5 flex justify-center">
                        <GlobalArrowButton
                            variant="white"
                            onClick={handleSubmit}
                            className="!bg-white !text-[var(--foreground)] hover:!bg-gray-100 !shadow-none"
                            arrowClassName="!bg-[var(--icons)]"
                            arrowIconClassName="!text-white"
                            textClassName="!font-semibold"
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </GlobalArrowButton>
                    </div>

                    {status.message && (
                        <p className={`text-center mt-4 ${status.type === 'success' ? 'text-white' : 'text-orange-200'}`}>
                            {status.message}
                        </p>
                    )}
                </form>
            </FormWrapper>
        </div>
    )
}
