import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-title">The Future of <span className="accent">Trucking Finance</span></h1>
          <p className="hero-subtitle">Join the exclusive BIGRIG token presale event and be part of the transportation revolution</p>
          <div className="hero-buttons">
            <a href="#presale" className="primary-btn">Join Presale</a>
            <a href="#whitepaper" className="secondary-btn">Read Whitepaper</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">45X</span>
              <span className="stat-label">Potential ROI</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">7 Days</span>
              <span className="stat-label">Until Public Launch</span>
            </div>
          </div>
        </div>
        
        <div className="hero-right">
          <div className="hero-image-container">
            <Image 
              src="/truck-hero.png" 
              alt="BIGRIG Truck Fleet" 
              width={500} 
              height={400}
              className="hero-image"
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
            />
          </div>
        </div>
      </div>
      
      <div className="hero-features">
        <div className="feature">
          <div className="feature-icon">🔒</div>
          <h3>Secure</h3>
          <p>Built on industry-leading blockchain technology</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🚀</div>
          <h3>High Potential</h3>
          <p>Clear roadmap with ambitious growth goals</p>
        </div>
        <div className="feature">
          <div className="feature-icon">💰</div>
          <h3>Early Access</h3>
          <p>Exclusive presale pricing before public launch</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🌐</div>
          <h3>Global Network</h3>
          <p>Join a worldwide community of trucking enthusiasts</p>
        </div>
      </div>
    </section>
  );
} 