'use client'

import React, { useState } from 'react'
import { FormWrapper, InputField, FormGrid } from './FormComponents'
import GlobalArrowButton from '../general/global-arrow_button'
import { submitForm } from '../../config/api'

export default function EventRegistrationForm() {
    const [formData, setFormData] = useState({
        news_event: '',
        name: '',
        email: '',
        phone: '',
        date_of_birth: '',
        gender: '',
        nationality: '',
    })
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({ type: '', message: '' })

    const fetchEvents = async () => {
        try {
            const response = await fetch('https://kalinga.dupebox.com/api/news-events/')
            const data = await response.json()
            const results = data.results || data
            setEvents(results.map(e => ({ value: e.id.toString(), label: e.title || e.heading || e.name })))
        } catch (err) {
            console.error("Failed to fetch events", err)
        }
    }

    React.useEffect(() => {
        fetchEvents()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus({ type: '', message: '' })

        try {
            await submitForm('/event-registrations/', formData)
            setStatus({ type: 'success', message: 'Registration successful!' })
        } catch (err) {
            setStatus({ type: 'error', message: err.message || 'Error submitting form.' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <FormWrapper
            title="Event Registration"
            description="Register for upcoming events and workshops at Kalinga University."
            theme="blue"
        >
            <form onSubmit={handleSubmit}>
                <FormGrid>
                    <InputField
                        label="Event" name="news_event" type="select" value={formData.news_event} onChange={handleChange} required
                        options={events}
                    />
                    <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
                    <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
                    <InputField label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />
                    <InputField label="Date of Birth" name="date_of_birth" type="date" value={formData.date_of_birth} onChange={handleChange} />
                    <InputField
                        label="Gender" name="gender" type="select" value={formData.gender} onChange={handleChange}
                        options={[
                            { value: 'male', label: 'Male' },
                            { value: 'female', label: 'Female' },
                            { value: 'other', label: 'Other' },
                            { value: 'prefer_not_to_say', label: 'Prefer not to say' }
                        ]}
                    />
                    <InputField label="Nationality" name="nationality" value={formData.nationality} onChange={handleChange} />
                </FormGrid>

                <div className="flex justify-center mt-10">
                    <GlobalArrowButton variant="white" onClick={handleSubmit}>
                        {loading ? 'Submitting...' : 'Register for Event'}
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
