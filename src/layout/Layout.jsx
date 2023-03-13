import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <main>
            <h2>Navbar</h2>
            <Outlet />
        </main>
    )
}

export default Layout