import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='gpt__footer section__padding'>
      <div className='gpt__footer-heading'>
        <h1 className="gradient__text">
        Do you want to step in to the future before others
        </h1>
      </div>

      <div className="gpt__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt__footer-links">
        <div className="gpt__footer-links_logo">
          <h1 className='gpt-logo'>GPT</h1>
          <p>Emirates Stadium, All Rights Reserved</p>
        </div>

        <div className="gpt__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="gpt__footer-links_div">
          <h4>Get in touch</h4>
          <p>Emirates Stadium</p>
          <p>9044-294-556</p>
          <p>nwabuokeichinedu00@gmail.com</p>
        </div>

        <div className="gpt__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="gpt__footer-copyright">
        <p>© 2023 GPT3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
