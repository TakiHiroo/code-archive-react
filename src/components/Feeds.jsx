import React from 'react'
import contact from '../images/contact-img.svg'

const Feeds = () => {
  return (
<section class="contact">
      <h1 class="heading" id="heading"><span>contact</span> us</h1>

      <div class="row" id="contact">
        <div class="image">
          <img src={contact} alt="" />
        </div>

        <form action="" method="post">
          <span>your name</span>
          <input
            type="text"
            required
            placeholder="enter your full name"
            maxlength="50"
            name="name"
            class="box"
          />
          <span>your email</span>
          <input
            type="email"
            required
            placeholder="enter your valie email"
            maxlength="50"
            name="email"
            class="box"
          />
          <textarea name="comment" id="" cols="30" rows="10"class="box"></textarea>
          <input type="submit" value="send message" class="btn" name="send" />
        </form>
      </div>
    </section>
  )
}

export default Feeds
