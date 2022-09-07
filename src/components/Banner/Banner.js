import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <div className="container">
            <img className='main-banner' src = "imgs/main-banner.jpg" alt='background'/>
            <div className='introduction'>
                <img src='imgs/introduction-bg.png' alt='introduction'/>
                <h1>
                    What Happened!
                </h1>
                <p>
                    How to create mobile-optimized videos in minutes. Not a designer, 
                    every team makes a lot of videos Can be trimmed. Take the first 
                    step to your brand's success. How to create 
                    mobile-optimized videos in minutes.
                </p>
            </div>
    </div>
  )
}

export default Banner