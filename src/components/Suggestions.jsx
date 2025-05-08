import React from 'react'
import "../css/suggestion.css"
import Courier from "../images/Courier.png"
import Rental from "../images/Hourly2021.png"
import Reserve from "../images/reserve.png"
import Ride from "../images/ride.png"

const Suggestions = () => {
  return (
    <div>
      <div className="content-section">
        <h1>Suggestions</h1>
        <div className="container">

            <div className="box">
                <div className="text-box">
                    <h3>Courier</h3>
                    <p>Uber make same day item delivery easier than ever</p>
                    <button className="btn">Details</button>
                </div>
                <img src={Courier} alt='Courier Service' />
            </div>
            
            <div className="box">
                <div className="text-box">
                    <h3>Rentals</h3>
                    <p>Request a trip for block of time and make a multiple stops</p>
                    <button className="btn">Details</button>    
                </div>   
                <img src={Rental} alt='Rental Service' />
            </div>
            
            <div className="box">
                <div className="text-box">
                    <h3>Reserve</h3>
                    <p>Reserve your ride in advance so you can relax on the day of your trip</p>
                    <button className="btn">Details</button>
                </div>
                <img src={Reserve} alt='Reserve before' />
            </div>

            <div className="box">
                <div className="text-box">
                    <h3>Ride</h3>
                    <p>Go anywhere with Uber Request a Ride, hope in, and go</p>
                    <button className="btn">Details</button>
                </div>
                <img src={Ride} alt='Ride Service' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Suggestions
