import React from 'react'
import "./HeroSection.scss"

const HeroSection = () => {
  return (
   <section className='hero__section pt-3'>
     <div className='hero__section__image' style={{width:"100%"}}>
     <img width={"100%"} src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg.webp" alt="" />
        </div>
    <div className="container">
       
        <div className='hero__section__right'>
        <h2>Finding Your <br /> Perfect Shoes</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Phasellus at iaculis quam. Integer accumsan <br /> tincidunt fringilla.</p>
         <button>SHOP NOW</button>
        </div>
        
        
    </div>
   </section>
  )
}

export default HeroSection