import React from 'react'
import './footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram from '../assets/instagram_icon.png'
import pinterest from '../assets/pintester_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerlogo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <img src={instagram} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={pinterest} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={whatsapp} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 -All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer
