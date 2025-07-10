/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { useState } from 'react'
import { useContext } from 'react'
import { authDATAContext } from '../Context/AuthContext'
import axios from 'axios'
import { useEffect } from 'react'

function Home() {
  const [totalProducts, setTotalProducts] = useState(0)
   const [totalOrders,setTotalOrders] = useState(0)
   const {serverUrl} = useContext(authDATAContext)


   const fetchCounts = async () =>{

    try {
      const products = await axios.get(serverUrl+'api/product/list',{},{withCredentials:true})
       setTotalProducts(products.data.length)

       const orders = await axios.post(serverUrl+'api/order/list',{},{withCredentials:true})
       setTotalOrders(orders.data.length)
    } catch (error) {
      console.log("Failed to fetch count ",error)
      
    }

   }

   useEffect(()=>{
    fetchCounts()
   },[])
  return (
    <div className='w-full min-h-screen   bg-gradient-to-l from-[#141414] to-[#050d0f] text-white relative '>
      <Navbar/>
      <Sidebar/>
      <div className='md:w-[70vh] w-auto h-[100vh] absolute left-[25%] flex items-start justify-start flex-col gap-[40px] py-[100px] '>
        <h1 className='md:text-[35px] text-[20px] text-[#afe2f2]'>ShopCart Admin Pannel</h1>

        <div className='flex items-center justify-start gap-[50px] flex-col md:flex-row'>
          <div className='text-white md:w-[400px] w-[250px] md:max-w-[70%] max-w-[70%] md:h-[200px] h-[100px] bg-[#0000002e] flex items-center justify-center flex-col gap-[20px] rounded-lg shadow-sm shadow-black  backdrop:blur-lg md:text-[25px] text-[15px] border-[1px] border-[#969595]'>Total No. of Products <span className='md:px-[20px] px-[20px] md:py-[10px] py-[6px] bg-[#030e11] rounded-lg flex items-center justify-center border-[1px] border-[#969695]'>{totalProducts}</span></div>
                   <div className='text-white md:w-[400px] w-[250px] md:max-w-[70%] max-w-[80%] md:h-[200px] h-[100px] bg-[#0000002e] flex items-center justify-center flex-col gap-[20px] rounded-lg shadow-sm shadow-black  backdrop:blur-lg md:text-[25px] text-[16px] border-[1px] border-[#969595]'>Total No. of Orders <span className='md:px-[20px] px-[20px] md:py-[10px] py-[6px] bg-[#030e11] rounded-lg flex items-center justify-center border-[1px] border-[#969695]'>{totalOrders}</span></div>

        </div>
      </div>
      
    </div>
  )
}

export default Home
