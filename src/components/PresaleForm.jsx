import { useState } from 'react';
import { ConnectWallet } from './ConnectWallet';

export default function PresaleForm() {
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState('ETH');
  
  // Sample presale details
  const presaleDetails = {
    tokenName: "TSL",
    price: 0.0001,
    minPurchase: 0.1,
    maxPurchase: 10,
    raised: 750,
    hardCap: 1000,
    startDate: new Date('2023-07-15'),
    endDate: new Date('2023-08-15'),
  };

  const progress = (presaleDetails.raised / presaleDetails.hardCap) * 100;

  // Calculate token amount
  const tokenAmount = amount ? (amount / presaleDetails.price) : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Purchase submitted: ${amount} ${selectedToken} for ${tokenAmount} ${presaleDetails.tokenName}`);
    // Here you would typically interact with a smart contract
  };

  return (
    <div className="presale-card">
      <div className="presale-header">
        <h2>{presaleDetails.tokenName} Token Presale</h2>
        <div className="presale-timer">
          <div className="timer-item">
            <span className="timer-value">{Math.floor((presaleDetails.endDate - new Date()) / (1000 * 60 * 60 * 24))}</span>
            <span className="timer-label">Days</span>
          </div>
          <div className="timer-item">
            <span className="timer-value">{Math.floor((presaleDetails.endDate - new Date()) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))}</span>
            <span className="timer-label">Hours</span>
          </div>
          <div className="timer-item">
            <span className="timer-value">{Math.floor((presaleDetails.endDate - new Date()) % (1000 * 60 * 60) / (1000 * 60))}</span>
            <span className="timer-label">Minutes</span>
          </div>
        </div>
      </div>

      <div className="presale-stats">
        <div className="presale-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="progress-text">
            <span>{presaleDetails.raised} ETH raised of {presaleDetails.hardCap} ETH</span>
            <span>{progress.toFixed(2)}%</span>
          </div>
        </div>
        
        <div className="presale-info">
          <div className="info-item">
            <p>Price:</p>
            <p>1 {presaleDetails.tokenName} = {presaleDetails.price} ETH</p>
          </div>
          <div className="info-item">
            <p>Min Purchase:</p>
            <p>{presaleDetails.minPurchase} ETH</p>
          </div>
          <div className="info-item">
            <p>Max Purchase:</p>
            <p>{presaleDetails.maxPurchase} ETH</p>
          </div>
        </div>
      </div>

      <form className="presale-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="token-select">Pay with</label>
          <select 
            id="token-select" 
            value={selectedToken} 
            onChange={(e) => setSelectedToken(e.target.value)}
          >
            <option value="ETH">ETH</option>
            <option value="USDT">USDT</option>
            <option value="USDC">USDC</option>
          </select>
        </div>
        
        <div className="input-group">
          <label htmlFor="amount-input">Amount</label>
          <input
            id="amount-input"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            min={presaleDetails.minPurchase}
            max={presaleDetails.maxPurchase}
            step="0.01"
          />
        </div>
        
        <div className="token-calc">
          <p>You will receive:</p>
          <h3>{tokenAmount.toLocaleString()} {presaleDetails.tokenName}</h3>
        </div>
        
        <div className="presale-actions">
          <button type="submit" className="buy-btn">Buy Tokens</button>
        </div>
      </form>
      
      <div className="connect-wallet-container">
        <p>Connect your wallet to participate</p>
        <ConnectWallet />
      </div>
    </div>
  );
} 