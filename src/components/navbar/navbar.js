import './navbar.css'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className='Navbar'>
            <nav>
                <h1><Link to="/Restaurant">Mariscos Bahia</Link></h1>
                <ul>
                    <li><Link to='/Restaurant'>Home</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to=''>About</Link></li>
                    <li><Link to=''>Contact</Link></li>
                    <li><Link to='' className='reserv'>Reservations</Link></li>
                </ul>
                <a href="" class="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
            </nav>
        </div>
    )
}

