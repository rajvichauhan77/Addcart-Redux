import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/authSlice'
import { ToastContainer, toast } from 'react-toastify';

import { current } from '@reduxjs/toolkit';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,  updateProfile , setPersistence, browserLocalPersistence, browserSessionPersistence, onAuthStateChanged} from 'firebase/auth'

import app from '../firebaseconfig';
// import { GoogleAuthProvider, userLog, userReg } from 'firebase/auth';

import { userLog, userReg, handleGoogle } from '../features/authAction';


const Login = () => {

  const auth = getAuth(app)

  const [formdata, setFormData] = useState({name:"", img:"", email:"", password:""})
  const [logdata, setLogData] = useState({email:"", password:""})
  const [remember, setRemember] = useState(false)

  const dispatch = useDispatch()

  function handleForm(e){
    console.log(e.target.name)
    console.log(e.target.value)

    const {name,value}= e.target

    setFormData({
      ...formdata,
      [name]:value
    })

    setLogData({
      ...logdata,
      [name]:value
    })
  }



  useEffect(() => {
    const typePersist = remember ? browserLocalPersistence : browserSessionPersistence
    setPersistence(auth, typePersist)
    onAuthStateChanged(auth,(user) => {
      if(user)
      {
        dispatch(login({name:user.displayName, email:user.email, img:user.photoURL}))
      }
      else{
        dispatch(logout())
      }
    })
  }, [auth])



  async function handleReg() {


    // try {
    //   const res = await fetch('https://addcart-90bd6-default-rtdb.firebaseio.com/auth.json', {
    //     method: "POST",
    //     body: JSON.stringify(formdata)
    //   })
    //   toast("Register Successesfull!!!")

    // } catch (error) {
    //   console.log(error)
    //   toast("Something went wrong... try again")
    // }
    // handleLog()




        try {
        
        //   const res = await createUserWithEmailAndPassword(auth, formdata.email.trim(), formdata.password.trim())
        //   const users = res.user

        //   await updateProfile(users, {
        //     displayName:formdata.name,
        //     photoURL : formdata.img
        // })

        //  // let cUser = auth.currentUser
        //  // console.log(cUser)
      
        // handleLog()
        //   console.log(users)
        // toast.success("Sign UP successfull...!")

        await userReg(formdata)
        toast.success("Sign up Successfullyy...")

        } catch (error) {
          console.log(error.code)
          console.log(error.message)
          toast.error(error.message)
        }
   
    

  }


    async function handleLog() {
      
          // try {
          //   toast("Loading...")
          //   const res = await fetch("https://addcart-90bd6-default-rtdb.firebaseio.com/auth.json")
          //   const data = await res.json()

          //   console.log(data)

          //   console.log(Object.keys(data))

          //   for(let key in data){
          //     if(data[key].email == logdata.email && data[key].password == logdata.password)
          //     {
          //       toast("Login Successfull...!")
          //       dispatch(login({...data[key], key:key}))
          //       return
          //     }
          //   }

          // } catch (error) {
          //   console.log(err)
          //   toast("something went wrong")
          // }




      try {
        // const res = await signInWithEmailAndPassword(auth, formdata.email.trim(), formdata.password.trim())
        // const users = res.user

        // let cUser = auth.currentUser
        // toast.success("signed up successfully...")
        //   dispatch(login({name:cUser.displayName, email:cUser.email, img: cUser.photoURL}))

        await userLog(formdata)
        toast.success("Sign up Successfullyy...")

      } catch (error) {
        console.log(error.code)
        console.log(error.message)
        toast.error(error.message)
      }

    }





      return (
        <div>
            <div className="w-md border p-5  gap-25 fixed top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2">
                <div className=" flex  flex-col gap-7">

                   Register
                    <input type="text" placeholder='name' name="name" onChange={handleForm} className='border  p-3 text-xl' />
                    <input type="text" placeholder='img' name="img" onChange={handleForm} className='border p-3 text-xl' />
                    <input type="text" placeholder='email' name="email" onChange={handleForm} className='border p-3 text-xl' />
                    <input type="text" placeholder='password' name="password" onChange={handleForm} className='border p-3 text-xl' />

                    <button onClick={handleReg} className='rounded py-2 px-4 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Register</button>

                </div>

                <br />
                <br />
                <br />

                <div className="flex flex-col gap-7 border p-5">
                    Login
                    <input type="text" placeholder='email' name="email" onChange={handleForm} className='border p-3 text-xl' />
                    <input type="text" placeholder='password' name="password" onChange={handleForm} className='border p-3 text-xl' />

                   <div className='flex gap-4'>
                      <input type="checkbox" checked={remember} onChange={()=> setRemember(!remember)} />
                        <p className='font-bold'>Remember Me</p>
                      </div>

                    <button onClick={handleLog} className='rounded py-2 px-4 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Login</button>

                     <div className='flex justify-around'>
                  <button onClick={() => handleGoogle()} className='shadow rounded-full bg-slate-100 hover:bg-slate-300 overflow-hidden '><img className='w-[40px]' src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" /></button>
                  <button className='shadow rounded-full bg-slate-100 hover:bg-slate-300 overflow-hidden '><img className='w-[40px]' src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="" /></button>
                  <button className='shadow rounded-full bg-slate-100 hover:bg-slate-300 overflow-hidden '><img className='w-[40px]' src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png" alt="" /></button>
                </div>
                

                </div>


        </div>



        <ToastContainer/>

    </div>

  )
}

export default Login



// https://cart-add-22eca-default-rtdb.firebaseio.com/