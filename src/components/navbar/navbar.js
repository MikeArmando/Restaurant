import './navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className='Navbar'>
            <nav>
                <h1><Link to="/Restaurant" onClick={scrollToTop}>Mariscos Bahia</Link></h1>
                <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link to='/Restaurant' onClick={scrollToTop}>Home</Link></li>
                    <li><Link to='/menu' onClick={scrollToTop}>Menu</Link></li>
                    <li><Link to='/about' onClick={scrollToTop}>About</Link></li>
                    <li><Link to='/contact' onClick={scrollToTop}>Contact</Link></li>
                    <li><Link to='/reserv' className='reserv' onClick={scrollToTop}>Reservations</Link></li>
                </ul>
                <div onClick={handleMenuToggle} class="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
        </div>
    )
}

// scrolls to the top of the page when click a navbar link
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'instant',
    });
}

// Changes the background color of the navbar
window.addEventListener('scroll', function () {
    const nav = document.querySelector("nav")
    var scrollPosition = window.scrollY;

    // Define the scroll position at which to change the color
    var scrollThreshold = 300; // Adjust this value to change when the color change occurs

    // Change the color to white if the scroll position exceeds the threshold
    if (scrollPosition > scrollThreshold) {
        nav.style.background = 'rgb(43, 43, 43)';
    } else {
        // Reset the color if the scroll position is less than the threshold
        nav.style.background = '';
    }
}); 