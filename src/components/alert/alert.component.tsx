import React from 'react'
import { AlertT } from '../../constants'

export default function Alert({ alertType = 'd-none', message }: AlertT) {
  return (
    <div className={`alert ${alertType}`} role="alert">
      {message}
    </div>
  )
}
