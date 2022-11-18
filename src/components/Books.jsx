import React from 'react'
import course1 from '../images/course-1.svg'
import course2 from '../images/course-2.svg'
import course3 from '../images/course-3.svg'
import course4 from '../images/course-4.svg'
const Books = () => {
   return (
      <section class="courses" id="course">
         <h1 class="heading" id="course-heading">our <span>courses</span></h1>

         <div class="swiper course-slider">
               <div class="swiper-slide slide">
                  <img src={course1} alt="" />
                  <h3>Front End</h3>
                  <p>
                     A architects and develops websites and applications using web
                     technologies which run on the Open Web
                  </p>
               </div>

               <div class="swiper-slide slide">
                  <img src={course2} alt="" />
                  <h3>Back End</h3>
                  <p>
                     are the experts who build and maintain the mechanisms that process
                     data and perform actions on websites
                  </p>
               </div>

               <div class="swiper-slide slide">
                  <img src={course3} alt="" />
                  <h3>Database Engineer</h3>
                  <p>
                     are responsible for the design, programming, construction, and
                     implementation of new databases.
                  </p>
               </div>

               <div class="swiper-slide slide">
                  <img src={course4} alt="" />
                  <h3>UI/UX and graphic design</h3>
                  <p>
                     create the user interface for an app, website, or other
                     interactive media.
                  </p>
               </div>

         </div>
      </section>
   )
}

export default Books
