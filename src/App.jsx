import React from 'react'
import Navbar from './components/Navbar'
import Ride from './components/Ride'
import Suggestions from './components/Suggestions'
import Account from './components/Account'
import Footer from './components/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Ride />
      <Suggestions />
      <Account />
      <Footer />
    </div>
  )
}

export default App
