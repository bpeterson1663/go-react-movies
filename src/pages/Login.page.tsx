import React, { useState } from 'react'
import { Alert, FormInput } from '../components'
import { AlertT, UserAuthT } from '../constants'
interface LoginT {
  handleJWTChange: (jwt: string) => void
}
export default function Login({ handleJWTChange }: LoginT) {
  const [userAuth, setUserAuth] = useState<UserAuthT>({} as UserAuthT)
  const [alert, setAlert] = useState<AlertT>({ alertType: 'd-none', message: '' })
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value
    let name = event.target.name
    setUserAuth((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('userAuth: ', userAuth)
    setAlert({ alertType: 'alert-success', message: 'Login Success!' })
  }

  return (
    <>
      <h2>Login</h2>
      <Alert alertType={alert.alertType} message={alert.message} />
    <form onSubmit={handleSubmit} className="pt-3">
        <FormInput required id="email" label="Email" type="email" name="email" handleChange={handleInputChange} />
        <FormInput required id="password" label="Password" type="password" name="password" handleChange={handleInputChange} />
        <hr />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  )
}
