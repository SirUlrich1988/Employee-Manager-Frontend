import React, { useState } from 'react'
import api from '../services/Api'
import { useDispatch } from 'react-redux'
import { getUser } from '../app/slices/authSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [data, setData] = useState({})
  const [error, setError] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function onChange({name, value}) {
      setData({ ...data, [name]: value })
  }
  
  const loginUser = (e) => {
      e.preventDefault()
      api.post('auth/login/', data)
          .then(res => {
            dispatch(getUser(res.data))
            navigate('/')
          })
          .catch(err => {setError(err.response.data.message)})
  }

  return (
    <div>
      <h1>Login</h1>
      <p>Inicia con tu Correo y Contraseña</p>
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

        <button type='submit'>Enviar</button>

      </form>

      {
        error && <p>{error}</p>
      }
    </div>
  )
}

export default Login