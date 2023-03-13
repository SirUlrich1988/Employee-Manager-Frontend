import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../app/slices/authSlice'
import { Navigate, useNavigate, Link } from 'react-router-dom'
import api from '../services/Api'

const Home = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [users, setUsers] = useState([])

  const showAllEmployee = (e) => {
    api.get('users/')
      .then(res => { setUsers(res.data) })
      .catch(err => { console.log(err) })
  }

  useEffect(() => {
    showAllEmployee()
  }, [])




  return (
    <div className='container'>
      <h1>Home</h1>
      <div>
      <button onClick={() => dispatch(logout())}>Cerrar Sesion</button>
      <button onClick={() => navigate('/adduser')}>Nuevo Registro</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No. Empleado</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user, index) => (
                    <tr key={user.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>
                      <Link to={`/edituser/${user.id}`}><box-icon type='solid' name='edit'></box-icon></Link>
                      <box-icon name='message-alt-x'></box-icon>
                    </td>
                  </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home