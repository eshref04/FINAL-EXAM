import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.scss"

const Footer = () => {
  return (
    <>
        <footer className='footer__start' style={{padding:"80px 0px"}}>
        <div className="container d-flex justify-content-between">
            <div className='footer__left'>
            <h3  style={{marginLeft:"29px",fontSize:"22px"}}>Navigations</h3>
            <div className='d-flex gap-5 mt-4 footer__start__list'>
            <ul className='d-flex flex-column gap-3'>
        <li>Sell online</li>
        <li>Features</li>
        <li>Shopping cart</li>
        <li>Store builder</li>
            </ul>

           <ul className='d-flex flex-column gap-3'>
           <li>Mobile commerce</li>
           <li>Dropshipping</li>
           <li>Website development</li>
           </ul>

               <ul className='d-flex flex-column gap-3'>
                 <li>Point of sale</li>
                 <li>Hardware</li>
                 <li>Software</li>
               </ul>
            </div>
           
            </div>

            <div className='footer__right d-flex gap-5'>
            <div>
             <h3 style={{fontSize:"22px"}}>Promo</h3>
             <img className='mt-3' width={"255px"} height={"120px"} src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg.webp" alt="" />
             <h3  style={{fontSize:"19px"}} className='mt-4'>Finding Your Perfect Shoes</h3>
             <p>Promo from nuary 15 — 25, 2019</p>
            </div>

            <div>
                  <h3 style={{marginLeft:"29px",fontSize:"22px"}}>Contact Info</h3>
                  <ul className='d-flex flex-column gap-3 pt-2'>
                    <li>203 Fake St. Mountain View, San <br /> Francisco, California, USA</li>
                    <li>+2 392 3929 210</li>
                    <li>emailaddress@domain.com</li>
                  </ul>
                  <div>
                    <h3 style={{marginLeft:"29px",fontSize:"22px",marginTop:"16px"}}>Subscribe</h3>
                    <div className='d-flex'>
                    <input  style={{marginLeft:"29px",padding:"8px"}} type="email" placeholder='Email'/>
                    <button style={{border:"none",padding:"10px 0px"}}>SEND</button>
                    </div>
                  </div>
            </div>
            </div>
        </div>
    </footer>

    <footer>
        <div style={{padding:"14px"}} className="container d-flex justify-content-center">
         <p>Copyright ©2024 All rights reserved | This template is made with  by <Link>Colorlib</Link> </p>
        </div>
    </footer>
    </>

  )
}

export default Footer
                    