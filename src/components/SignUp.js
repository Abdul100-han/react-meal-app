import React from 'react'
import './SignUp.css'
import Crypto from '../assets/trade.png'

const SignUp = () => {
  return (
    <div className='signup'>
        <div className="container">
            {/* left  */}
            <div className="left">
                <img src={Crypto} alt="" />
            </div>



            {/* right  */}
            <div className="right">
                <h2>Eern passive income with crypto</h2>
                <p>Earn up to 12% reawards on 30+ digital assets. Simply
                    hold your assets in the ap to automatically earn rewards4
                    at the ensof each month with no lockup and no limit.
                </p>
                <div className="input-container">
                    <input type="email" placeholder='Enter yout eamil' />
                    <button className='btn'>Learn More </button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SignUp