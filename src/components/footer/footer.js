import './footer.css'

export const Footer = () => {
    return (
        <div className='Footer'>
            <footer>
                <div className='footer-box'>
                    <div className='footer-item-box'>
                        <h3>Mariscos Bahia</h3>
                        <p>Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts.</p>
                    </div>

                    <div className='footer-item-box'>
                        <h3>Open Hours</h3>
                        <div className='footer-hours-box'>
                            <div>
                                <p>Monday</p>
                                <p>9:00 - 24:00</p>
                            </div>
                            <div>
                                <p>Tuesday</p>
                                <p>9:00 - 24:00</p>
                            </div>
                            <div>
                                <p>Wednesday</p>
                                <p>9:00 - 24:00</p>
                            </div>
                            <div>
                                <p>Thursday</p>
                                <p>9:00 - 24:00</p>
                            </div>
                            <div>
                                <p>Friday</p>
                                <p>9:00 - 02:00</p>
                            </div>
                            <div>
                                <p>Saturday</p>
                                <p>9:00 - 02:00</p>
                            </div>
                            <div>
                                <p>Sunday</p>
                                <p>Closed</p>
                            </div>
                        </div>
                    </div>

                    <div className='footer-item-box'>
                        <h3>Cantact</h3>
                        <p>Location: Creek Lano Avila Beach, CA</p>
                        <p>Phone: +53 345 7953 32453</p>
                        <p>Email: random@gmail.com</p>
                    </div>

                    <div className='footer-item-box'>
                        <h3>Newsletter</h3>
                        <p>Far far away, behind the word
                            mountains, far from the countries.</p>
                        <div className='newsletter-btn-box'>
                            <input type="text" placeholder="Email address"></input>
                            <button>Subscribe</button>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}