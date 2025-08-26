import { Link, Outlet } from "react-router-dom"



const DashboardLayout = () => {
    return (
        <div className="layout">
            <aside>
                <h5 className="mb-3">Dashboard</h5>
                <nav className="nav flex-column">
                    <Link className="nav-link" to="/dashboard">
                        Dashboard
                    </Link>
                    <Link className="nav-link" to="/dashboard/products">
                        Products
                    </Link>
                    <Link className="nav-link" to="#">
                        Projects
                    </Link>
                    <Link className="nav-link" to="/dashboard/settings">
                        Settings
                    </Link>
                </nav>
            </aside>
            {/* Main content */}
            <main>


                <h3>Main content area</h3>
                <Outlet />    

            </main>
        </div>
    )
}

export default DashboardLayout