import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import { ConnectWallet } from '../components/ConnectWallet';
import HeroSection from '../components/HeroSection';
import { useState, useEffect } from 'react';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 30,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">
      <Head>
        <title>BIGRIG Token Operation - Pre-Launch Sale</title>
        <meta name="description" content="Join the exclusive BIGRIG Token pre-launch sale event and be part of the trucking convoy revolution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className="main">
        <HeroSection />
        
        <section id="presale" className="presale-section">
          <div className="container">
            <div className="presale-highlights">
              <div className="bigrig-logo">
                <Image 
                  src="/logo.png" 
                  alt="BIGRIG Logo" 
                  width={100} 
                  height={100} 
                  className="logo-image"
                  priority={true} 
                />
              </div>
              <div className="presale-headline">
                <h1>BIGRIG Token <span className="highlight">Operation</span></h1>
                <p className="presale-tagline">Pre-launch exclusive sale</p>
              </div>
            </div>
            
            <div className="presale-main-content">
              <div className="presale-form-container">
                <div className="presale-card">
                  <div className="card-badge">Limited Time Offer</div>
                  <h2 className="card-title">Join The <span className="highlight-text">BIGRIG</span> Revolution</h2>
                  <p className="card-subtitle">Connect your wallet to participate in our exclusive presale</p>
                  
                  <div className="countdown-timer">
                    <p className="countdown-label">Presale Ends In:</p>
                    <div className="countdown-units">
                      <div className="countdown-unit">
                        <span className="countdown-value">{timeLeft.days}</span>
                        <span className="countdown-label">Days</span>
                      </div>
                      <div className="countdown-unit">
                        <span className="countdown-value">{timeLeft.hours}</span>
                        <span className="countdown-label">Hours</span>
                      </div>
                      <div className="countdown-unit">
                        <span className="countdown-value">{timeLeft.minutes}</span>
                        <span className="countdown-label">Minutes</span>
                      </div>
                      <div className="countdown-unit">
                        <span className="countdown-value">{timeLeft.seconds}</span>
                        <span className="countdown-label">Seconds</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="presale-progress">
                    <div className="progress-info">
                      <span>Presale Progress</span>
                      <span className="progress-percentage">67%</span>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar-fill" style={{ width: '67%' }}></div>
                    </div>
                    <div className="progress-stats">
                      <div className="progress-stat">
                        <span className="stat-label">Raised</span>
                        <span className="stat-value">$675,890</span>
                      </div>
                      <div className="progress-stat">
                        <span className="stat-label">Goal</span>
                        <span className="stat-value">$1,000,000</span>
                      </div>
                      <div className="progress-stat">
                        <span className="stat-label">Participants</span>
                        <span className="stat-value">3,241</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="wallet-options">
                    <button className="wallet-button primary">
                      <span className="wallet-icon">💰</span>
                      Goldblock Wallet
                    </button>
                    <div className="connect-wallet-wrapper">
                      <ConnectWallet />
                    </div>
                    <button className="wallet-button">
                      <span className="wallet-icon">📱</span>
                      I don't have a wallet
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="marketing-text">
                Thank you for your interest in our project. <span className="marketing-highlight">Unlock exponential growth</span> with our 
                <span className="marketing-badge-wrapper">
                  <Image 
                    src="/45x.png" 
                    alt="45X Returns" 
                    width={80} 
                    height={40} 
                    className="marketing-badge-img" 
                  />
                </span> 
                Proposal, harnessing unparalleled returns, exclusive benefits, and a sustainable competitive edge. Seize this opportunity to propel your success to new heights.
              </div>
              
              <div className="convoy-footer">
                <p>"Join the 'Bigrig token-Trucking Convoy,' powered by the Goldblock wallet app. Fuel your growth with your unique referral code and help drive our community to five hundred thousand holders + users across the world."</p>
                <div className="convoy-image">
                  <Image 
                    src="/car.png" 
                    alt="Truck Convoy" 
                    width={200} 
                    height={100} 
                    className="truck-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 