/* eslint-disable react-refresh/only-export-components */
import React, { createContext } from 'react';

export const authDATAContext = createContext();

function AuthContext({ children }) {
  const serverUrl = "http://localhost:2199"; // You can set your actual URL here or receive via props

  const value = {
    serverUrl,
  };

  return (
    <authDATAContext.Provider value={value}>
      {children}
    </authDATAContext.Provider>
  );
}

export default AuthContext;
