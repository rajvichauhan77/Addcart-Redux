import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/authSlice'

const Login = () => {

    const dispatch = useDispatch()
  return (
    <div>
        <div className="w-md border p-5  fixed top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2">
                <div className="flex flex-col gap-7">
                    <input type="text" placeholder='Username' className='border p-3 text-xl' />
                    <input type="text" placeholder='Username' className='border p-3 text-xl' />
                        <button onClick={()=> dispatch(login())} className='rounded py-1 px-4 bg-green-600'>Login</button>
                </div>
        </div>
    </div>
  )
}

export default Login