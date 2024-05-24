import React from 'react'
import "./FreeSection.scss"

const FreeSection = () => {
  return (
    <section className='free__section'>
        <div className="container d-flex justify-content-between pt-5 pb-4 align-items-center">
        <div className='free__section__left d-flex gap-4'>
     <i class="fa-solid fa-truck"></i>
     <div className='free__section__left__text d-flex flex-column gap-2'><h2>FREE SHIPPING</h2>
     <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Phasellus at iaculis quam. <br /> Integer accumsan tincidunt fringilla.</p>
     </div>
   
     </div>

     <div className='free__section__left d-flex gap-4'>
      <i class="fa-solid fa-rotate-left"></i>
     <div className='free__section__left__text d-flex flex-column gap-2'><h2>FREE RETURNS</h2>
     <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Phasellus at iaculis quam. <br /> Integer accumsan tincidunt fringilla.</p>
     </div>
   
     </div>

     <div className='free__section__left d-flex gap-4'>
     <i class="fa-solid fa-circle-question"></i>
     <div className='free__section__left__text d-flex flex-column gap-2'><h2>CUSTOMER SUPPORT</h2>
     <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Phasellus at iaculis quam. <br /> Integer accumsan tincidunt fringilla.</p>
     </div>
   
     </div>
        </div>
    <hr />
    </section>

  )
}

export default FreeSection