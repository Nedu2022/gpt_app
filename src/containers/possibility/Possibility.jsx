import React from 'react'
import FeatureImage from '../../assets/FeatureImage.png' 
import './possibility.css'

const Possibility = () => {
  return (
    <div className='gpt__possibility section__padding' id='possibility'>
      <div className="gpt__possibility-image">
        <img src={FeatureImage} alt="" />
      </div>
      <div className="gpt__possibility-content">
        <h4>Request Early Access to get started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
