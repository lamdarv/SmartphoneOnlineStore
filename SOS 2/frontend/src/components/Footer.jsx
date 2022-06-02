import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/footer.css"

const Footer = () => {
  return (
    <div className='f-container'>
        <div className="f-row">
            <div className="f-col">
                <img src="/images/logo/logoB4.png" alt="" className="" />
                <p>Tugas Besar Pemodelan Data B4 Smartphone Online Store</p>
            </div>
            <div className="f-col">
                <h2>Quick Links</h2>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>   
                    </li>
                    <li>
                        <NavLink to="/">Shop</NavLink>   
                    </li>
                    <li>
                        <NavLink to="/">About</NavLink>   
                    </li>
                    <li>
                        <NavLink to="/">Contact</NavLink>   
                    </li>
                </ul>
            </div>
            <div className="f-col">
                <h2>Category</h2>
                <ul>
                    <li>
                        <NavLink to="/">Samsung</NavLink>   
                    </li>
                    <li>
                        <NavLink to="/">Apple</NavLink>   
                    </li>
                    <li>
                        <NavLink to="/">Vivo</NavLink>   
                    </li>
                    <li>
                        <NavLink to="/">Oppo</NavLink>   
                    </li>
                </ul>
            </div>
            <div className="f-col">
                <h2>Stay in touch with us</h2>
                <div className="socials">
                    <a href="/"><img src="/images/socials/facebook.png" alt="" /></a>
                    <a href="/"><img src="/images/socials/instagram.png" alt="" /></a>
                    <a href="/"><img src="/images/socials/twitter.png" alt="" /></a>
                </div>
            </div>
        </div>
        <div className="f-copyrow">
            <p>&copy; 2022. All Rights Reserved. Powered by B4</p>
        </div>
    </div>
  )
}

export default Footer