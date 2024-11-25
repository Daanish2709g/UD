import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-sections">
                <div className="footer-column">
                    <h4>Online Learning</h4>
                    <ul>
                        <li>Fashion</li>
                        <li>Electronics</li>
                        <li>Banking</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Courses</h4>
                    <ul>
                        <li>Colleges</li>
                        <li>Men’s Wear</li>
                        <li>Women’s Wear</li>
                        <li>Kid’s Wear</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Mobile and Accessories</h4>
                    <ul>
                        <li>Health Care</li>
                        <li>Home Appliances</li>
                        <li>Credit Cards</li>
                        <li>Zero Savings Accounts</li>
                        <li>Savings Applications</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Resources</h4>
                    <ul>
                        <li>Company</li>
                        <li>Blog</li>
                        <li>User Guides</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>About Us</h4>
                    <ul>
                        <li>Contact Us</li>
                        <li>Internships</li>
                        <li>Certificate Verification</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 UnlockDiscounts, Inc. • Privacy • Terms • Sitemap</p>
            </div>
        </footer>
    );
};

export default Footer;
