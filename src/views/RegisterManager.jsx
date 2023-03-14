import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/Api'
import '../styles/Register.css'

const Register = () => {

    const navigate = useNavigate()
    const [data, setData] = useState({});

    function onChange({ name, value }) {
        setData({ ...data, [name]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        api.post('auth/register/manager/', data)
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => { console.log(err) })
    }

    return (
        <div className='register__container'>
            <h1>Registro de Nuevo <br /> Administrador</h1>
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
                <div>
                    <label htmlFor="job">Rol</label> <br />
                    <input
                        type="text"
                        name='role'
                        id='role'
                        value={data.role || ''}
                        onChange={({ target }) => onChange(target)}
                    />
                </div>
                <div className='btn__container'>
                    <button>Crear</button>
                </div>
            </form>
        </div>
    )
}

export default Register