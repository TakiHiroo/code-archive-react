import React from 'react'

const Navlib = () => {
  return (
    <header className='header'>
      <section className='flex'>
        <a href='index.html' className='logo'>Code /\rchive</a>

        <nav className='navbar'>
          <a href='#home'>home</a>
          <a href='#about'>Front End</a>
          <a href='#course-heading'>Back End</a>
          <a href='#heading'>Database</a>

        </nav>

        <div id='menu-btn' className='fas fa-bars'></div>
      </section>
    </header>
  )
}

export default Navlib
