import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Add from './Pages/Add'
import List from './Pages/List'
import Login from './Pages/Login'
import Orders from './Pages/Orders'
import { useContext } from 'react'
import { adminDATAContext } from './Context/AdminContext'
 import { ToastContainer, } from 'react-toastify';
function App() {
  const {adminData} = useContext(adminDATAContext)
  return (
   <>
   <ToastContainer />
  {!adminData ? <Login/> : <>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/add" element={<Add/>}/>
    <Route path="/list" element={<List/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/orders" element={<Orders/>}/>
   </Routes>
   </>}
   </>
  )
}

export default App
