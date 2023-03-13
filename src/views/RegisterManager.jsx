import React, { useState } from 'react'
import api from '../services/Api'

const Register = () => {

  const [ data, setData ] = useState({});

  function onChange({name, value}) {
      setData({ ...data, [name]: value })
  }

  const onSubmit = (e) => {
      e.preventDefault()
      api.post('auth/register/manager/', data)
          .then(res => {console.log(res)})
          .catch(err => {console.log(err)})
  }

  return (
    <div>
    <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="firstName">Nombre</label> <br />
            <input 
            type="text"
            name='firstName'
            id='firstName'
            value={data.firstName || ''}
            onChange={({ target }) => onChange(target)}
            />
        </div>
        <div>
            <label htmlFor="lastName">Apellido</label> <br />
            <input 
            type="text"
            name='lastName'
            id='lastName'
            value={data.lastName || ''}
            onChange={({ target }) => onChange(target)}
            />
        </div>
        <div>
            <label htmlFor="email-create">Correo</label> <br />
            <input 
            type="text"
            name='email'
            id='email-create'
            value={data.email || ''}
            onChange={({ target }) => onChange(target)}
            />
        </div>
        <div>
            <label htmlFor="password-create">Contraseña</label> <br />
            <input 
            type="password"
            name='password'
            id='password-create'
            value={data.password || ''}
            onChange={({ target }) => onChange(target)}
            />
        </div>
        <button>Crear</button>
    </form>
</div>
  )
}

export default Register