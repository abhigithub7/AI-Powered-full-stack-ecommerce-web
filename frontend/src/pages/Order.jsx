/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import Title from '../Components/Title'
import { shopDataContext } from '../context/ShopContext'
import { AuthDataContext } from '../context/authContext'
import axios from 'axios'

function Order() {

  const [orderData,setOrderData] = useState([])
  const {currency} = useContext(shopDataContext)


  const loadOrderData = async ()=>{
    try {
  
    const result = await axios.post('https://ai-powered-full-stack-ecommerce-web.onrender.com/api/order/userorder',{},{withCredentials:true})
     
    if(result.data)
    {
      let allOrderItem = []

      result.data.map((order)=>{
        order.items.map((item)=>{
          item['status'] = order.status
          item['payment'] = order.payment
          item['paymentMethod'] = order.paymentMethod
          item['date'] = order.date
          allOrderItem.push(item)
        })
      })
      setOrderData(allOrderItem.reverse())
    }
      
    } catch (error) {
      console.log(error)
      
    }
  }

useEffect(()=>{
  loadOrderData()

},[])

  return (
    <div className='w-[99vw] min-h-[100vh] p-[20px]  bg-gradient-to-l from-[#000000] to-[#000000]   overflow-hidden  pb-[150px] '>
       <div className='h-[8%] w-[100%] text-center mt-[80px] '>
           <Title text1={'MY'} text2={'ORDER'}/>
          </div>
          <div className='w-[100%]  h-[92%] flex flex-wrap gap-[20px]'>
            {

              orderData.map((item,index)=>(
                <div key={index} className='w-[100%] h-[10%] border-t border-b'>
                 <div className='w-[100%] h-[80%] flex items-center gap-6 bg-[#51808048] py-[10px] px-[20px] rounded-2xl relative'>
                  <img className='w-[130px] h-[130px] rounded-md' src={item.image1} alt="" />
                  <div className='items-start flex justify-center flex-col gap-[5px] '>
                    <p className='md:text-[25px] text-[20px] text-[#f3f9fc] '>{item.name}</p>
                    <div className='flex items-center gap-[8px] md:gap-[20px]'>

                      <p className='md:text-[18px] text-[12px] text-[#aaf4e7]'>{currency}{item.price}</p>
                      <p className='md:text-[18px] text-[12px] text-[#aaf4e7]'>{item.quantity}</p>
                      <p className='md:text-[18px] text-[12px] text-[#aaf4e7]'>{item.size}</p>

                    </div>
                    <div className='flex items-center'>
                      <p className='md:text-[18px] text-[12px] text-[#e4fbff] '>Date: <span className='text-[#e4fbff] pl-[10px] md:text-[16px] text-[11px] '>{new Date(item.date).toDateString()}</span></p>
                    </div>
                    <div className='flex items-center'>
                      <p className='md:text-[18px] text-[12px] text-[#e4fbff] '>Payment Method: {item.paymentMethod}</p>
                    </div>
                    <div className='absolute md:left-[55%] md:top-[40%] right-[2%] top-[2%]'>
                        <div className='flex items-center gap-[5px] '>
                              <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                              <p className='md:text-[17px] text-[10px] text-[#f3f9fc]'>{item.status}</p>
                        </div>
                    </div>
                    <div className='absolute md:right-[5%] right-[2%] md:top-[40%] top-[65%] '>
                      <button className='px-[15px] py-[7px] rounded-md bg-[#101919] text-[#f3f9fc] text-[12px] md:text-[16px] cursor-pointer active:bg-slate-500 ' onClick={loadOrderData}>Track Order</button>

                    </div>
                  </div>
                 </div>
                </div>
              ))

            }

          </div>
     
    </div>
  )
}

export default Order
