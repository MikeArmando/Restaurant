import './navbar.css'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className='Navbar'>
            <nav>
                <h1><Link to="/Mariscos-Bahia">Mariscos Bahia</Link></h1>
                <ul>
                    <li><Link to='/Mariscos-Bahia'>Home</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to=''>Contact</Link></li>
                    <li><Link to=''>Reservations</Link></li>
                </ul>
            </nav>
        </div>
    )
}
