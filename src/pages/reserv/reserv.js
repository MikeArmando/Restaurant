import './reserv.css'

export const Reserv = () => {
    return (
        <>
            <section className="reserv-intro-box">
                <h1>Reservation</h1>
                <label></label>
            </section>

            <section className='reserv-page-box'>
                <div className='reserv-page-center'>
                    <div className='reserv-page-info'>
                        <img src='https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60'></img>
                    </div>

                    <div className='reserv-page-input'>
                        <h2>Make A Reservation</h2>
                        <div>
                            <input type='text' placeholder='Your Name'></input>
                            <input type='text' placeholder='Your Phone'></input>
                            <input type='text' placeholder='Your Email'></input>
                            <input type='date'></input>
                            <select id="Time">
                                <option value="2 Persons">05:00 PM</option>
                                <option value="3 Persons">06:00 PM</option>
                                <option value="4 Persons">10:00 PM</option>
                                <option value="5 Persons">11:00 PM</option>
                                <option value="6 Persons">12:00 PM</option>
                            </select>
                            <select id="Persons">
                                <option value="2 Persons">2 Persons</option>
                                <option value="3 Persons">3 Persons</option>
                                <option value="4 Persons">4 Persons</option>
                                <option value="5 Persons">5 Persons</option>
                                <option value="6 Persons">6 Persons</option>
                            </select>

                            <a href='#!'>Make Reservation</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

