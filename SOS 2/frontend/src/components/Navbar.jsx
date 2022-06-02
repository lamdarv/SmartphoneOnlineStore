import React from 'react'
import '../styles/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faHeart, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='n-container'>
        <div className="n-row">
            <div className="n-col">
                <span className="n-email">smartphoneonlinestore@email.com</span>
                <span><FontAwesomeIcon icon={faUser} />Guest</span>
            </div>
            <div className="n-col">
                <div className="socials">
                    <a href="/"><img src="/images/socials/facebook.png" alt="" /></a>
                    <a href="/"><img src="/images/socials/instagram.png" alt="" /></a>
                    <a href="/"><img src="/images/socials/twitter.png" alt="" /></a>
                </div>
            </div>
        </div>
    <div className="n-row">
        <div className="n-col">
            <a href=""><img src="/images/logo/logoB4.png" className='logo' alt="" /></a>
        </div>
        <div className="n-col">
            <div className="icons">
                <a href="/login"><span><FontAwesomeIcon icon={faArrowRightToBracket} />Login</span></a>
                <a href="/wish"><span><FontAwesomeIcon icon={faHeart} /><span className='totalItems'>0</span></span></a>
                <a href="/cart"><span><FontAwesomeIcon icon={faShoppingBag} /><span className='totalItems'>0</span ></span></a>
            </div>
        </div>
    </div>
    <div className="n-row">
        <nav className="nav">
            <ul className="items">
                <li className="list"><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li className="list"><NavLink to="/shop" activeClassName="active">Shop</NavLink></li>
                <li className="list"><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li className="list"><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            </ul>
            <button className='btn'>BTN</button>
        </nav>
    </div>
    </div>
  )
}

export default Navbar