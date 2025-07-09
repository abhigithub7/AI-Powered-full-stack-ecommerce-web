import React from 'react';
import Title from '../Components/Title';
import NewLater from '../Components/NewLater';

function About() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-l from-[#000000] to-[#000000] gap-12 pt-20 pb-10">
      
      <Title text1="ABOUT" text2="US" />

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 px-4">
        
        <div className="lg:w-1/2 w-full flex justify-center">
          <img 
            className="w-[80%] h-[80%] rounded-sm shadow-md shadow-black"
            src="https://blog.contactpigeon.com/wp-content/uploads/2018/08/best-product-pages-2018.jpg"
            alt="About us"
          />
        </div>

        <div className="lg:w-1/2 w-full flex flex-col items-start gap-4 text-white">
          <p className="text-sm md:text-base lg:w-4/5">
            From the latest trends to timeless classics, we carefully curate a wide range of products to meet your every need. Our team works tirelessly to bring you exclusive collections, special offers, and innovative designs — all while ensuring you enjoy a smooth and secure shopping experience.
          </p>
          <p className="text-sm md:text-base lg:w-4/5">
            We believe in customer satisfaction, easy returns, and fast delivery — because shopping online should be as enjoyable and hassle-free as possible. Join thousands of happy customers who choose us for reliability, great value, and a seamless experience.
          </p>
          <p className="font-bold text-base lg:text-lg mt-2">Our Mission</p>
          <p className="text-sm md:text-base lg:w-4/5">
            Our mission is to offer high-quality products, exclusive deals, and exceptional customer service that you can trust. Whether you're looking for the latest trends, timeless essentials, or unique finds, we have something for everyone.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-6 px-4">
        <Title text1="WHY" text2="CHOOSE US" />

        <div className="w-full max-w-8xl flex flex-wrap justify-center gap-6">
          
          <div className="w-full sm:w-[400px] flex flex-col items-center text-center gap-3 p-6  rounded-lg backdrop-blur-2xl bg-[#ffffff0b] text-white">
            <b className="text-lg font-semibold text-[#bff1f9]">Quality Assurance</b>
            <p className="text-sm">
              We are deeply committed to delivering products that meet the highest standards of quality, durability, and performance. Every item in our collection undergoes careful selection and rigorous quality checks before it reaches your doorstep.
            </p>
          </div>

          <div className="w-full sm:w-[400px] flex flex-col items-center text-center gap-3 p-6  rounded-lg backdrop-blur-2xl bg-[#ffffff0b] text-white">
            <b className="text-lg font-semibold text-[#bff1f9]">Convenience</b>
            <p className="text-sm">
              We’re dedicated to making your shopping experience as easy and enjoyable as possible. From browsing to checkout, we focus on delivering seamless convenience so you can shop anytime, anywhere — with just a few clicks.
            </p>
          </div>

          <div className="w-full sm:w-[400px] flex flex-col items-center text-center gap-3 p-6  rounded-lg backdrop-blur-2xl bg-[#ffffff0b] text-white">
            <b className="text-lg font-semibold text-[#bff1f9]">Exceptional Customer Service</b>
            <p className="text-sm">
              Your satisfaction is at the heart of everything we do. We believe that shopping online should be as personal, friendly, and reliable as shopping in-store — and that’s why we go the extra mile to provide exceptional customer service at every step.
            </p>
          </div>

        </div>
      </div>
        <NewLater/>
    </div>
  );
}

export default About;
