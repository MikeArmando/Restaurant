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

      <section className='gall-box'>
        <div className='gall-center'>
          <div className='gall-items gall-item1'></div>
          <div className='gall-items gall-item2'></div>
          <div className='gall-items gall-item3'></div>
          <div className='gall-items gall-item4'></div>
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