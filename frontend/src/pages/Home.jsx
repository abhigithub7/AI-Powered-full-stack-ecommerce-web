import React, { useEffect, useState } from 'react'
import Background from '../Components/Background'
import Hero from '../Components/Hero'
import Product from './Product'
import OurPolicy from '../Components/OurPolicy'
import NewLater from '../Components/NewLater'
import Footer from '../Components/Footer'

function Home() {
  const heroData =[
    {text1:"30% OFF limited offer",text2:"on all products"},
    {text1:"70% on limited offer",text2:"Style that"},
    {text1:"10% OFF limited Discount",text2:"Fashon mens"},
    {text1:"5% OFF Bumper offer",text2:"Jio digital life"},
   
  ]
  useEffect(()=>{
    const interval = setInterval(()=>{
      setHeroCount(preCount =>(preCount === 3 ? 0 : preCount + 1))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const [heroCount,setHeroCount] = useState(0)
  return (

    <>
    <div className='overflow-x-hidden relative top-[70px]'>

    
    <div className='md:w-[100vw]   lg:h-[80vh] md:h-[50vh] sm:h-[30vh]  bg-gradient-to-l from-[#0a0a0a] to-[#000000]'>
         <Background heroCount={heroCount} />
         <Hero heroData={heroData[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount} />
    </div>
    <Product/>
    <OurPolicy/>
    <NewLater/>
    <Footer/>
    </div>
    </>
  )
}

export default Home
