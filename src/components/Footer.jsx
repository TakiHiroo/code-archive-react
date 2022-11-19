import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (

<footer class="footer">

   <section>

      <div class="share">
         <Link to='/'><i class="fab fa-facebook-f"></i></Link>
         <Link to='/'><i class="fab fa-twitter"></i></Link>
         <Link to='/'><i class="fab fa-linkedin"></i></Link>
         <Link to='/'><i class="fab fa-instagram"></i></Link>
         <Link to='/'><i class="fab fa-youtube"></i></Link>
      </div>

      <div class="credit">&copy; copyright @ 2022 by <span>Taki Hiroo</span> | all rights reserved!</div>

   </section>

</footer>
  )
}

export default Footer
