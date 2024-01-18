import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import SignUp from './components/SignUp'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Featured />
        <SignUp />
        <Footer />

    </div>
  )
}

export default App