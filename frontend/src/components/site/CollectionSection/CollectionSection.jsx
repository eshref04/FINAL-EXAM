import React from 'react'
import "./CollectionSection.scss"

const CollectionSection = () => {
  return (
    <section className='collection__section'>
        <div className="container">
            <div className='collection__section__card '>
                <img src="https://preview.colorlib.com/theme/shoppers/images/women.jpg.webp" alt="" />
                <div className='collection__section__card__text'>
                <span>COLLECTIONS</span>
    <h3>WOMEN</h3>
                </div>
   
            </div>

            <div className='collection__section__card '>
                <img src="https://preview.colorlib.com/theme/shoppers/images/children.jpg.webp" alt="" />
                <div className='collection__section__card__text'>
                <span>COLLECTIONS</span>
                <h3>CHILDREN</h3>
                </div>
            </div>

            <div className='collection__section__card '>
                <img src="https://preview.colorlib.com/theme/shoppers/images/men.jpg.webp" alt="" />
                <div className='collection__section__card__text'>
                <span>COLLECTIONS</span>
                <h3>MEN</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CollectionSection