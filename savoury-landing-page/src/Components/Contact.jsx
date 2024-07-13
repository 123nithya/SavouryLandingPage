import React from 'react'

const Contact = () => {
  return (
    <div className='contact-section'>
      <h1>Contact Us</h1>
      <div className="inputField">
        <div className="twoInputs">
            <input type="text" placeholder='Name' className='name' />
            <input type="text" placeholder='Email' className='email' />
        </div>
        <div className="textField">
            <textarea name="textField" id="text" placeholder='Message' ></textarea>
        </div>
        <div className="btn">
            <button className='but'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
