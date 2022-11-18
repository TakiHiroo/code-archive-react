import React from 'react'
import about from '../images/about-img.svg'
const About = () => {
  return (
    <section class="about" id="about">
      <div class="row">
        <div class="image">
          <img src={about} alt="" />
        </div>

        <div class="content">
          <h3 class="what">What is.</h3>
          <h2 class="title-description">Code Archive</h2>
          <p>
            Is a online library full of history and more about different
            programming languages. this is made for the beginners and to solve
            the Curiosity of the person.
          </p>
          <a href="#contact" class="btn">learn more why</a>
        </div>
      </div>
    </section>
  )
}

export default About
