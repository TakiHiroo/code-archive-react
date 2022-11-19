import React from 'react'
import about from '../images/about-img.svg'
const About = () => {
  return (
    <section className='about' id='about'>
      <div className='row'>
        <div className='image'>
          <img src={about} alt='' />
        </div>

        <div className='content'>
          <h3 className='what'>What is.</h3>
          <h2 className='title-description'>Code Archive</h2>
          <p>
            Is a online library full of history and more about different
            programming languages. this is made for the beginners and to solve
            the Curiosity of the person.
          </p>
          <a href='#contact' className='btn'>learn more why</a>
        </div>
      </div>
    </section>
  )
}

export default About
