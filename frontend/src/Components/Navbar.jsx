import React, { useState } from 'react'
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from 'react';
import { userDataContext } from '../context/UserContext';
import { IoSearchCircle } from "react-icons/io5";
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { IoMdHome } from "react-icons/io";
import { HiOutlineCollection } from "react-icons/hi";
import { MdContacts } from "react-icons/md";
import { shopDataContext } from '../context/ShopContext';
import {toast} from 'react-toastify'
function Navbar() {

  const {showSearch,setShowSearch,search,setSearch,getCartCount} = useContext(shopDataContext)
    const [showProfile, setShowProfile] = useState(false)
 
    const navigate = useNavigate()

   const {getCurrentUser,userData} = useContext(userDataContext)

   const handlLogout = async () =>{
    try {
      const result = await axios.get('https://ai-powered-full-stack-ecommerce-web.onrender.com/api/auth/logout',
     {withCredentials:true})
        
      toast.success("Logout Succesfully")
      console.log(result.data)
      getCurrentUser(null)
       
    } catch (error) {
      console.error("logout error ",error)
      
    }

   }
   

  return (
    <div className='w-[100vw] h-[70px] bg-black z-50 fixed top-0 flex items-center justify-between px-[30px] shadow-md border-b border-gray-400 '> 
      
      <div className='w-[20%] lg:w-[35%] flex items-center justify-start gap-[10px]'>
        <img className='w-[60px] rounded-full' src="https://media.istockphoto.com/id/1367164120/vector/tech-shopping-template-design-online-shopping-vector-icon.jpg?s=612x612&w=0&k=20&c=3QhfDLSal5LGtP3AuNh0QZgHqioMPUobTZft80gfyi4=" alt="" />
        <h1 className='font-semibold font-sans text-white text-xl'>ShopCart</h1>

      </div>
      <div className='w-[50%] lg:w-[40%] hidden md:flex'>
        <ul className='flex items-center justify-center gap-[60px] text-white '>
            <li className='text-[20px] hover:text-gray-500 cursor-pointer text-white font-bold rounded-xl' onClick={()=>navigate("/")}>HOME</li>
            <li className='text-[20px] hover:text-gray-500 cursor-pointer text-white font-bold rounded-xl' onClick={()=>navigate("/collection")}>COLLECTIONS</li>
            <li className='text-[20px] hover:text-gray-500 cursor-pointer text-white font-bold rounded-xl' onClick={()=>navigate("/about")} >ABOUT</li>
            <li className='text-[20px] hover:text-gray-500 cursor-pointer text-white font-bold rounded-xl' onClick={()=>navigate("/contact")}>CONTACT</li>
        </ul>

      </div>
      <div className='w-[30%] flex items-center justify-end gap-[20px]'>
        {!showSearch && <IoSearchCircleOutline  className='w-[38px] h-[38px] text-white  cursor-pointer' onClick={()=>{setShowSearch(prev=>!prev);navigate('/collection')}} />}
         {showSearch && <IoSearchCircle  className='w-[38px] h-[38px] text-white cursor-pointer' onClick={()=>setShowSearch(prev=>!prev)} />}
                {userData && <div className='h-[30px] w-[30px] bg-white text-black rounded-full text-xl flex items-center justify-center cursor-pointer' onClick={()=>setShowProfile(prev=>!prev)}>{userData?.username.slice(0,1)}</div>}

         {!userData &&  <FaUserCircle  className='w-[29px] h-[29px] text-[#000000]  cursor-pointer' onClick={()=>setShowProfile(prev=>!prev)} />}
          < IoCartOutline className='w-[30px] h-[30px] text-white  cursor-pointer hidden md:block'  onClick={()=>navigate("/cart")} /> 
          <p className='absolute w-[18px] h-[18px]  items-center  justify-center bg-white px-[5px] py-[2px] text-black rounded-full text-[9px] top-[10px] right-[23px] hidden  md:block  '>{getCartCount()}</p>
      </div>
      
     {showSearch && <div className='w-[100%] h-[80px] bg-[#070808dd] absolute top-[100%] left-0 right-0 flex items-center justify-center'>
    <input type="text" className='lg:w-[50%] w-[80%] h-[60%] bg-[#f1f1f1]  rounded-[30px] px-[50px] placeholder:text-black text-black text-[18px] ' placeholder='Search here' value={search} onChange={(e)=>setSearch(e.target.value)} />
      </div>}

  {showProfile && <div className='absolute w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-10 cursor-pointer'>
   <ul className='w-[100%] h-[100%] flex items-start justify-around flex-col text-[17px] py-[10px] text-white'>
   { !userData && <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer' onClick={()=>{navigate('/login'); setShowProfile(false)}}>Login</li>}
      {userData && <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer' onClick={()=>{handlLogout();setShowProfile(false)}}>Logout</li> }
    <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer' onClick={()=>{navigate('/order'); setShowProfile(false)}}>Orders</li>
    <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer'  onClick={()=>{navigate('/about'); setShowProfile(false)}}>About</li>
   </ul>
  </div>}

 <div className='w-[100vw] h-[90px] flex text-[13px] items-center justify-between px-[20px] fixed bottom-0 left-0 bg-[#191818]  md:hidden'>
   <button className='text-[white]  flex items-center justify-center flex-col gap-[2px] '><IoMdHome className='w-[25px] h-[25px] text-white md:hidden' onClick={()=>navigate("/")} />Home</button>
      <button className='text-[white] flex items-center justify-center flex-col gap-[2px] '><HiOutlineCollection className='w-[25px] h-[30px] text-white md:hidden' onClick={()=>navigate("/collection")} />Collections</button>
   <button className='text-[white] flex items-center justify-center flex-col gap-[2px] '><MdContacts className='w-[25px] h-[25px] text-white md:hidden' onClick={()=>navigate("/contact")} />Contact</button>
   <button className='text-[white] flex items-center justify-center flex-col gap-[2px] '><IoCartOutline className='w-[25px] h-[25px] text-white md:hidden' onClick={()=>navigate("/cart")} />Cart</button>
   <p className='absolute w-[18px] h-[18px] flex items-center justify-center bg-white px-[5px] py-[2px] text-black font-semibold rounded-full text-[9px] top-[8px] right-[18px] '>{getCartCount()}</p>

 </div>

    </div>
  )
}

export default Navbar
