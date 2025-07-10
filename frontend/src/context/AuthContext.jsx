import React, { createContext } from 'react'

export const AuthDataContext = createContext()
function authContext({children}) {
  let serverUrl = "https://ai-powered-full-stack-ecommerce-web.onrender.com/api"
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
