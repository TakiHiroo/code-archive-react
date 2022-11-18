import React from 'react'

const Navlib = () => {
  return (
    <header class="header">
      <section class="flex">
        <a href="index.html" class="logo">Code /\rchive</a>

        <nav class="navbar">
          <a href="#home">home</a>
          <a href="#about">Front End</a>
          <a href="#course-heading">Back End</a>
          <a href="#heading">Database</a>

        </nav>

        <div id="menu-btn" class="fas fa-bars"></div>
      </section>
    </header>
  )
}

export default Navlib
