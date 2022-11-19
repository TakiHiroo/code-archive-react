import React from 'react'
import home from '../images/home-img.svg'
const Header = () => {
  return (
    <section class="home">
      <div class="row" id="home">
        <div class="content">
          <h3>online <br/>library full of <span>Programming</span></h3>
          <a href="/" class="btn">learn it now</a>
        </div>

        <div class="image">
          <img src={home} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Header
