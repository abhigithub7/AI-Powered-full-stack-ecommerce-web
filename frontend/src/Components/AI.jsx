import React, { useContext, useState } from 'react'
import { shopDataContext } from '../context/ShopContext'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import open from '../assets/pop-331049.mp3'
function AI() {

    const {showSearch, setShowSearch} = useContext(shopDataContext)
   const [activeAi, setActiveai] = useState(false)
    const navigate = useNavigate()

    let openingSound = new Audio(open)

function speak(message){
    let utterence = new SpeechSynthesisUtterance(message)
    window.speechSynthesis.speak(utterence)

}


    const speechRecognition = Window.SpeechRecognition || window.webkitSpeechRecognition 
    const recognition = new speechRecognition()
    if(!recognition)
    {
        console.log("Not Supported")
    }

    recognition.onresult = (e) =>{
        const transcript = e.results[0][0].transcript.trim()
        if(transcript.toLowerCase().includes('search') && transcript.toLowerCase().includes("open") && !showSearch)
        {
             speak("opening search")
         setShowSearch(true)
         navigate("/collection")

        }
        else if(transcript.toLowerCase().includes('search') && transcript.toLowerCase().includes("close") && showSearch)
        {
             speak("closing search")
              setShowSearch(false)
        }
         else if(transcript.toLowerCase().includes('collection') || transcript.toLowerCase().includes("collections") || transcript.toLowerCase().includes("product") ||  transcript.toLowerCase().includes("products") )
        {
             speak("opening collection page")
               navigate("/collection")
        }
         else if(transcript.toLowerCase().includes('about') || transcript.toLowerCase().includes('aboutpage')  )
        {
             speak("opening about page")
               navigate("/about")
               setShowSearch(false)
        }
          else if(transcript.toLowerCase().includes('home') || transcript.toLowerCase().includes('homepage')  )
        {
             speak("Back to home")
               navigate("/")
               setShowSearch(false)
        }
         else if(transcript.toLowerCase().includes('cart') || transcript.toLowerCase().includes('cartpage') || transcript.toLowerCase().includes('caat')  )
        {
             speak("opening cart Page")
               navigate("/cart")
               setShowSearch(false)
        }
         else if(transcript.toLowerCase().includes('contact') || transcript.toLowerCase().includes('contactpage')  )
        {
             speak("opening Contact Page")
               navigate("/contact")
               setShowSearch(false)
        }
         else if(transcript.toLowerCase().includes('order') || transcript.toLowerCase().includes('myorders') || transcript.toLowerCase().includes('orders')  )
        {
             speak("opening order Page")
               navigate("/order")
               setShowSearch(false)
        }
        else{
          toast.error("Try Again")
          
        }
           

    }
    recognition.onend=()=>{
      setActiveai(false)
    }
  return (
    <div className='fixed lg:bottom-[20px] md:bottom-[40px] bottom-[100px]  left-[2%]' onClick={()=>{recognition.start();
    openingSound.play()
    setActiveai(true)}}>
       <img style={{
      filter: activeAi
        ? 'drop-shadow(0 0 30px #00d2fc)'
        : 'drop-shadow(0 0 20px black)',
    }} className={`w-[70px] cursor-pointer shadow-2xl rounded-full ${activeAi? 'translate-x-[5%] translate-y-[-5%] scale-125':'translate-x-[0] translate-y-[0] scale-100' } transition-transform duration-300 ease-in-out`}
     src="https://miro.medium.com/v2/resize:fit:1024/1*xTRNH1cab8IsIKL5OWo-uw.jpeg" alt="" />
    </div>
  )
}

export default AI
