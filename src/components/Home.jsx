import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/homeStyles.css'; // Asegúrate de tener estilos para tu menú

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`home ${menuOpen ? 'menu-open' : ''}`}>
            <nav className="sidebar">
                <div className="sidebar-toggle" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className="menu">
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li className="submenu">
                        <span className="submenu-toggle">Admin</span>
                        <ul className="submenu-content">
                            <li><Link to="/admin/users" onClick={toggleMenu}>Users</Link></li>
                            <li><Link to="/admin/settings" onClick={toggleMenu}>Settings</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
                    <li><Link to="/register" onClick={toggleMenu}>Register</Link></li>
                </ul>
            </nav>
            <div className="content">
                <h1>Home</h1>
                <p>Bienvenido a la página principal</p>
            </div>
        </div>
    );
};

export default Home;
