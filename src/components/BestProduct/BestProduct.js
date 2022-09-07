import React from 'react'
import './BestProduct.css'

function BestProduct() {
  return (
    <div className='best-product'>
        <img className='background' src='imgs/bes-bg.jpg' alt=''/>
        <h1>
            Best Product
        </h1>
        <p>
            How to create mobile-optimized videos in minutes. Not a designer, 
            every team makes a lot of videos Can be trimmed. Take the first         
        </p>
        <div className='product-container'>
            <div className='product'>
                <img className='product-icon' src='imgs/producticon-01@3x.png' alt=''/>
                <img className='product-image' src='imgs/best-image-01.jpg' alt=''/>
                <div className='button-go'>
                    <img src='imgs/go-icon@3x.png' alt=''/>
                    <h3>
                        How to create mobile-optimized
                    </h3>
                    
                </div>
            </div>
            <div className='product'>
                <img className='product-icon' src='imgs/producticon-02@3x.png'alt=''/>
                <img className='product-image' src='imgs/best-image-02.jpg'alt=''/>
                <div className='button-go'>
                    <img src='imgs/go-icon@3x.png' alt=''/>
                    <h3>
                        How to create mobile-optimized
                    </h3>
                    
                </div>
            </div>
            <div className='product'>
                <img className='product-icon' src='imgs/producticon-03@3x.png' alt=''/>
                <img className='product-image' src='imgs/best-image-03.jpg' alt=''/>
                <div className='button-go'>
                    <img src='imgs/go-icon@3x.png' alt='go-icon'/>
                    <h3>
                        How to create mobile-optimized
                    </h3>
                    
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default BestProduct