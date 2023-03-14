import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import api from '../services/Api'

const Home = () => {


  const navigate = useNavigate()
  const token = useSelector(({ authSlice }) => authSlice.token)

  const [users, setUsers] = useState([])

  const showAllEmployee = (e) => {
    api.get('users/')
      .then(res => { setUsers(res.data) })
      .catch(err => { console.log(err) })
  }

  useEffect(() => {
    showAllEmployee()
  }, [])

  const eraseEmployee = (id) => {
    api.delete(`users/${id}`, {
      headers: {
        Authorization: "JWT " + token
      }
    })
      .then(res => {
        console.log(res)
        showAllEmployee()
      })
      .catch(err => { console.log(err) })
  }

  function confirmDelete(id) {
    const confirm = window.confirm('Realmente Quieres Eliminar a este Empleado ?')
    if (confirm) {
      eraseEmployee(id)
    }
  }

  return (
    <div className='container'>
      <h1>Listado de Empleados</h1>
      <div>
        <button onClick={() => navigate('/adduser')}>Nuevo Registro</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No. Empleado</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Correo</th>
            <th scope="col">Telefono</th>
            <th scope="col">Area</th>
            <th scope="col">Posicion</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            if (!(user.role === 'admin')) {
              return <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.area}</td>
                <td>{user.job}</td>
                <td>
                  <Link to={`/edituser/${user.id}`}><i className='bx bx-message-edit btn__edit' ></i></Link>
              <i className='bx bx-message-alt-x btn__erase' onClick={() => confirmDelete(user.id)}></i>
                </td>
              </tr>
            }
          }).reverse()}
        </tbody>
      </table>
    </div>
  )
}

export default Home