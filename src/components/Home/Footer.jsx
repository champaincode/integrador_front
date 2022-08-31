import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
  <div className='footer'>
    <div className="footer-container">
        <div className="footer-content-container">
            <h3 className="website-logo">Coffeels</h3>
            <span className="footer-info">+54 290 403 202</span>
            <span className="footer-info">Coffeels@mail.com</span>
        </div>
        <div className="footer-menus">
            <div className="footer-content-container">
                <span className="menu-title">menu</span>
                <a href="/" class="menu-item-footer">Home</a>
                <a href="/menu" class="menu-item-footer">menu</a>
                <a href="/register" class="menu-item-footer">Register</a>
            </div>
            <div className="footer-content-container">
                <span className="menu-title">legal</span>
                <a href="" className="menu-item-footer">Privacy Policy</a>
                <a href="" className="menu-item-footer">Cookies</a>
                <a href="" className="menu-item-footer">Legal Advice</a>
            </div>
        </div>
        
        <div class="footer-content-container">
            <span className="menu-title">follow us</span>
            <div className="social-container">
                <a href="" className="social-link"><FacebookIcon /></a>
                <a href="" className="social-link"><InstagramIcon/></a>
                <a href="" className="social-link"><TwitterIcon/></a>
            </div>
        </div>
    </div>
    <div className="copyright-container">
        <span className="copyright">Copyright 2022, Coffeels All rights reserved.</span>
    </div>
    </div>
  
  )
}

export default Footer

