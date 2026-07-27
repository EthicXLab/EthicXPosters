import React from 'react';
import { PosterDefinition } from './index';
import { PosterWrapper } from '../components/PosterWrapper';
import eixLogo from '@assets/1764163440584-removebg-preview_1785157622863.png';
import ethLogo from '@assets/ethereum_logo_icon_147293_1785157622577.webp';
import bnbLogo from '@assets/bnb-bnb-logo_1785157622763.png';

export const DeveloperPosters: PosterDefinition[] = [
  {
    id: 'dev-21',
    title: 'CREATE YOUR TOKEN IN 1 CLICK',
    category: 'Developer',
    component: () => (
      <PosterWrapper badgeText="PLATFORM">
        <h1 style={{ fontSize: '72px', fontWeight: 900, textAlign: 'center', marginBottom: '60px' }}>
          CREATE YOUR TOKEN IN <span style={{ color: '#F7931A' }}>1 CLICK</span>
        </h1>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '60px' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)' }}>
            <img src={ethLogo} alt="ETH" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '142px', height: '142px' }}>
            <span style={{ fontSize: '24px', fontWeight: 900, color: '#14F195' }}>SOLANA</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)' }}>
            <img src={bnbLogo} alt="BNB" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
          </div>
        </div>
        
        <div style={{ background: 'rgba(247,147,26,0.1)', border: '2px solid #F7931A', borderRadius: '24px', padding: '30px 60px', textAlign: 'center' }}>
          <span style={{ fontSize: '32px', fontWeight: 800, color: 'white', display: 'block', marginBottom: '10px' }}>ALL CHAINS. ONE DASHBOARD.</span>
          <span style={{ fontSize: '48px', fontWeight: 900, color: '#F7931A' }}>COST: 1 EIX</span>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'dev-22',
    title: 'WE\'RE REPLACING $100 FEES WITH 1 EIX',
    category: 'Developer',
    component: () => (
      <PosterWrapper badgeText="EFFICIENCY">
        <h1 style={{ fontSize: '64px', fontWeight: 900, textAlign: 'center', marginBottom: '60px', textTransform: 'uppercase' }}>
          WE'RE REPLACING $100+ FEES<br />WITH <span style={{ color: '#F7931A' }}>1 EIX</span>
        </h1>
        
        <div style={{ display: 'flex', width: '100%', gap: '40px' }}>
          <div style={{ flex: 1, background: 'rgba(255,0,0,0.05)', border: '1px solid rgba(255,0,0,0.2)', borderRadius: '20px', padding: '40px', position: 'relative', overflow: 'hidden' }}>
            <span style={{ color: 'red', fontSize: '24px', fontWeight: 800, display: 'block', marginBottom: '20px' }}>THE OLD WAY</span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px', color: 'rgba(255,255,255,0.5)', fontSize: '24px', fontWeight: 600 }}>
              <li style={{ textDecoration: 'line-through' }}>Deploy Smart Contract</li>
              <li style={{ textDecoration: 'line-through' }}>Pay $50-$150 Gas Fees</li>
              <li style={{ textDecoration: 'line-through' }}>Complex Verification</li>
              <li style={{ textDecoration: 'line-through' }}>Multiple Dashboards</li>
            </ul>
          </div>
          
          <div style={{ flex: 1, background: 'rgba(247,147,26,0.1)', border: '2px solid #F7931A', borderRadius: '20px', padding: '40px', position: 'relative' }}>
            <span style={{ color: '#F7931A', fontSize: '24px', fontWeight: 800, display: 'block', marginBottom: '20px' }}>THE ETHICX WAY</span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px', color: 'white', fontSize: '28px', fontWeight: 700 }}>
              <li>✓ One-Click Deploy</li>
              <li>✓ Zero Gas Fees (Covered)</li>
              <li>✓ Auto-Verification</li>
              <li>✓ Unified Dashboard</li>
              <li style={{ color: '#F7931A', marginTop: '10px' }}>COST: EXACTLY 1 EIX</li>
            </ul>
          </div>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'dev-23',
    title: 'DEVELOPERS, THIS IS YOUR PLATFORM',
    category: 'Developer',
    component: () => (
      <PosterWrapper badgeText="FOR BUILDERS">
        <h1 style={{ fontSize: '80px', fontWeight: 900, textAlign: 'center', marginBottom: '60px' }}>
          DEVELOPERS,<br />THIS IS <span style={{ color: '#F7931A' }}>YOUR PLATFORM</span>
        </h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', width: '100%', maxWidth: '900px' }}>
          {[
            { title: 'TOKEN CREATION', desc: 'Deploy on ETH, SOL, BNB instantly' },
            { title: 'AI TOOLS', desc: 'Smart contract auditing & gen' },
            { title: 'DEX UTILITY', desc: 'Built-in liquidity solutions' },
            { title: 'LAUNCHPAD', desc: 'Raise capital directly' }
          ].map((feature, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '30px', borderRadius: '16px' }}>
              <span style={{ color: '#F7931A', fontSize: '28px', fontWeight: 800, display: 'block', marginBottom: '10px' }}>{feature.title}</span>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '20px', fontWeight: 600 }}>{feature.desc}</span>
            </div>
          ))}
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'dev-24',
    title: 'ETHEREUM · SOLANA · BNB — ONE PLATFORM',
    category: 'Developer',
    component: () => (
      <PosterWrapper badgeText="MULTI-CHAIN">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', marginBottom: '60px' }}>
            <span style={{ fontSize: '48px', fontWeight: 800 }}>ETHEREUM</span>
            <div style={{ width: '10px', height: '10px', background: '#F7931A', borderRadius: '50%' }} />
            <span style={{ fontSize: '48px', fontWeight: 800 }}>SOLANA</span>
            <div style={{ width: '10px', height: '10px', background: '#F7931A', borderRadius: '50%' }} />
            <span style={{ fontSize: '48px', fontWeight: 800 }}>BNB</span>
          </div>
          
          <h1 style={{ fontSize: '90px', fontWeight: 900, color: '#F7931A', marginBottom: '40px' }}>ONE PLATFORM</h1>
          
          <div style={{ borderTop: '2px solid rgba(255,255,255,0.2)', borderBottom: '2px solid rgba(255,255,255,0.2)', padding: '30px 0', width: '80%' }}>
            <p style={{ fontSize: '32px', fontWeight: 600, textAlign: 'center', margin: 0, letterSpacing: '0.1em' }}>
              DEPLOY ANYWHERE. PAY ONCE. (1 EIX)
            </p>
          </div>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'dev-25',
    title: 'AI-POWERED WEB3 DEVELOPMENT',
    category: 'Developer',
    component: () => (
      <PosterWrapper badgeText="AI INNOVATION">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '200px', height: '200px', marginBottom: '40px' }}>
            <div style={{ position: 'absolute', inset: 0, border: '4px solid #F7931A', borderRadius: '20%', transform: 'rotate(45deg)', opacity: 0.5 }} />
            <div style={{ position: 'absolute', inset: 0, border: '4px solid white', borderRadius: '20%', transform: 'rotate(25deg)', opacity: 0.3 }} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <span style={{ fontSize: '64px', fontWeight: 900 }}>AI</span>
            </div>
          </div>
          
          <h1 style={{ fontSize: '72px', fontWeight: 900, textAlign: 'center', marginBottom: '30px' }}>
            AI-POWERED <span style={{ color: '#F7931A' }}>WEB3</span><br />DEVELOPMENT
          </h1>
          
          <p style={{ fontSize: '28px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textAlign: 'center', maxWidth: '700px', marginBottom: '50px' }}>
            SMARTER TOOLS FOR THE NEXT GENERATION OF FOUNDERS. FROM SMART CONTRACT AUDITING TO AUTOMATED DEPLOYMENT.
          </p>
          
          <div style={{ background: '#F7931A', color: 'black', padding: '15px 40px', borderRadius: '30px', fontSize: '24px', fontWeight: 800 }}>
            INTEGRATED NATIVELY
          </div>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'dev-26',
    title: 'THE TOOL DEVELOPERS HAVE BEEN WAITING FOR',
    category: 'Developer',
    component: () => (
      <PosterWrapper badgeText="TERMINAL">
        <div style={{ width: '100%', background: '#050505', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden', fontFamily: 'monospace' }}>
          <div style={{ background: '#111', padding: '15px 20px', display: 'flex', gap: '10px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#FF5F56' }} />
            <div style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#FFBD2E' }} />
            <div style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#27C93F' }} />
          </div>
          <div style={{ padding: '40px', fontSize: '24px', color: '#00FF00', lineHeight: 1.6 }}>
            <span style={{ color: 'white' }}>$</span> ethicx deploy --network eth --token MyCoin<br />
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>&gt; Initializing deployment...</span><br />
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>&gt; Compiling contracts...</span><br />
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>&gt; Deducting 1 EIX...</span><br />
            <span style={{ color: '#F7931A' }}>&gt; Success! Contract deployed at 0x7a...</span><br />
            <br />
            <span style={{ color: 'white' }}>$</span> <span style={{ animation: 'blink 1s step-end infinite' }}>_</span>
          </div>
        </div>
        
        <h1 style={{ fontSize: '48px', fontWeight: 900, marginTop: '50px', textAlign: 'center', textTransform: 'uppercase' }}>
          THE TOOL DEVELOPERS HAVE BEEN WAITING FOR
        </h1>
      </PosterWrapper>
    )
  },
  {
    id: 'dev-27',
    title: 'BUILD YOUR WEB3 PROJECT TODAY',
    category: 'Developer',
    component: () => (
      <PosterWrapper badgeText="ACTION">
        <h1 style={{ fontSize: '80px', fontWeight: 900, textAlign: 'center', marginBottom: '60px' }}>
          BUILD YOUR WEB3<br />PROJECT <span style={{ color: '#F7931A' }}>TODAY</span>
        </h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '600px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'rgba(255,255,255,0.05)', padding: '20px 30px', borderRadius: '12px' }}>
            <div style={{ color: '#F7931A', fontSize: '32px', fontWeight: 900 }}>1</div>
            <span style={{ fontSize: '28px', fontWeight: 700 }}>ACQUIRE 1 EIX</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'rgba(255,255,255,0.05)', padding: '20px 30px', borderRadius: '12px' }}>
            <div style={{ color: '#F7931A', fontSize: '32px', fontWeight: 900 }}>2</div>
            <span style={{ fontSize: '28px', fontWeight: 700 }}>ACCESS DASHBOARD</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'rgba(255,255,255,0.05)', padding: '20px 30px', borderRadius: '12px' }}>
            <div style={{ color: '#F7931A', fontSize: '32px', fontWeight: 900 }}>3</div>
            <span style={{ fontSize: '28px', fontWeight: 700 }}>DEPLOY CROSS-CHAIN</span>
          </div>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'dev-28',
    title: 'ETHICX LAB PLATFORM FEATURES',
    category: 'Developer',
    component: () => (
      <PosterWrapper badgeText="ECOSYSTEM">
        <h1 style={{ fontSize: '50px', fontWeight: 900, marginBottom: '40px', color: '#F7931A' }}>PLATFORM FEATURES</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', width: '100%' }}>
          {[
            'ONE-CLICK TOKEN CREATION',
            'AI SERVICES & AUDITS',
            'DEX UTILITIES',
            'LAUNCHPAD ACCESS',
            'TRADING PLATFORM',
            'STAKING POOLS'
          ].map((feature, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '30px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '12px', height: '12px', background: '#F7931A', transform: 'rotate(45deg)' }} />
              <span style={{ fontSize: '24px', fontWeight: 800 }}>{feature}</span>
            </div>
          ))}
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'dev-29',
    title: '1 EIX = TOKEN CREATION',
    category: 'Developer',
    component: () => (
      <PosterWrapper badgeText="THE EQUATION">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <img src={eixLogo} alt="EIX" style={{ width: '250px', height: '250px', filter: 'drop-shadow(0 0 60px rgba(247,147,26,0.8))', marginBottom: '40px' }} />
          
          <h1 style={{ fontSize: '100px', fontWeight: 900, lineHeight: 1, textAlign: 'center' }}>
            1 EIX <span style={{ color: 'rgba(255,255,255,0.3)' }}>=</span><br />
            <span style={{ color: '#F7931A' }}>TOKEN CREATION</span>
          </h1>
          
          <p style={{ marginTop: '30px', fontSize: '32px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em' }}>
            ONE COIN. ONE ACTION. INFINITE PROJECTS.
          </p>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'dev-30',
    title: 'THE DEVELOPER-FIRST WEB3 ECOSYSTEM',
    category: 'Developer',
    component: () => (
      <PosterWrapper badgeText="THE CORE">
        <h1 style={{ fontSize: '72px', fontWeight: 900, textAlign: 'center', marginBottom: '40px', lineHeight: 1.1 }}>
          THE <span style={{ color: '#F7931A' }}>DEVELOPER-FIRST</span><br />WEB3 ECOSYSTEM
        </h1>
        
        <div style={{ width: '80%', height: '2px', background: 'linear-gradient(90deg, transparent, #F7931A, transparent)', marginBottom: '40px' }} />
        
        <p style={{ fontSize: '36px', fontWeight: 600, textAlign: 'center', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', lineHeight: 1.4 }}>
          "WE BELIEVE THAT EMPOWERING BUILDERS IS THE FASTEST WAY TO GROW THE ENTIRE WEB3 SPACE. ETHICX IS WHERE BUILDERS COME FIRST."
        </p>
      </PosterWrapper>
    )
  }
];
