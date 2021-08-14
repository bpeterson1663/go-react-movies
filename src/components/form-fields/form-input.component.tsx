import React from 'react'

interface FormInputT {
  label: string
  name: string
  id: string
  value?: string | number
  required?: boolean
  type: 'text' | 'number' | 'hidden' | 'email' | 'password'
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FormInput({ handleChange, value, id, name, label, type, required = false }: FormInputT): JSX.Element {
  return (
    <div className="mb-3">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input type={type} required={required} className="form-control" id={id} name={name} value={value} onChange={handleChange} />
    </div>
  )
}
