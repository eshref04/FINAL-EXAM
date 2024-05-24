import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"


const Header = () => {
  return (
    <>
    <header className='header__start'>
  <div className="container d-flex justify-content-between pt-3 ">
 <div className='header__start__left'>
    <input type="text" placeholder='Search' />
    <i class="fa-solid fa-magnifying-glass"></i>
 </div>

 <div className='header__start__logo'>
    <Link to="/">SHOPPERS</Link>
 </div>

 <ul className='header__start__icons d-flex gap-3 align-items-center'>
    <li><i class="fa-solid fa-user"></i></li>
    <li><i class="fa-regular fa-heart"></i></li>
    <li><i class="fa-solid fa-cart-shopping"></i></li>
 </ul>
  </div>
  <hr />
</header>

<header className='header__end'>
 <div className="container d-flex justify-content-center">
   <ul className='d-flex gap-5'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/admin">Admin</Link></li>
    <li><Link to="/admin/add">Add</Link></li>
 
   </ul>

 </div>
</header>
    </>
   
  )
}

export default Header