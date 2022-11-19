import React, {useState} from 'react'

const Navmain = () => {
  
  return (
    <header className='header'>
      <section className='flex'>
        <a href='index.html' className='logo'>Code /\rchive</a>

        <nav className='navbar'>
          <a href='#home'>home</a>
          <a href='#about'>about</a>
          <a href='#course-heading'>library</a>
          <a href='#contact'>Feedback</a>
        </nav>

        <div id='menu-btn' className='fas fa-bars'></div>
      </section>
    </header>
  )
}

export default Navmain
