import React from 'react'
import logo from '../../commonResource/images/icons/logo-Apple.png'
import search from '../../commonResource/images/icons/search-icon-sm.png'
import cart from '../../commonResource/images/icons/cart-sm.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
   
        <div className="nav-wrapper fixed-top">
    <div className="container">
      <nav className=" w-100 navbar navbar-toggleable-sm navbar-expand-md">
      <button aria-controls="responsive-navbar-nav" type="button" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
        
       
        <Link className="navbar-brand mx-auto" to="logo"><img src={logo} alt="#"/></Link>

        <div className="navbar-collapse collapse">
          <ul className="navbar-nav nav-justified w-100  nav-fill">
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/mac/">Mac</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="iphone">Iphone</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="ipad">Ipad</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="watch">Watch</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="tv">Tv</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="music">Music</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="Support">Support</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/search/"><img src={search} alt="#"/></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/cart/"><img src={cart} alt="#"/></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
 
  )
}

export default Header