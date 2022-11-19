import React from 'react'
import home from '../images/home-img.svg'
const Header = () => {
  return (
    <section className='home'>
      <div className='row' id='home'>
        <div className='content'>
          <h3>online <br/>library full of <span>Programming</span></h3>
          <a href='/' className='btn'>learn it now</a>
        </div>

        <div className='image'>
          <img src={home} alt='' />
        </div>
      </div>
    </section>
  )
}

export default Header
