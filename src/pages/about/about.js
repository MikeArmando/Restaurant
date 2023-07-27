import './about.css'
// images
import aboutHero from '../../assets/img/about-hero.avif'
import star from '../../assets/img/star.png'
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
                    <img src={aboutHero}></img>
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

            <section className='reviews-box'>
                <h2>Reviews</h2>
                <div className='reviews-row'>
                    <div className='reviews-items'>
                        <img href="#!" src={star}></img><img href="#!" src={star}></img><img href="#!" src={star}></img><img href="#!" src={star}></img><img href="#!" src={star}></img>
                        <p className='rev-text'>Best tapas in town At this moment by far the best tapas in town! I have ordered here before during the lockdown and now I eat here in the restaurant itself for the first time. It is just super tasty. Quality is excellent! Staff is friendly, some speak English, no problem for us, but what is often the case in tapas restaurants that you have a well-filled wallet to take along. That is not only here, but you do get value for money! Everything is equally delicious!</p>
                        <p className='rev-name'>Alexander</p>
                        <p className='rev-google'>Google</p>
                    </div>
                    <div className='reviews-items rev-span'>
                        <img href="#!" src={star}></img><img href="#!" src={star}></img><img href="#!" src={star}></img><img href="#!" src={star}></img><img href="#!" src={star}></img>
                        <p className='rev-text'>Delicious! It was delicious. Pure flavours, in traditional tapas. I liked that there was not a very big menu, but what was on was delicious. Everything. We were with my children, who also liked everything (10-13-16). And for the youngest one, they made a special ice cream dessert. Delicious! Best tapas in town At this moment by far the best tapas in town! I have ordered here before during the lockdown and now I eat here in the restaurant itself for the first time. Quality is excellent! Staff is friendly, some speak English, no problem for us, but what is often the case in tapas restaurants that you have a well-filled wallet to take along. Everything is equally delicious! Cosiness, quality and top service A fantastic place to eat tapas. Very nice and cosy restaurant with very nice service and top food. Enjoyed all the tapas. Many distinctive dishes. Not often eaten such good tapas. Also tasted some unique beers here. Definitely a must for everyone who is in Maastricht.</p>
                        <p className='rev-name'>Daniel</p>
                        <p className='rev-google'>Google</p>
                    </div>
                    <div className='reviews-items'>
                        <img href="#!" src={star}></img><img href="#!" src={star}></img><img href="#!" src={star}></img><img href="#!" src={star}></img><img href="#!" src={star}></img>
                        <p className='rev-text'>Cosiness, quality and top service A fantastic place to eat tapas. Very nice and cosy restaurant with very nice service and top food. Enjoyed all the tapas. Many distinctive dishes. Not often eaten such good tapas. Also tasted some unique beers here. Definitely a must for everyone who is in Maastricht.</p>
                        <p className='rev-name'>Benjamin</p>
                        <p className='rev-google'>Google</p>
                    </div>
                    <div className='reviews-items rev-span'>
                        <img href="#!" src={star}></img><img href="#!" src={star}></img><img href="#!" src={star}></img><img href="#!" src={star}></img><img href="#!" src={star}></img>
                        <p className='rev-text'>With 6 persons Saturday evening we had a delicious dinner! Everything freshly prepared, delicious, very nice service and value for money, surprising dishes. We will definitely be back! 😘. Super spontaneous reception by the staff, it really gave a warm and welcome feeling. Good service and delicious dishes, we could hardly choose. In short, we will definitely come back here more often! Delicious! It was delicious. Pure flavours, in traditional tapas. I liked that there was not a very big menu, but what was on was delicious. Everything. We were with my children, who also liked everything (10-13-16). And for the youngest one, they made a special ice cream dessert. Delicious!</p>
                        <p className='rev-name'>Mia</p>
                        <p className='rev-google'>Google</p>
                    </div>
                    <div className='reviews-items'>
                        <img href="#!" src={star}></img><img href="#!" src={star}></img><img href="#!" src={star}></img><img href="#!" src={star}></img><img href="#!" src={star}></img>
                        <p className='rev-text'>Super spontaneous reception by the staff, it really gave a warm and welcome feeling. Good service and delicious dishes, we could hardly choose. In short, we will definitely come back here more often!</p>
                        <p className='rev-name'>Sophia</p>
                        <p className='rev-google'>Google</p>
                    </div>
                    <div className='reviews-items'>
                        <img href="#!" src={star}></img><img href="#!" src={star}></img><img href="#!" src={star}></img><img href="#!" src={star}></img><img href="#!" src={star}></img>
                        <p className='rev-text'>Tapas, every single one, delicious. Very friendly staff. First we sat outside, but it started to rain. In no time, the tables were inside, neatly spaced out, and everyone could continue eating there. When I went to report after the payment that they had counted only two wines instead of 4, it was so appreciated that we were offered those two wines from the company! Top!</p>
                        <p className='rev-name'>Ethan</p>
                        <p className='rev-google'>Google</p>
                    </div>
                    <div className='reviews-items'>
                        <img href="#!" src={star}></img><img href="#!" src={star}></img><img href="#!" src={star}></img><img href="#!" src={star}></img><img href="#!" src={star}></img>
                        <p className='rev-text'>Really FANTASTIC!!! If I could give 10 stars, I would. Nice, cosy place. Very friendly staff (English speaking, was no problem for us). The food was really phenomenal, especially the chicken with honey. To be repeated!</p>
                        <p className='rev-name'>Isabella</p>
                        <p className='rev-google'>Google</p>
                    </div>
                </div>
            </section>
        </>
    )
}

