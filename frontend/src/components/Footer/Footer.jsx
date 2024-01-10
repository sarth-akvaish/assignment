import React from 'react'
import './footer.css'
import icon from '../../assets/1.png'
import fb from '../../assets/fb.png'
import tw from '../../assets/tw.png'
import ig from '../../assets/ig.png'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-img-container'>
                <img src={icon} alt="" />
            </div>
            <div className='footer-contact-section'>
                <h3>Contact us</h3>
                <ul>
                    <li>Lorem Ipsum Pvt Ltd.5/1, Magalton <br />Road, Phartosh Gate near YTM <br />Market, XYZ-343434</li>
                    <li>example2020@gmail.com</li>
                    <li>(904) 443-0343</li>
                </ul>
            </div>
            <div className='footer-contact-section'>
                <h3>More</h3>
                <ul>
                    <li>About us</li>
                    <li>Products</li>
                    <li>Career</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='footer-contact-section links'>
                <h3>Social Links</h3>
                <ul>
                    <li><img src={ig} alt="" /></li>
                    <li><img src={tw} alt="" /></li>
                    <li><img src={fb} alt="" /></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
