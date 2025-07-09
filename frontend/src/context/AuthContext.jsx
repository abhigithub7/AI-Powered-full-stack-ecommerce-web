import React, { createContext } from 'react'

export const AuthDataContext = createContext()
function authContext({children}) {
  let serverUrl = "http://localhost:2199/api"
  const value ={
    serverUrl

  }
  return (
    <div>
      <AuthDataContext value={value}>
        {children}
      </AuthDataContext>
    </div>
  )
}

export default authContext
