import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/authSlice'
import { showCart } from '../features/cartSlice'

const Navbar = () => {

    const dispatch = useDispatch()

    let cartLength = useSelector(state=> state.cart.cartLength)
    let auth = useSelector(state=> state.auth.auth)


  return (
    <div>
        <div className="shadow p-3">
            <div className="max-w-7xl mx-auto my-auto flex justify-between">
                <h1 className="text-2xl font-bold">ShopCart</h1>
                    <div>

                        <button onClick={()=> dispatch(showCart())} className='py-2  px-4 me-1 rounded-2xl border hover:bg-slate-50'>Cart: {cartLength} 🛒 </button>

                        <button onClick={()=> dispatch(logout())} className='py-3 px-4  '><img className='w-12 rounded-full ' src={auth.img} alt="" /></button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar