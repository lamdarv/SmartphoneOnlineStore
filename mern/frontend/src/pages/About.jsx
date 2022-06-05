import React from 'react'
import Navbar from '../components/Navbar'
import "../styles/about.css"
import Footer from '../components/Footer'
import DescriptionAbout from '../components/DescriptionAbout'

const About = () => {
  return (
    <div>
      <Navbar />  
        <div className="a-container">
          <div className="a-row">
            <div className="a-col">
              <h2>About Us</h2>
              <div className="box-fiora">
                <img src="/images/about/fiora-fullstack.png" alt="" className="img-fiora" />
              </div>
              <div className="box-lamda">
                <img src="/images/about/lamda-fullstack.png" alt="" className="img-lamda" />
              </div>
              <div className="box-nisa">
                <img src="/images/about/nisa-backend.png" alt="" className="img-nisa" />
              </div>
            </div>
          </div>
        </div>
      <DescriptionAbout />
      <Footer />
    </div>
  )
}

export default About
