'use client'

import React from 'react'

export const FormWrapper = ({ title, description, children, theme = 'blue', className = "" }) => {
    const bgClass = theme === 'blue' ? 'bg-[var(--dark-blue)]' : 'bg-[var(--button-red)]'
    const borderClass = theme === 'red' ? 'border-2 border-white shadow-2xl' : ''

    return (
        <section className={`w-full ${bgClass} py-16 px-4 sm:px-8 rounded-2xl ${borderClass} ${className}`}>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-white text-center text-3xl sm:text-[40px] font-light font-stix mb-4">
                    {title}
                </h2>
                {description && (
                    <p className="text-center text-white/70 max-w-3xl mx-auto mb-12 text-sm sm:text-base font-plus-jakarta-sans">
                        {description}
                    </p>
                )}
                <div className="mt-8">
                    {children}
                </div>
            </div>
        </section>
    )
}

export const InputField = ({ label, name, type = "text", placeholder, required, value, onChange, error, options, multiple }) => {
    const baseClasses = "w-full bg-transparent border-b border-white/40 focus:border-[var(--dark-orange-red-light)] outline-none text-white py-2 transition-colors duration-300 placeholder:text-white/40 font-plus-jakarta-sans"

    return (
        <div className="mb-6">
            <label htmlFor={name} className="block text-white/80 text-sm font-medium mb-1 font-plus-jakarta-sans">
                {label} {required && <span className="text-red-400">*</span>}
            </label>

            {type === 'select' ? (
                <select
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={`${baseClasses} appearance-none cursor-pointer`}
                >
                    <option value="" className="text-gray-800">Select {label}</option>
                    {options?.map(opt => (
                        <option key={opt.value} value={opt.value} className="text-gray-800">
                            {opt.label}
                        </option>
                    ))}
                </select>
            ) : type === 'textarea' ? (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    rows={4}
                    className={`${baseClasses} resize-none`}
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={type === 'file' ? undefined : value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    multiple={multiple}
                    className={baseClasses}
                />
            )}

            {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
        </div>
    )
}

export const FormGrid = ({ children }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
        {children}
    </div>
)
