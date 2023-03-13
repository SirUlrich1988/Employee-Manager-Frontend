import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children }) => {

    const auth = useSelector(({authSlice}) => authSlice.isSuccess)

    return auth ? children : <Navigate to='/login' />
}

export default ProtectedRoute