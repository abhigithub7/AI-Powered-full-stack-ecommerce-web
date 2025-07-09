import React, { useContext, useState } from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { shopDataContext } from '../context/ShopContext'
import { AuthDataContext } from '../context/authContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
function PlaceOrder() {
  const [method,setMethod] = useState('cod')
  const Navigate = useNavigate()
  const {serverUrl} = useContext(AuthDataContext)
const {cartItem,products,setCartItem,getCartAmount,deliveryFee,} = useContext(shopDataContext)
   const [formData, setFormData] = useState({
      firstname:'',
      lastname:'',
      email:'',
      street:'',
      city:'',
      state:'',
      pinCode:'',
      country:'',
      phone:''
  
     })
  
     const onChangeHandler =   (e) =>{
  
      const name = e.target.name;
      const value = e.target.value;
      setFormData(data=>({...data,[name]:value}))

    
  
     }


       const onSubmitHandler = async (e) =>{
        e.preventDefault();
        try {
          let orderItems = [];
          for(const items in cartItem)
          {
            for(const item in cartItem[items])
            {
              if(cartItem[items][item]>0)
              {
                const itemInfo = structuredClone(products.find(product=>product._id === items ))
                if(itemInfo)
                {
                  itemInfo.size = item
                  itemInfo.quantity = cartItem[items][item]
                  orderItems.push(itemInfo)
                }
              }


            }
          }

          let orderData ={
            address:formData,
            items:orderItems,
            amount:getCartAmount()+deliveryFee
          }
          switch(method){
            case 'Cash On Delivery': {
              const result =  await axios.post(serverUrl+'/order/placeorder',orderData,{withCredentials:true});
              console.log(result.data)
              toast.success("Your order Place sucessfully")
              setCartItem({})
              Navigate("/order")
              break;
              
            }
            
            default:
              break;
          }
          
        } catch (error) {
          console.log(error)
          toast.error("place order failed")
          
        }
      }



  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center  flex-col md:flex-row
     justify-center gap-[50px] relative '>
      <div className='lg:w-[50%] w-[100%] h-[100%] flex items-center justify-center mt-[90px] lg:mt-[0px] '>
        <form action=""
        onSubmit={onSubmitHandler}
        className='lg:w-[70%] w-[95%] h-[100%] lg:h-[70%]'
        >
          <div className='py-[10px]'>
           <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
          </div>
           <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
            <input onChange={onChangeHandler} name='firstname' value={formData.firstname} type="text" placeholder='First Name' className='w-[48%] h-[50px] rounded-md shadow-sm shadow-[#343434]  bg-slate-700 placeholder:text-white  text-[18px] px-[20px] ' required />
            <input onChange={onChangeHandler} name='lastname' value={formData.lastname} type="text" placeholder='Last Name'  className='w-[48%] h-[50px] rounded-md shadow-sm shadow-[#343434]  bg-slate-700 placeholder:text-white  text-[18px] px-[20px] ' required/>
           </div>
           <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
            <input onChange={onChangeHandler} name='email' value={formData.email} type="text" placeholder='Email address' className='w-[100%] h-[50px] rounded-md shadow-sm shadow-[#343434]  bg-slate-700 placeholder:text-white  text-[18px] px-[20px] ' required />
           </div>
           <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
            <input onChange={onChangeHandler} name='street' value={formData.street} type="text" placeholder='Street' className='w-[100%] h-[50px] rounded-md shadow-sm shadow-[#343434]  bg-slate-700 placeholder:text-white  text-[18px] px-[20px] ' required />
           </div>
           <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
            <input onChange={onChangeHandler} name='city' value={formData.city} type="text" placeholder='City' className='w-[48%] h-[50px] rounded-md shadow-sm shadow-[#343434]  bg-slate-700 placeholder:text-white  text-[18px] px-[20px] ' required />
            <input onChange={onChangeHandler} name='state' value={formData.state} type="text" placeholder='State'  className='w-[48%] h-[50px] rounded-md shadow-sm shadow-[#343434]  bg-slate-700 placeholder:text-white  text-[18px] px-[20px] ' required/>
           </div>
           <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
            <input onChange={onChangeHandler} name='pinCode' value={formData.pinCode} type="text" placeholder='Pincode' className='w-[48%] h-[50px] rounded-md shadow-sm shadow-[#343434]  bg-slate-700 placeholder:text-white  text-[18px] px-[20px] ' required />
            <input onChange={onChangeHandler} name='country' value={formData.country} type="text" placeholder='Country'  className='w-[48%] h-[50px] rounded-md shadow-sm shadow-[#343434]  bg-slate-700 placeholder:text-white  text-[18px] px-[20px] ' required/>
           </div>
            <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
            <input onChange={onChangeHandler} name='phone' value={formData.phone} type="text" placeholder='Phone no.' className='w-[100%] h-[50px] rounded-md shadow-sm shadow-[#343434]  bg-slate-700 placeholder:text-white  text-[18px] px-[20px] ' required />
           </div>
           <div>
                  <button type='submit' className='text-[18px] active:bg-slate-500 cursor-pointer  bg-[#3bcee848] border-[#80808049] py-[10px] px-[50px]  gap-[20px] absolute lg:right-[20%] bottom-[10%] right-[35%] border-[1px] ml-[30px] flex items-center justify-center rounded-2xl mt-[10px] text-white shadow-md shadow-black' >PLACE ORDER</button>

           </div>
        </form>
      
      </div>
        <div className='lg:w-[50%] w-[100%] min-h-[100vh] flex items-center justify-center gap-[30px] '>
     <div className='w-[90%] lg:w-[70%] h-[100%] lg:h-[70%] flex flex-col items-center justify-center gap-[10px] '>
     <CartTotal/>
       <div className='py-[10px]'>
           <Title text1={'PAYMENT'} text2={'METHOD'}/>
          </div>
          <div className='w-[100%] h-[30vh] lg:h-[100px] flex items-start justify-center mt-[20px] lg:mt-[0px] gap-[50px]'>
         <button onClick={()=>setMethod('razorpay')} className={`w-[200px] h-[50px] bg-gradient-to-l from-[#95b3f8] to-white text-[14px] px-[20px] rounded-sm text-[#332f6f] font-bold ${method ==='razorpay' ? "border-[5px] border-blue-900 rounded-sm ":""}`}>  <img className='h-[100%] w-[100%] object-fill rounded-sm' src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-07/04/full/1656922506-9167.jpg?im=FeatureCrop,size=(826,465" alt="" />  </button>
         <button onClick={()=>setMethod('Cash On Delivery')} className={`w-[200px] h-[50px] bg-gradient-to-l from-[#95b3f8] to-white text-[14px] px-[20px] rounded-sm text-[#332f6f] font-bold ${method ==='cod' ? "border-[5px] border-blue-900 rounded-sm ":""}`}>CASH ON DELIVERY</button>
          </div>
     </div>
        </div>
    </div>
  )
}

export default PlaceOrder
