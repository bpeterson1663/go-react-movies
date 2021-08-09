import React from 'react'

interface FormInputT {
    label: string,
    name: string,
    id: string,
    value: string | number,
    type: 'text' | 'number' | 'hidden'
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FormInput({handleChange, value, id, name, label, type}: FormInputT): JSX.Element {
    return (
        <div className="mb-3">
          <label htmlFor={label} className="form-label">
            {label}
          </label>
          <input
            type={type}
            className="form-control"
            id={id}
            name={name}
            value={value}
            onChange={handleChange}
          />
        </div>
    )
}