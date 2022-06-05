import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/footer.css"

const Footer = () => {
  return (
    <div className='f-container'>
        <div className="f-row">
          <div className="f-col">
            <img src="/images/logo/logoB4.png" alt="" />
            <p>Tugas Besar Pemodelan Data e-Commerce Smartphone Online Store Oleh B4.</p>
          </div>
          <div className="f-col">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
          <div className="f-col">
            <h2>Brands</h2>
            <ul>
              <li>
                <NavLink to="/shop">Apple</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Oppo</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Samsung</NavLink>
              </li>
              <li>
                <NavLink to="/">Vivo</NavLink>
              </li>
            </ul>
          </div>
          <div className="f-col">
            <h2>Stay in touch with us</h2>
            <div className="socials">
                <a href="https://www.instagram.com/lam_darv/"><img src="/images/socials/instagram.png" alt="" /></a>
                <a href="https://www.instagram.com/fiobrlna/"><img src="/images/socials/instagram.png" alt="" /></a>
                <a href="https://www.instagram.com/haunanisaa/"><img src="/images/socials/instagram.png" alt="" /></a>
            </div>
          </div>
        </div>
        <div className="f-copyrow">
            <p>&copy; 2022. All Rights Reserved. Powered by B4 Lamda Fiora Nisa.</p>
        </div>
    </div>
  )
}

export default Footer