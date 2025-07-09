/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthDataContext } from '../../../frontend/src/context/authContext'
import { authDATAContext } from '../Context/AuthContext'
import axios from 'axios'
import { useEffect } from 'react'
import { SiHackthebox } from "react-icons/si";
function Orders() {
  const [orders,setOrders] = useState([])
  const {serverUrl} = useContext(authDATAContext)


  const fetchOrders = async () =>{
    try {
       const result = await axios.post(serverUrl+'/api/order/list',{},{withCredentials:true})
    setOrders(result.data.reverse())
      
    } catch (error) {
      console.log(error)
      
    }

   
  }
  const statusHandler = async (e,orderId) =>{

    try {
          const result = await axios.post(serverUrl+'/api/order/status',{orderId,status:e.target.value}, {withCredentials:true})
            if(result.data)
            {
              await fetchOrders()
            }
      
    } catch (error) {
      console.log(error)
      
    }
  }

  useEffect(()=>{
    fetchOrders()

  },[])
  return (
    <div className='w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#020607] text-white '>
      <Navbar/>
      <div className='w-[100%] h-[100%] flex items-center justify-center lg:justify-start'>
        <Sidebar/>
        <div className='lg:w-[85%] w-auto md:w-[70%] h-[100%] lg:ml-[350px] md:ml-[250px] mt-[70px] flex flex-col gap-[30px] overflow-x-hidden py-[50px] ml-[100px]'>
        <div className='w-[400px] h-[50px] text-[28px] md:text-[40px]  text-white '>All Order List</div>
        {
          orders.map((order,index)=>(
            <div key={index} className='w-[90%] h-[40%] bg-slate-600 rounded-xl flex lg:items-center items-start justify-between flex-col lg:flex-row p-[10px] md:px-[20px] gap-[20px]'>
             <SiHackthebox className='h-[60px] w-[60px] text-black p-[5px] rounded-lg bg-white' />
             <div>
              <div className='flex item-start justify-center flex-col gap-[5px] text-[16px] text-[#56dbfc] '>
                {
                  order.items.map((item,index)=>{
                    if(index === orders.items -1){
                      return <p key={index} >{item.name.toUpperCase()} * {item.quantity} <span>{item.size}</span></p>
                    }
                    else{
               return <p key={index} >{item.name.toUpperCase()} * {item.quantity} <span>{item.size}</span>,</p>

                    }
                  })
                }

              </div>
          
          <div className='text-[15px] text-green-100'>
            <p>{order.address.firstname+" "+order.address.lastname}</p>
            <p>{order.address.street+", "}</p>
            <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.pinCode}</p>
            <p>{order.address.phone}</p>
          </div>
             </div>

      <div className='text-[15px] text-green-100'>
        <p>Items : {order.items.length}</p>
        <p>Method : {order.paymentMethod}</p>
        <p>Payment: {order.payment ? 'Done':'Panding'}</p>
        <p>Date: {new Date(order.date).toLocaleDateString()}</p>
        <p className='text-[20px] '> ₹ {order.amount}</p>

      </div>
      <select name="" value={order.status} className='px-[5px] py-[10px] bg-slate-500  rounded-lg border-[1px] border-[#96eef3]' id="" onChange={((e)=>statusHandler(e,order._id))}>
        <option value="Order placed">Order placed</option>
        <option value="Packing">Packing</option>
        <option value="shipped">shipped</option>
        <option value="Out for Delivery">Out for Delivery</option>
        <option value="Delivered">Delivered</option>
      </select>


            </div>
          ))

        }
        </div>
      </div>
    </div>
  )
}

export default Orders
