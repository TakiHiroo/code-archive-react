import React from 'react'
import contact from '../images/contact-img.svg'

const Feeds = () => {
  return (
<section className='contact'>
      <h1 className='heading' id='heading'><span>contact</span> us</h1>

      <div className='row' id='contact'>
        <div className='image'>
          <img src={contact} alt='' />
        </div>

        <form action='' method='post'>
          <span>your name</span>
          <input
            type='text'
            required
            placeholder='enter your full name'
            maxLength='50'
            name='name'
            className='box'
          />
          <span>your email</span>
          <input
            type='email'
            required
            placeholder='enter your valie email'
            maxLength='50'
            name='email'
            className='box'
          />
          <textarea name='comment' id='' cols='30' rows='10'className='box'></textarea>
          <input type='submit' value='send message' className='btn' name='send' />
        </form>
      </div>
    </section>
  )
}

export default Feeds
