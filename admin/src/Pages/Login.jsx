import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import axios from 'axios'
import { adminDATAContext } from '../Context/AdminContext';
import { toast } from 'react-toastify';
function Login() {

     const {getAdmin} = useContext(adminDATAContext)
      const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

        const [show, setShow] = useState(false);


     const AdminLogin = async (e) =>{
        e.preventDefault()
        try {
            const result = await axios.post('https://ai-powered-full-stack-ecommerce-web.onrender.com/api/auth/adminlogin',{email,password},{withCredentials:true})
            console.log(result.data);
            toast.success("Admin Login Successfully")
            getAdmin();
            navigate("/")
            
        } catch (error) {
            console.log(error)
            toast.error("Admin Login Failed")
            
        }
     }


  return (
    <>
       <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#111111] text-[white] flex flex-col items-center justify-start">
            <div
              className="w-[100%] h-[80px] flex items-center justify-start px-[30px]  gap-[10px] cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                className="w-[50px] rounded-full "
                src="https://media.istockphoto.com/id/1367164120/vector/tech-shopping-template-design-online-shopping-vector-icon.jpg?s=612x612&w=0&k=20&c=3QhfDLSal5LGtP3AuNh0QZgHqioMPUobTZft80gfyi4="
                alt=""
              />
              <h1 className="text-xl fonst-sans">ShopCart</h1>
            </div>
      
            <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
              <span className="text-2xl font-semibold"> Admin Login page</span>
              <span className="text-md">Welcome to OneCart, Apply to Admin Login</span>
            </div>
            <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg items-center justify-center">
              <form
              onSubmit={AdminLogin}
                className="w-[90%] h-[90%] flx flex-col items-center justify-center space-x-0.5"
              >
              
      
                <div className="w-[90%] h-[400px] relative flex flex-col items-center text-center md:mx-12 mx-8 justify-center gap-[15px] ">
                  <input
                    type="text"
                    className="w-[100%] h-[50px] border-[2px] border-[#96969635]  backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                  <input
                    type={show ? "text" : "password"}
                    className="w-[100%] h-[50px] border-[2px] border-[#96969635]  backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                  {!show && (
                    <IoEyeOutline
                      className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] md:bottom-[50%] bottom-[50%]"
                      onClick={() => setShow((prev) => !prev)}
                    />
                  )}
                  {show && (
                    <IoEyeSharp
                      className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] md:bottom-[50%] bottom-[50%]"
                      onClick={() => setShow((prev) => !prev)}
                    />
                  )}
                  <button className="w-[100%] h-[50px] bg-[#5353b9] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold cursor-pointer">
                    Login
                  </button>
                 
                </div>
              </form>
            </div>
          </div>
    </>
  )
}

export default Login
