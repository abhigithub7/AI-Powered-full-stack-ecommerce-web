import React from 'react'

function Footer() {
  return (
    <div className='w-[100%] md:h-[36vh] h-[21vh] mb-[77px] md:mb-[0px] '>
        <div className='w-[100%] md:h-[30vh] h-[15vh] md:mb-[0px] bg-[#dbfcfcec] flex items-center justify-center md:px-[50px] px-[5px] '>
         <div className='md:w-[30%] w-[35%] h-[100%] flex items-start justify-center flex-col gap-[5px] '>
            <div className='flex items-center justify-start gap-[5px] mt-[10px] md:mt-[40px] '>
            <img className='md:w-[40px] md:h-[40px] rounded-full w-[30px] h-[30px]' src="https://media.istockphoto.com/id/1367164120/vector/tech-shopping-template-design-online-shopping-vector-icon.jpg?s=612x612&w=0&k=20&c=3QhfDLSal5LGtP3AuNh0QZgHqioMPUobTZft80gfyi4=" alt="" />
            <p className='text-[19px] md:text-[20px] text-black font-semibold font-sans'>OneCart</p>
            </div>
             <p className='text-[15px] text-[#1e2223] hidden md:block'>OneCart is your all-in-one online shopping destination , offering top-quality products, unbeatable deals, and fast delivery-all backed by trusted service designed to make your life easier every day.</p>
             <p className='text-[15px] text-[#1e2223] md:hidden flex'>Fast. Easy. Reliable. Onecart Shopping</p>

        
         </div>
             <div className='md:w-[25%] w-[30%] h-[100%] flex items-center justify-center flex-col text-center '>
              <div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px] '>
              <p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans '>COMPANY</p>
              </div>
              <ul>
                <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>Home</li>
                <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>About US</li>
                <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>Delivery</li>
                <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>Privacy Policy</li>

              </ul>
            </div>
            <div className='md:w-[25%] w-[40%] h-[100%] flex items-center justify-center flex-col text-center'>
            <div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px] '>
              <p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans '>GET IN TOUCH</p>
              </div>
               <ul>
                <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>+91-930XXXXX</li>
                <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>onecart@gmail.com</li>
                <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>+1-123-567-987</li>
                <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>admin@onecart.com</li>

              </ul>
            </div>
        </div>
       <div className='w-[100%] h-[1px] bg-slate-400'>
        <div className='w-[100%] h-[5vh] bg-[#dbfcfcec] flex items-center justify-center'>Copyright 2025@onecart.com-All Rights Reserved</div>
       </div>
    </div>
  )
}

export default Footer
