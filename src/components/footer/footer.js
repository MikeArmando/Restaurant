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
                        <p>Monday
                            9:00 - 24:00 <br />
                            Tuesday
                            9:00 - 24:00 <br />
                            Wednesday
                            9:00 - 24:00 <br />
                            Thursday
                            9:00 - 24:00 <br />
                            Friday
                            9:00 - 02:00 <br />
                            Saturday
                            9:00 - 02:00 <br />
                            Sunday
                            Closed</p>
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

                    <div className='footer-item-box'>
                        <h3>Cantact</h3>
                        <p>Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}