import './about.css'
import breakfast from '../../assets/img/breakfast.png'
import lunch from '../../assets/img/lunch.png'
import dinner from '../../assets/img/dinner.png'

export const About = () => {
    return (
        <>
            <section className="about-intro-box">
                <h1>About</h1>
                <label></label>
            </section>
            <section className='about-page-about'>
                <div className='about-contents'>
                    <img src='https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'></img>
                    <div>
                        <h2>Mariscos Bahia</h2>
                        <p>We pride ourselves on offering the freshest and finest selection of seafood available. Every ingredient is carefully sourced from trusted suppliers who share our commitment to quality and sustainability. From succulent shrimp and tender scallops to delectable lobster and delicate fish, each dish is a testament to our dedication to serving the very best.</p>
                    </div>
                </div>
            </section>

            <section className="cater-box">
                <h1>Our Services</h1>
                <div className='cater-contents'>
                    <div>
                        <img src={breakfast}></img>
                        <h2>Breakfast</h2>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </div>
                    <div>
                        <img src={lunch}></img>
                        <h2>Lunch</h2>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </div>
                    <div>
                        <img src={dinner}></img>
                        <h2>Dinner</h2>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

