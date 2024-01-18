import Crypto from '../assets/hero-img.png'
import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">


            {/* lef side */}
            <div className="left">
                <p>Buy & Sell Crypto 24?7 using your retirement account</p>
                <h1>Invest in Cryptocurrency with your IRA</h1>
                <p>Buy, Sell, and sotre hundreds of cryptocurrencies</p>
                <div className='input-container'>
                    <input type="email" placeholder='Enter your email' />
                    <button className='btn'> Learn More </button>
                </div>
            </div>


            {/* right side */}
            <div className="right">
                <div className="img-container">
                    <img src={Crypto} alt="cryptoImage" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero