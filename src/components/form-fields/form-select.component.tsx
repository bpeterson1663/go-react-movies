import React from 'react'

interface FormSelectT {
  label: string
  name: string
  id: string
  value: string
  options: string[]
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function FormSelect({ handleChange, value, label, name, options }: FormSelectT): JSX.Element {
  return (
    <div className="mb-3">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <select name={name} className="form-select" value={value} onChange={handleChange}>
        <option className="form-select">Choose...</option>
        {options.map((option) => (
          <option key={option} className="form-select" value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
