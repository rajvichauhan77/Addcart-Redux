import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/authSlice'

import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

  const [formdata, setFormData] = useState({name:"", img:"", email:"", password:""})
  const [logdata, setLogData] = useState({email:"", password:""})


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

  async function handleReg() {
    try {
      const res = await fetch('https://addcart-90bd6-default-rtdb.firebaseio.com/auth.json', {
        method: "POST",
        body: JSON.stringify(formdata)
      })
      toast("Register Successesfull!!!")

    } catch (error) {
      console.log(error)
      toast("Something went wrong... try again")
    }
    handleLog()
  }


    async function handleLog() {
      try {
        toast("Loading...")
        const res = await fetch("https://addcart-90bd6-default-rtdb.firebaseio.com/auth.json")
        const data = await res.json()

        console.log(data)

        console.log(Object.keys(data))

        for(let key in data){
          if(data[key].email == logdata.email && data[key].password == logdata.password)
          {
            toast("Login Successfull...!")
            dispatch(login({...data[key], key:key}))
            return
          }
        }

      } catch (error) {
        console.log(err)
        toast("something went wrong")
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

                    <button onClick={handleLog} className='rounded py-2 px-4 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Login</button>
                </div>


        </div>

        <ToastContainer/>

    </div>

  )
}

export default Login