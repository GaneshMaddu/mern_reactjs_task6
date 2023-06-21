import React from 'react'
import './Footer.css'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginRight: "5px" }} />
                        <div>
                            <p>Piduguralla ,Guntur</p>
                            <p>India</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "white", marginRight: "5px" }} /> 7989686844
                        </h4>
                    </div>

                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "white"}} />ganesh.maddu1234@gmail.com
                        </h4>
                    </div>

                </div>
                <div className="right">
                    <h4>Something about me </h4>
                    <p>I enjoy group discussions and  enthusiastic to learn new technologies.</p>
                    <div className="social">
                    
                    <a href="https://www.facebook.com/ganesh.kohli.3914"> <FaFacebook size={30} style={{ color: "white" }} />  </a>
                    <a href="https://www.linkedin.com/in/ganesh-maddu-42418423b/"><FaLinkedin size={30} style={{ color: "white"}} /> </a>
                    <a href="https://github.com/GaneshMaddu"><FaGithub size={30} style={{ color: "white"}} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
