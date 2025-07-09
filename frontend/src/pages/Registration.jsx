import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { AuthDataContext } from "../context/authContext";
import axios from 'axios'
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/Firebase";
import { userDataContext } from "../context/UserContext";
import {toast} from 'react-toastify'

function Registration() {
  const {getCurrentUser} = useContext(userDataContext)
  const navigate = useNavigate();
  const [show, setShow] = useState();
 const {serverUrl} = useContext(AuthDataContext);

 const [username, setUsername] = useState("")
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")

  // signup api call
   
  const handleSignup = async (e)=>{
    e.preventDefault()

    try {

      const result = await axios.post('http://localhost:2199/api/auth/register', {
        username,
        email,
        password

      }, { withCredentials: true } )
      getCurrentUser();
      navigate("/")
      console.log(result.data)
       toast.success("Register Succesfully")

      
    }
    catch (error) {
      console.log(error)
      toast.error("Register Error")
      
    }

  }

const googleSignup = async () => {
  try {
    const { user } = await signInWithPopup(auth, provider);
    const { displayName: username, email } = user;

    const result = await axios.post(serverUrl+'/auth/googlelogin',
      { username, email },
      { withCredentials: true }
    );

    console.log(result.data);
     getCurrentUser();
         navigate("/");
  } catch (error) {
    console.error("Google signup error:", error);
  }
};














  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#000000] to-[#071418] text-[white] flex flex-col items-center justify-start">
      <div
        className="w-[100%] h-[80px] flex items-center justify-start px-[30px]  gap-[10px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          className="w-[50px] rounded-full"
          src="https://media.istockphoto.com/id/1367164120/vector/tech-shopping-template-design-online-shopping-vector-icon.jpg?s=612x612&w=0&k=20&c=3QhfDLSal5LGtP3AuNh0QZgHqioMPUobTZft80gfyi4="
          alt=""
        />
        <h1 className="text-xl fonst-sans">OneCart</h1>
      </div>

      <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
        <span className="text-2xl font-semibold">Registration page</span>
        <span className="text-md">Welcome to OneCart, Place yor order</span>
      </div>
      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg items-center justify-center">
        <form
        onSubmit={handleSignup}
          action=""
          className="w-[90%] h-[90%] flx flex-col items-center justify-center space-x-0.5"
        >
          <div className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center md:mx-12 mx-8 my-5  py-[20px] cursor-pointer " onClick={googleSignup}>
            <img
              className="w-[30px]"
              src="https://www.transparentpng.com/download/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png"
              alt=""
            />{" "}
            Registration with google
          </div>
          <div className="w-[100%] h-[20px] flex items-center text-center  justify-center md:mx-6 mx-4">
            <div className="w-[40%] h-[1px] bg-[#96969635]"> </div> OR{" "}
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
          </div>

          <div className="w-[90%] h-[400px] relative flex flex-col items-center text-center md:mx-12 mx-8 justify-center gap-[15px] ">
            <input
              type="text"
              className="w-[100%] h-[50px] border-[2px] border-[#96969635]  backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Username"
              required
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
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
                className="w-[20px] h-[20px] cursor-pointer absolute right-[5%]"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
            {show && (
              <IoEyeSharp
                className="w-[20px] h-[20px] cursor-pointer absolute right-[5%]"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
            <button className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold cursor-pointer">
              Create Account
            </button>
            <p className="flex gap-[10px]">
              You have account?
              <span
                className="text-[#5555f6cf] text-[17px] font-semibold cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
