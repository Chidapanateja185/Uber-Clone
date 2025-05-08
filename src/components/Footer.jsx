import React from 'react'
import "../css/footer.css"
import 'boxicons';
import apple from "../images/apple.svg"
import google from "../images/google.svg"


const Footer = () => {
  return (
    <div>
      <footer className='footer'>

          <div className="footer-top">
            <h1>Uber</h1>
            <h3>Visit Help Center</h3>
          </div>

          <div className="footer-columns">

            <div className="column">
              <ul className='list'>
                <h4>Company</h4>
                <li>About us</li>
                <li>Our offerings</li>
                <li>Newsroom</li>
                <li>Investors</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>

            <div className="column">
              <ul className='list'>
                <h4>Products</h4>
                <li>Ride</li>
                <li>Drive</li>
                <li>Eat</li>
                <li>Uber for Business</li>
                <li>Uber Freight</li>
                <li>Gift cards</li>
                <li>Uber Health</li>
              </ul>
            </div>

            <div className="column">
              <ul className='list'>
                <h4>Global citizenship</h4>
                <li>Safety</li>
                <li>Sustainability</li>
              </ul>
            </div>

            <div className="column">
              <ul className='list'>
                <h4>Travel</h4>
                <li>Reserve</li>
                <li>Airports</li>
                <li>Cities</li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom">
            <div className="social-icons">
                <span><box-icon name='facebook-square' type='logo' color='#ffffff' ></box-icon></span>
                <span><box-icon type='logo' name='twitter' color='#ffffff'></box-icon></span>
                <span><box-icon name='youtube' type='logo' color='#ffffff'></box-icon></span>
                <span><box-icon name='linkedin-square' type='logo' color='#ffffff'></box-icon></span>
                <span><box-icon name='instagram-alt' type='logo' color='#ffffff'></box-icon></span>
            </div>
            <div className="language">
              <span><box-icon name='globe' animation='spin' color='#ffffff'></box-icon> English</span>
              <span><box-icon type='solid' name='edit-location' color='#ffffff'></box-icon> Chennai</span>
            </div>
          </div>

          <div className="footer-download">
            <div className="app">
              <img src={google} alt='Google Store'/>
              <img src={apple} alt='App Store'/>
            </div>
          </div>

          <div className="licency">
              <div className="privacy">
                <p>© 2025 Uber Technologies Inc.</p>
              </div>
              <div className="terms">
                <a href="">Privacy</a>
                <a href="">Accessibility</a>
                <a href="">Terms</a>
              </div>
          </div>
      </footer>
    </div>
  )
}

export default Footer
