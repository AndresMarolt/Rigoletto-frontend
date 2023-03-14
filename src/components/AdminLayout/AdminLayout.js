import { Routes, Route } from "react-router-dom";
import Admin from "./Admin/Admin";
import { Link } from "react-router-dom";
import './AdminLayout.css'

const AdminLayout = () => {

    return (
        <>
            <header className="admin-header">
                <h4><Link to={"/"}>Admin</Link></h4>
            </header>

            <main className="admin-main">
                <section className="sidebar">
                    <ul className="list-unstyled text-center fw-bold d-flex flex-column gap-4">
                        <li className="py-2">
                            <Link to={`/admin/entradas`} className="admin-link bg-secondary text-decoration-none text-light p-2">Entradas</Link>
                        </li>

                        <li className="py-2">
                            <Link to={`/admin/pizzas`} className="admin-link bg-secondary text-decoration-none text-light p-2">Pizzas</Link>
                        </li>

                        <li className="py-2">
                            <Link to={`/admin/bebidas`} className="admin-link bg-secondary text-decoration-none text-light p-2">Bebidas</Link>
                        </li>

                        <li className="py-2">
                            <Link to={`/admin/calzoni`} className="admin-link bg-secondary text-decoration-none text-light p-2">Calzoni</Link>
                        </li>
                    </ul>
                </section>

                <section className="content">
                    <Routes>
                        <Route path="/:category" element={<Admin />} />
                    </Routes>
                </section>
            </main>
        </>
    )
}

export default AdminLayout;