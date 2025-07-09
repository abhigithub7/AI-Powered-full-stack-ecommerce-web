import React from 'react';
import Title from './Title';
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";

function OurPolicy() {
  return (
    <div className="w-full min-h-[70vh] bg-gradient-to-l from-[#000000] to-[#000000] flex flex-col items-center py-10">
      
      <div className="w-full text-center mb-8">
        <Title text1="OUR" text2="POLICY" />
        <p className="w-full max-w-[700px] mx-auto text-xs sm:text-sm md:text-lg text-blue-100 px-4">
          Customer Friendly Policies - Committed to your satisfaction and safety.
        </p>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-6 lg:gap-10 px-4">
        
        <div className="w-full sm:w-[300px] md:w-[250px] lg:w-[300px] flex flex-col items-center text-center gap-2">
          <RiExchangeFundsLine className="w-8 h-8 md:w-12 md:h-12 text-[#90b9ff]" />
          <p className="font-semibold text-base md:text-lg lg:text-xl text-[#a5e8f7]">Easy Exchange Policy</p>
          <p className="font-medium text-xs md:text-sm text-[aliceblue]">
            Exchange made easy - quick, simple, and customer-friendly process.
          </p>
        </div>

        <div className="w-full sm:w-[300px] md:w-[250px] lg:w-[300px] flex flex-col items-center text-center gap-2">
          <TbRosetteDiscountCheckFilled className="w-8 h-8 md:w-12 md:h-12 text-[#90b9ff]" />
          <p className="font-semibold text-base md:text-lg lg:text-xl text-[#a5e8f7]">7 Days Return Policy</p>
          <p className="font-medium text-xs md:text-sm text-[aliceblue]">
            Shop with confidence - 7 days easy return guarantee.
          </p>
        </div>

        <div className="w-full sm:w-[300px] md:w-[250px] lg:w-[300px] flex flex-col items-center text-center gap-2">
          <RiCustomerService2Fill className="w-8 h-8 md:w-12 md:h-12 text-[#90b9ff]" />
          <p className="font-semibold text-base md:text-lg lg:text-xl text-[#a5e8f7]">Best Customer Support</p>
          <p className="font-medium text-xs md:text-sm text-[aliceblue]">
            Trusted customer support — your satisfaction is our priority.
          </p>
        </div>

      </div>
    </div>
  )
}

export default OurPolicy;
