import React from 'react'
import './About.css'
import food2 from '../../assets/4.png'
const About = () => {
  return (
    <section className='about'>
      <div className="container">
        <div className="img-container">
          <img src={food2} alt="" />
        </div>
        <div className='text2-container'>
          <h1>About Us</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
          <button>Read More</button>
        </div>
      </div>
    </section>
  )
}

export default About
