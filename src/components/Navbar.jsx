import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../app/slices/authSlice'
import '../styles/Login.css'

const Navbar = () => {

    const dispatch = useDispatch()

  return (
    <div className='logout__container'>
        <button onClick={() => dispatch(logout())}>Cerrar Sesion</button>
    </div>
  )
}

export default Navbar