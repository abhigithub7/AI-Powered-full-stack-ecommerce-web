import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { authDATAContext } from '../Context/AuthContext'
import { adminDATAContext } from '../Context/AdminContext'
function Navbar() {
    const navigate = useNavigate()
  const {serverUrl} = useContext(authDATAContext)

  const {getAdmin} = useContext(adminDATAContext)


  const logOut = async () =>{
    try {
      const res = await axios.get(serverUrl+"/api/auth/logout",{withCredentials:true})
      console.log(res.data);
      getAdmin();
      navigate("/login")
      
    } catch (error) {
      console.error("Logout failed:",error)
      
    }
  }


  return (
    <div className='w-[100vw] h-[70px] bg-[#dcdbdbf8] z-10 fixed top-0 flex items-center justify-between px-[30px] overflow-x-hidden shadow-md shadow-black' >
      <div className='w-[30%] lg:w-[30%] flex items-center justify-start gap-[10px] cursor-pointer' onClick={()=>navigate("/")}>
        <img className='w-[40px] rounded-full' src="https://media.istockphoto.com/id/1367164120/vector/tech-shopping-template-design-online-shopping-vector-icon.jpg?s=612x612&w=0&k=20&c=3QhfDLSal5LGtP3AuNh0QZgHqioMPUobTZft80gfyi4=" alt="" />
        <h1 className='font-semibold font-sans text-black text-xl'>ShopCart</h1>
      </div>
       <button className='bg-black text-white hover:border-[2px] border-[#89daea] px-4 py-2 rounded-lg cursor-pointer' onClick={logOut}>Logout </button>
    </div>
  )
}

export default Navbar
