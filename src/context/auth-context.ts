import React from 'react'

const authContext = React.createContext({
  jwt: '',
  handleJWTChange: (jwt: string) => {
    return
  },
})

export default authContext
