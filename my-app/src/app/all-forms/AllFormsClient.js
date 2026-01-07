'use client'

import React, { useState } from 'react'
import EnquiryForm from '../components/forms/EnquiryForm'
import CareerForm from '../components/forms/CareerForm'
import AlumniForm from '../components/forms/AlumniForm'
import EventRegistrationForm from '../components/forms/EventRegistrationForm'
import CTCDApplicationForm from '../components/forms/CTCDApplicationForm'
import ContactForm from '../components/forms/ContactForm'
import GrievanceForm from '../components/forms/GrievanceForm'

const forms = [
    { id: 'enquiry', title: 'CIF / Enquiry', component: EnquiryForm },
    { id: 'career', title: 'Career Application', component: CareerForm },
    { id: 'alumni', title: 'Alumni Registration', component: AlumniForm },
    { id: 'event', title: 'Event Registration', component: EventRegistrationForm },
    { id: 'ctcd', title: 'CTCD Application', component: CTCDApplicationForm },
    { id: 'contact', title: 'Contact Us', component: ContactForm },
    { id: 'grievance', title: 'Grievance', component: GrievanceForm },
]

export default function AllFormsClient() {
    const [activeForm, setActiveForm] = useState('enquiry')

    const ActiveComponent = forms.find(f => f.id === activeForm)?.component || EnquiryForm

    return (
        <main className="min-h-screen bg-[var(--background)] py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-center mb-4 font-stix text-[var(--foreground)]">University Forms</h1>
                <p className="text-center text-[var(--light-text-gray)] mb-12 max-w-2xl mx-auto">
                    Access all Kalinga University application and inquiry forms from one place. Select a form below to begin.
                </p>

                {/* Form Selector Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {forms.map(form => (
                        <button
                            key={form.id}
                            onClick={() => setActiveForm(form.id)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border-2 ${activeForm === form.id
                                    ? 'bg-[var(--button-red)] text-white border-[var(--button-red)]'
                                    : 'bg-white text-[var(--light-text-gray)] border-gray-200 hover:border-[var(--button-red)]'
                                }`}
                        >
                            {form.title}
                        </button>
                    ))}
                </div>

                {/* Form Display */}
                <div className="max-w-5xl mx-auto animate-fadeIn">
                    <ActiveComponent />
                </div>
            </div>
        </main>
    )
}
