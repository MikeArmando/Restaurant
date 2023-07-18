import './home.css'
import { Link } from 'react-router-dom';
import star from '../../assets/img/star.png'

export const Home = () => {
  return (
    <div className='Home'>
      <section className="intro-box">
        <h1>Mariscos Bahia</h1>
        <label>A Fine Dinning Restaurant.</label>
      </section>

      <section className='about-box'>
        <div className='about-box-center'>
          <div className='about-img-box'>
            <img src='https://images.unsplash.com/photo-1625631980741-33a7752108f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvb2t8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60' alt=''></img>
          </div>
          <div className='about-text'>
            <h2>An Extraordinery <label> Experience</label></h2>
            <p>We pride ourselves on offering the freshest and finest selection of seafood available. Every ingredient is carefully sourced from trusted suppliers who share our commitment to quality and sustainability. From succulent shrimp and tender scallops to delectable lobster and delicate fish, each dish is a testament to our dedication to serving the very best.</p>
            <br />
            <Link to='/about' onClick={scrollToTop}>Learn More</Link>
          </div>
        </div>
      </section>

      <section className='special-box'>
        <div className='special-center'>
          <div className='special-text-box'>
            <h2>Our <label>Signature</label> Dish</h2>
            <div className='cost-wrap'>
              <p className='special-name'>Shrimp with Garlic</p>
              <label className='special-cost'>$20</label>
            </div>
            <p className='special-ingre'>Pork / Tenderloin / Green / Pepper</p>
          </div>
          <div className='special-img-box'>
            <img src="https://images.unsplash.com/photo-1614549099339-729737b3cfd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2glMjBkaXNofGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>
          </div>
        </div>
      </section>

      <section className='menu-box'>
        <h2>Our Menu</h2>
        <div className='menu-center'>
          <div className='menu-sections'>
            <div className='menu-text-box'>
              <div>
                <h3>Pork Tenderloin in Green Pepper</h3>
                <label>Pork / Tenderloin / Green / Pepper</label>
                <p>$29</p>
              </div>
            </div>
            <div className='menu-text-box'>
              <div>
                <h3>Shrimp with Garlic</h3>
                <label>Pork / Tenderloin / Green / Pepper</label>
                <p>$29</p>
              </div>
            </div>
            <div className='menu-text-box'>
              <div>
                <h3>Wild Mushroom with Chicken</h3>
                <label>Pork / Tenderloin / Green / Pepper</label>
                <p>$29</p>
              </div>
            </div>
            <div className='menu-text-box'>
              <div>
                <h3>Oysters with Baked Potatoes</h3>
                <label>Pork / Tenderloin / Green / Pepper</label>
                <p>$29</p>
              </div>
            </div>
            <div className='menu-text-box'>
              <div>
                <h3>Roast Pork</h3>
                <label>Pork / Tenderloin / Green / Pepper</label>
                <p>$29</p>
              </div>
            </div>
          </div>
          <div className='menu-sections'>
            <div className='menu-text-box'>
              <div>
                <h3>Pork Tenderloin in Green Pepper</h3>
                <label>Pork / Tenderloin / Green / Pepper</label>
                <p>$29</p>
              </div>
            </div>
            <div className='menu-text-box'>
              <div>
                <h3>Shrimp with Garlic</h3>
                <label>Pork / Tenderloin / Green / Pepper</label>
                <p>$29</p>
              </div>
            </div>
            <div className='menu-text-box'>
              <div>
                <h3>Wild Mushroom with Chicken</h3>
                <label>Pork / Tenderloin / Green / Pepper</label>
                <p>$29</p>
              </div>
            </div>
            <div className='menu-text-box'>
              <div>
                <h3>Oysters with Baked Potatoes</h3>
                <label>Pork / Tenderloin / Green / Pepper</label>
                <p>$29</p>
              </div>
            </div>
            <div className='menu-text-box'>
              <div>
                <h3>Roast Pork</h3>
                <label>Pork / Tenderloin / Green / Pepper</label>
                <p>$29</p>
              </div>
            </div>
          </div>
          <div className='menu-sections'>
            <div className='menu-text-box'>
              <div>
                <h3>Lava Cake</h3>
                <label>Pork / Tenderloin / Green / Pepper</label>
                <p>$29</p>
              </div>
            </div>
            <div className='menu-text-box'>
              <div>
                <h3>Orange Tart</h3>
                <label>Pork / Tenderloin / Green / Pepper</label>
                <p>$29</p>
              </div>
            </div>
            <div className='menu-text-box'>
              <div>
                <h3>Cheese Cake</h3>
                <label>Pork / Tenderloin / Green / Pepper</label>
                <p>$29</p>
              </div>
            </div>
            <div className='menu-text-box'>
              <div>
                <h3>Chocolatte Mausse</h3>
                <label>Pork / Tenderloin / Green / Pepper</label>
                <p>$29</p>
              </div>
            </div>
            <div className='menu-text-box'>
              <div>
                <h3>Ice Cream</h3>
                <label>Pork / Tenderloin / Green / Pepper</label>
                <p>$29</p>
              </div>
            </div>
          </div>
        </div>
        <div className='view-menu-box'>
          <Link to='/menu' onClick={scrollToTop}>View Menu</Link>
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

      <section className='reserv-box'>
        <div className='reserv-center'>
          <h2>Natural ingredients and testy food</h2>
          <p>Some Trendy And Popular Courses Offerd</p>
          <Link to={'/reserv'} onClick={scrollToTop}>Make a reservation</Link>
        </div>
      </section>

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