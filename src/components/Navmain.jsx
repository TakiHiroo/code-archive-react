import React from 'react'

const Navmain = () => {
  return (
    <header class="header">
      <section class="flex">
        <a href="index.html" class="logo">Code /\rchive</a>

        <nav class="navbar">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#course-heading">library</a>
          <a href="#contact">Feedback</a>
        </nav>

        <div id="menu-btn" class="fas fa-bars"></div>
      </section>
    </header>
  )
}

export default Navmain
