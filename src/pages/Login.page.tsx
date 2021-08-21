import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router'
import { Alert, FormInput } from '../components'
import { AlertT, UserAuthT } from '../constants'
import AuthContext from '../context/auth-context'
import { signIn } from '../api'

export default function Login() {
  const [userAuth, setUserAuth] = useState<UserAuthT>({} as UserAuthT)
  const [alert, setAlert] = useState<AlertT>({ alertType: 'd-none', message: '' })
  const history = useHistory()
  const auth = useContext(AuthContext)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value
    let name = event.target.name
    setUserAuth((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      const { token } = await signIn(userAuth)
      setAlert({ alertType: 'alert-success', message: 'Login Success!' })
      auth.handleJWTChange(token)
      history.push('/')
    } catch (err) {
      setAlert({ alertType: 'alert-danger', message: err.message })
    }
  }

  return (
    <>
      <h2>Login</h2>
      <Alert alertType={alert.alertType} message={alert.message} />
      <form onSubmit={handleSubmit} className="pt-3">
        <FormInput required id="email" label="Email" type="email" name="email" handleChange={handleInputChange} />
        <FormInput
          required
          id="password"
          label="Password"
          type="password"
          name="password"
          handleChange={handleInputChange}
        />
        <hr />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  )
}
