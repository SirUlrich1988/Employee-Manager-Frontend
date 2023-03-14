import React, { useState } from 'react'
import api from '../services/Api'
import { useDispatch } from 'react-redux'
import { getUser } from '../app/slices/authSlice'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'

const Login = () => {

  const [data, setData] = useState({})
  const [error, setError] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function onChange({ name, value }) {
    setData({ ...data, [name]: value })
  }

  const loginUser = (e) => {
    e.preventDefault()
    api.post('auth/login/', data)
      .then(res => {
        dispatch(getUser(res.data))
        navigate('/')
      })
      .catch(err => { setError(err.response.data.message) })
  }

  return (
    <div className='login__container'>
      <h1>Gestor de Empleados</h1><br />
      <img src="https://www.quantoconsulting.com/wp-content/uploads/2018/11/RECURSOS-HUMANOS-empresarial-coaching-valladolid-madrid.png" alt="imagen manager" />
      <h3>Login</h3><br />
      <form onSubmit={loginUser}>
        <div>
          <label htmlFor="email">Correo</label> <br />
          <input
            type="text"
            name='email'
            id='email'
            value={data.email || ''}
            onChange={({ target }) => onChange(target)}
          />
        </div>

        <div>
          <label htmlFor="password">Contraseña</label> <br />
          <input
            type="password"
            name='password'
            id='password'
            value={data.password || ''}
            onChange={({ target }) => onChange(target)}
          />
        </div>
        <div className='btn__container'>
        <button type='submit'>Ingresar</button>
        </div>
      </form>
      {
        error && <p>{error}</p>
      }
    </div>
  )
}

export default Login