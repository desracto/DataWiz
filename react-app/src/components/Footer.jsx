import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="brand-info">
        <div className="brand-logo">
          <img src={process.env.PUBLIC_URL + '/images/DataWiz-Logo.png'} alt="Logo"/>
        </div>
        <div className="brand-text">
          <div className="brand-name">
            <h2>DataWiz.</h2>
          </div>
          <div className="slogan">
            <p>Your Gateway to Mastering SQL Queries with Query Visualization, and Effortless Query Grading. Unleash the Power of Data with Ease.</p>
          </div>
        </div>
        <div className="instagram-section">
          <img src={process.env.PUBLIC_URL + '/images/Instagram Icon.png'} alt="Instagram Icon" />
          <p>Follow us on Instagram!</p>
        </div>
      </div>

      <div className="middle-section">
      <div className="page-links">
          <h3>Pages</h3>
          <ul>
            <li>Home</li>
            <li>Animation</li>
            <li>Quizzes</li>
            <li>FAQs</li>
            <li>Settings</li>
          </ul>
        </div>
        <div className="contact-info">
          <h3>Contact</h3>
          <div className="contact-item">
            <img src={process.env.PUBLIC_URL + '/images/EmailIcon.png'} alt="Email Icon" />
            <p>info@example.com</p>
          </div>
          <div className="contact-item">
            <img src={process.env.PUBLIC_URL + '/images/LocationIcon.png'} alt="Location Icon" />
            <p>Dubai, United Arab Emirates</p>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>© 2023 Your Brand. Crafted with ❤️ by Team Odyssey.</p>
      </div>
    </footer>
  );
}
