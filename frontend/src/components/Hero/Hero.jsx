import React from 'react'
import './Hero.css'
import icon from '../../assets/1.png'
import banner from '../../assets/3.png'

const Hero = () => {
    return (
        <section className='hero'>
            <div className='cont-1'>
                <img src={icon} alt="" />
                <div className='text-container'>
                    <h1>Discover the
                        Best Food and Drinks</h1>
                    <p>Naturally made Healthcare Products for the better care & support of your body.</p>
                    <button>Explore Now!</button>
                </div>
            </div>
            <div className='cont-2'>
                <img src={banner} alt="" />
                <button>Get in Touch</button>
            </div>
        </section>
    )
}

export default Hero
