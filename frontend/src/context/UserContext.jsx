/* eslint-disable react-refresh/only-export-components */
import React,{ createContext } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


export const userDataContext = createContext();


function UserContext({children}) {
    const [userData, setUserData] = useState(null)

 const getCurrentUser = async () =>{
        try {
            let result =  await axios.get('https://ai-powered-full-stack-ecommerce-web.onrender.com/api/user/getcurrentuser',
              {withCredentials:true}
                 )
                 if(result && result.data)
                 {
                   setUserData(result.data)
                 console.log(result.data)
                 }
                 else{
                  setUserData(null);
                 }
                 
                
        } catch (error) {
             setUserData(null);
            console.log(error)
           
        }

    }

    useEffect(()=>{
      
       getCurrentUser()
    },[])



   
   
  return (
    <div>
      <userDataContext.Provider value={{userData,setUserData,getCurrentUser}}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext
