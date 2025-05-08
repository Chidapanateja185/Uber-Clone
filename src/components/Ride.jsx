import React from 'react'
import car from '../images/car.svg'
import courier from '../images/courier.svg'
import women from '../images/Ride-with-Uber.png'
import 'boxicons'
import '../css/ride.css'


const Ride = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-left">
            <h1>Go anywhere with Uber</h1>
            <div className="tab-buttons">
                <button className='tab active'>
                    <img src={car} alt='Car' />
                    <h3>RIde</h3>
                </button>
                <button className='tab'>
                    <img src={courier} alt='Courier' />
                    <h3>Courier</h3>
                </button>
            </div>
            <div className="form">

                <div className="form-group">
                    <span className="dot"></span>
                    <input type='text' placeholder='PickUp Location' />
                    <button className='icon-btn'><box-icon type='solid' name='send'></box-icon></button>
                </div>

                <div className="form-group">
                    <span className="square"></span>
                    <input type='text' placeholder='Dropoff Location' />
                </div>

                <div className="form-row">
                    <input type="date" value="Today"  />
                    <input type="text" value="Now"  />
                </div>

                <div className="form-row actions">
                    <button className='btn-primarary'>See Prices</button>
                    <a>Log in to see your recent activity</a>
                </div>  
            </div>
        </div>

        <div className="hero-right">
            <img src={women} alt='Women getting down from car'/>
        </div>

      </div>
    </div>
  )
}

export default Ride
