import React from 'react'

interface FormTextareaT {
  label: string
  name: string
  id: string
  value: string
  rows: number
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function FormTextarea({ handleChange, value, rows, label, id, name }: FormTextareaT): JSX.Element {
  return (
    <div className="mb-3">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <textarea className="form-control" rows={rows} id={id} name={name} onChange={handleChange} value={value} />
    </div>
  )
}
