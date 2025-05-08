import React from 'react'
import "../css/account.css"
import img1 from "../images/Airport-Fall.png"
import courier from '../images/courier.svg'
import watch from "../images/image-9.png"
import drive from "../images/earner-illustra.png"
import bridge from "../images/u4b-square.png"
import man from "../images/fleet-management.jpg"
import qr1 from "../images/QR2.png"


const Account = () => {
  return (
    <div>
      <div className="content">

        <div className="stack">
            <div className="text-stack">
                <h1>Log in to see your recent activity</h1>
                <p>View past trips, tailored suggestions, support resources, and more.</p>
                <button className='btn'>Log in to your account</button>
                <a>Don’t have an Uber account? Sign up</a>
            </div>
            <img src={img1} alt='Airport travel' />
        </div>

        <div class="reserve-container">
            <div class="reserve-box">
                <div class="reserve-left">
                    <h2>Get your ride right with Uber Reserve</h2>
                    <p>Choose date and time</p>
                    <div class="inputs">
                        <input type="date" />
                        <input type="time" />
                    </div>
                        <button>Next</button>
                </div>
                <div class="reserve-right">
                    <img src={watch} alt="Watch on calendar" />
                </div>

                <div class="reserve-besides">
                    <h3>Benefits</h3>
                    <ul>
                        <li>📅 Choose your exact pickup time up to 90 days in advance.</li>
                        <li>⏱️ Extra wait time included to meet your ride.</li>
                        <li>🚫 Cancel at no charge up to 60 minutes in advance.</li>
                    </ul>
                    <a href="#">See terms</a>
                </div>
            </div>
        </div>

        <div className="drive-container">
            <img src={drive} alt='Driveing'/>
            <div className="drive-text">
                <h1>Drive when you want, make what you need</h1>
                <p>Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.</p>
                <button className='btn'>Get Started</button>
                <a>Already have an account? Sign in</a>
            </div>
        </div>

        <div className="stack">
            <div className="text-stack">
                <h1>The Uber you know, reimagined for business</h1>
                <p>Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size.</p>
                <button className='btn'>Get Started</button>
                <a>Check out our solutions</a>
            </div>
            <img src={bridge} alt='Bridge'/>
        </div>

        <div className="drive-container">
            <img src={man} alt='Man Standing'/>
            <div className="drive-text">
                <h1>Make money by renting out your car</h1>
                <p>Connect with thousands of drivers and earn more per week with Uber’s free fleet management tools.</p>
                <button className='btn'>Get Started</button>
            </div>
        </div>

        <div className="download">
            <h1>It’s easier in the apps</h1>
            <div class="card-container">
                <div class="card">
                    <img src={qr1} alt="Uber QR" class="qr" />
                    <div class="card-text">
                        <h3>Download the Uber app</h3>
                        <p>Scan to download</p>
                    </div>
                    <div class="arrow">→</div>
                </div>
                <div class="card">
                    <img src={qr1} alt="Driver QR" class="qr" />
                    <div class="card-text">
                        <h3>Download the Driver app</h3>
                        <p>Scan to download</p>
                    </div>
                    <div class="arrow">→</div>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Account
