import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (

<footer className='footer'>

   <section>

      <div className='share'>
         <Link to='/'><i className='fab fa-facebook-f'></i></Link>
         <Link to='/'><i className='fab fa-twitter'></i></Link>
         <Link to='/'><i className='fab fa-linkedin'></i></Link>
         <Link to='/'><i className='fab fa-instagram'></i></Link>
         <Link to='/'><i className='fab fa-youtube'></i></Link>
      </div>

      <div className='credit'>&copy; copyright @ 2022 by <span>Taki Hiroo</span> | all rights reserved!</div>

   </section>

</footer>
  )
}

export default Footer
