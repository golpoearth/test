import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="footer-logo-img">
              <Image src="/logo.png" alt="BIGRIG Logo" width={80} height={80} />
            </div>
            <div className="footer-logo-text">
              <h3>BIGRIG</h3>
              <p>The next generation trucking token</p>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#presale">Join Presale</a></li>
              <li><a href="#tokenomics">Tokenomics</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="#" className="social-link">
                <span className="social-icon">🐦</span>
                Twitter
              </a>
              <a href="#" className="social-link">
                <span className="social-icon">✈️</span>
                Telegram
              </a>
              <a href="#" className="social-link">
                <span className="social-icon">💬</span>
                Discord
              </a>
              <a href="#" className="social-link">
                <span className="social-icon">📝</span>
                Medium
              </a>
            </div>
          </div>
          
          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for the latest news and updates.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" className="newsletter-input" />
              <button className="newsletter-button">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} BIGRIG Token Operation. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 