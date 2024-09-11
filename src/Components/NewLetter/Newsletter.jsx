import React from 'react'
import './new.css'

const Newsletter = () => {
    return (
        <div className='newletter'>
            <h1>GET EXCLUSIVE OFFERS ON EMAIL</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder='Your Email Id' id="" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter
