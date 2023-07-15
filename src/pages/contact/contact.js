import './contact.css'

export const Contact = () => {
    return (
        <>
            <section className="contact-intro-box">
                <h1>Contact</h1>
                <label></label>
            </section>

            <section className='contact-box'>
                <div className='contact-center'>
                    <div className='contact-info'>
                        <h2>Contact Info</h2>
                        <div>
                            <p>Creek Lano Avila Beach, CA</p>
                            <p>+53 345 7953 32453</p>
                            <p>random@gmail.com</p>
                        </div>
                    </div>

                    <div className='contact-us'>
                        <h2>Contact Us</h2>
                        <div>
                            <input type='text' placeholder='Your Name'></input>
                            <input type='text' placeholder='Your email'></input>
                            <input type='text' placeholder='Subject'></input>
                            <input type='text' placeholder='Message'></input>
                            <a href='#!'>Send Message</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}