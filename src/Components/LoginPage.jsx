import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { users } from '../../src/LocalStorage';

const LoginPage = () => {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate =useNavigate();

    const handleLogin = () => {
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate(`/${user.segment}`);
      } else {
        alert("Invalid credentials");
      }
    };

  return (
    <div className='bg-gradient-to-br from-red-600 via-black/90 to-red-600 h-screen w-screen  flex items-center justify-center'>
      <div className=' h-100 w-120 bg-black text-white rounded-2xl   '>
        <h1 className='text-2xl font-semibold ml-25 mt-5'>Login to Your Account</h1>
       <form className='flex flex-col px-20  py-10 gap-5 ' >
      
        <input type='text' required value={email} className='border-b border-white  h-10 w-80 p-2' placeholder='Email Address ' onChange={(e)=>setEmail(e.target.value)}/>
      
      
        <input type='password' required value={password} className='border-b border-white  h-10 w-80 p-2' placeholder='Password ' onChange={(e)=>setPassword(e.target.value)}/>
        <div>

            <button className='hover:text-red-700 text-sm p-2'>Forget Password ?</button>
        </div>
        <button className='text-xl font-bold bg-red-600 h-10 w-80 rounded-full text-white mt-8 hover:bg-red-800 ' type='submit' onClick={()=> handleLogin()}>Sign In</button>
       </form>
      </div>
    </div>
  )
}

export default LoginPage
