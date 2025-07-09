import React from 'react'
import Title from '../Components/Title'
import NewLater from '../Components/NewLater'
function Contact() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-l from-[#000000] to-[#000000] gap-12 pt-20 pb-10">
      <Title text1={'CONTACT'} text2={'US'}/>
      <div className='w-[100%] flex flex-col items-center justify-center lg:flex-row'>
       <div className='lg:w-[50%] w-[100%] flex items-center justify-center'>
        <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/08/contact-us-2-62fa2cc2edbaf-sej.png" className='lg:w-[70%] w-[80%] shadow-md shadow-black rounded-sm' alt="" />
       </div>
       <div className='lg:w-[50%] w-[80%] flex flex-col items-start justify-center mt-[20px] lg:mt-0 gap-[20px]'>
        <p className='lg:w-[80%] w-[100%] text-white font-bold lg:text-[18px] text-[15px] '>Our Store</p>
         <p className='lg:w-[80%] w-[100%] text-white font-bold md:text-[16px] text-[13px] '>
          <p>12345 Random Station</p>
          <p>Random city, State , India</p>
         </p>
         <p className='lg:w-[80%] w-[100%] text-white font-bold md:text-[16px] text-[13px] '>
          <p>tel: 91+99XXXXXX</p>
          <p>Email: admin@onecart.com</p>
         </p>
         <p className='lg:w-[80%] w-[100%] text-white  md:text-[18px]  mt-[10px] font-bold text-[15px] '>Careers At OneCart</p>
         <p className='lg:w-[80%] w-[100%] text-white  md:text-[16px]  mt-[10px] font-semibold text-[13px] '>Learn More About Our Team and Job openings</p>
         <button className='px-[30px] py-[20px]  flex items-center justify-center text-white bg-transparent border active:bg-slate-600 rounded-md'>Explore Jobs</button>
       </div>
      </div>
      <NewLater/>
      
    </div>
  )
}

export default Contact
