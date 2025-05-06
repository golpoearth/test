import { ConnectWallet } from './ConnectWallet';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <h1>BIGRIG</h1>
        </div>
        
        <div className="desktop-nav">
          <nav className="nav">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#tokenomics">Tokenomics</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="wallet-btn">
          <ConnectWallet />
        </div>
        
        <div className="mobile-wallet-btn">
          <ConnectWallet />
        </div>
      </div>
    </header>
  );
} 