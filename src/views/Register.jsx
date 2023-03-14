import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import api from '../services/Api'
import '../styles/Register.css'

const Register = ({ edit }) => {

    const [data, setData] = useState({})
    const navigate = useNavigate()
    const params = useParams()
    const token = useSelector(({authSlice}) => authSlice.token)
    

    function onChange({ name, value }) {
        setData({ ...data, [name]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (edit) {
            api.patch(`users/${params.id}`, data, {
                headers: {
                  Authorization: "JWT " + token
                }
              })
                .then(res => {
                    console.log(res)
                    navigate('/')
                })
                .catch(err => { console.log(err) })
        } else {
            api.post('auth/register/', data)
                .then(res => {
                    console.log(res)
                    navigate('/')
                })
                .catch(err => { console.log(err) })
        }
    }

    useEffect(()=> {
        if(edit) {
            api.get(`users/${params.id}`)
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err))
        } 
    },[edit])

    return (
        <div className='register__container'>
            <h1>Registro de Nuevo Empleado</h1>
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
                        type="text"
                        name='password'
                        id='password-create'
                        value={data.password || ''}
                        onChange={({ target }) => onChange(target)}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Telefono</label> <br />
                    <input
                        type="text"
                        name='phone'
                        id='phone'
                        value={data.phone || ''}
                        onChange={({ target }) => onChange(target)}
                    />
                </div>
                <div>
                    <label htmlFor="role">Rol</label> <br />
                    <input
                        type="text"
                        name='role'
                        id='role'
                        value={data.role || ''}
                        onChange={({ target }) => onChange(target)}
                    />
                </div>
                <div>
                    <label htmlFor="area">Area</label> <br />
                    <input
                        type="text"
                        name='area'
                        id='area'
                        value={data.area || ''}
                        onChange={({ target }) => onChange(target)}
                    />
                </div>
                <div>
                    <label htmlFor="job">Posición</label> <br />
                    <input
                        type="text"
                        name='job'
                        id='job'
                        value={data.job || ''}
                        onChange={({ target }) => onChange(target)}
                    />
                </div>
                <div className='btn__container'>
                <button>
                    {
                        edit ? 'Actualizar' : 'Crear'
                    }
                </button>
                </div>
            </form>
        </div>
    )
}

export default Register