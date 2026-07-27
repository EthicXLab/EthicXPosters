import React from 'react';
import { PosterDefinition } from './index';
import { PosterWrapper } from '../components/PosterWrapper';
import eixLogo from '@assets/1764163440584-removebg-preview_1785157622863.png';
import btcLogo from '@assets/Bitcoin.svg_1785157622689.webp';
import ethLogo from '@assets/ethereum_logo_icon_147293_1785157622577.webp';

export const CommunityPosters: PosterDefinition[] = [
  {
    id: 'comm-41',
    title: 'SOCIAL MEDIA & MARKETING REWARDS',
    category: 'Community',
    component: () => (
      <PosterWrapper badgeText="CAMPAIGN">
        <h1 style={{ fontSize: '64px', fontWeight: 900, textAlign: 'center', marginBottom: '40px' }}>
          MARKETING CAMPAIGN <span style={{ color: '#F7931A' }}>PRIZE POOL</span>
        </h1>
        
        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', marginBottom: '60px' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '220px' }}>
            <img src={btcLogo} alt="BTC" style={{ width: '80px', height: '80px', marginBottom: '20px' }} />
            <span style={{ fontSize: '48px', fontWeight: 900 }}>1</span>
            <span style={{ fontSize: '24px', fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>BTC</span>
          </div>
          
          <div style={{ fontSize: '60px', color: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center' }}>+</div>
          
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '220px' }}>
            <img src={ethLogo} alt="ETH" style={{ width: '80px', height: '80px', marginBottom: '20px' }} />
            <span style={{ fontSize: '48px', fontWeight: 900 }}>20</span>
            <span style={{ fontSize: '24px', fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>ETH</span>
          </div>
          
          <div style={{ fontSize: '60px', color: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center' }}>+</div>
          
          <div style={{ background: 'rgba(247,147,26,0.1)', padding: '40px', borderRadius: '20px', border: '1px solid #F7931A', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '250px' }}>
            <img src={eixLogo} alt="EIX" style={{ width: '80px', height: '80px', marginBottom: '20px' }} />
            <span style={{ fontSize: '48px', fontWeight: 900, color: '#F7931A' }}>100K</span>
            <span style={{ fontSize: '24px', fontWeight: 700, color: '#F7931A' }}>EIX</span>
          </div>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'comm-42',
    title: 'TOP CONTRIBUTOR REWARD RANKING',
    category: 'Community',
    component: () => (
      <PosterWrapper badgeText="LEADERBOARD">
        <h1 style={{ fontSize: '72px', fontWeight: 900, textAlign: 'center', marginBottom: '40px' }}>TOP CONTRIBUTOR REWARDS</h1>
        
        <div style={{ width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(247,147,26,0.2)', border: '2px solid #F7931A', padding: '25px 40px', borderRadius: '16px' }}>
            <span style={{ fontSize: '40px', fontWeight: 900, color: '#F7931A', width: '100px' }}>1ST</span>
            <span style={{ fontSize: '32px', fontWeight: 700, flex: 1 }}>GRAND PRIZE</span>
            <span style={{ fontSize: '40px', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '15px' }}><img src={btcLogo} alt="BTC" style={{width:'40px'}}/> 1 BTC</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.1)', padding: '25px 40px', borderRadius: '16px' }}>
            <span style={{ fontSize: '32px', fontWeight: 800, color: 'rgba(255,255,255,0.7)', width: '100px' }}>2ND</span>
            <span style={{ fontSize: '28px', fontWeight: 600, flex: 1 }}>RUNNER UP</span>
            <span style={{ fontSize: '32px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '15px' }}><img src={ethLogo} alt="ETH" style={{width:'32px'}}/> 5 ETH</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '25px 40px', borderRadius: '16px' }}>
            <span style={{ fontSize: '32px', fontWeight: 800, color: 'rgba(255,255,255,0.5)', width: '100px' }}>3RD</span>
            <span style={{ fontSize: '28px', fontWeight: 600, flex: 1 }}>BRONZE TIER</span>
            <span style={{ fontSize: '32px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '15px' }}><img src={ethLogo} alt="ETH" style={{width:'32px'}}/> 4 ETH</span>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '24px', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
            + REWARDS DISTRIBUTED DOWN TO 50TH PLACE
          </div>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'comm-43',
    title: '100,000 EIX COMMUNITY AIRDROP',
    category: 'Community',
    component: () => (
      <PosterWrapper badgeText="AIRDROP">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ position: 'relative', marginBottom: '40px' }}>
            <div style={{ position: 'absolute', inset: -50, background: 'radial-gradient(circle, rgba(247,147,26,0.4) 0%, transparent 70%)', zIndex: 0 }} />
            <img src={eixLogo} alt="EIX" style={{ width: '200px', height: '200px', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 0 20px #F7931A)' }} />
          </div>
          
          <h1 style={{ fontSize: '100px', fontWeight: 900, lineHeight: 1, textAlign: 'center', marginBottom: '20px' }}>
            100,000 EIX
          </h1>
          <h2 style={{ fontSize: '50px', fontWeight: 800, color: '#F7931A', letterSpacing: '0.1em', marginBottom: '50px' }}>COMMUNITY AIRDROP</h2>
          
          <div style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '20px 40px', borderRadius: '30px', fontSize: '28px', fontWeight: 700 }}>
            JOIN THE COMMUNITY TO QUALIFY
          </div>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'comm-44',
    title: 'JOIN THE MOVEMENT',
    category: 'Community',
    component: () => (
      <PosterWrapper badgeText="SOCIAL">
        <h1 style={{ fontSize: '90px', fontWeight: 900, textAlign: 'center', marginBottom: '60px' }}>
          JOIN THE <span style={{ color: '#F7931A' }}>MOVEMENT</span>
        </h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '100%', maxWidth: '600px' }}>
          {['TELEGRAM', 'TWITTER (X)', 'DISCORD'].map((social, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.05)', padding: '30px 40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ fontSize: '32px', fontWeight: 800 }}>{social}</span>
              <span style={{ fontSize: '24px', color: '#F7931A', fontWeight: 700 }}>@EthicXLab</span>
            </div>
          ))}
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'comm-45',
    title: 'NEXT GENERATION OF WEB3 INNOVATION',
    category: 'Vision',
    component: () => (
      <PosterWrapper badgeText="EVOLUTION">
        <h1 style={{ fontSize: '64px', fontWeight: 900, textAlign: 'center', marginBottom: '80px', color: 'white' }}>THE NEXT GENERATION</h1>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={btcLogo} alt="BTC" style={{ width: '100px', height: '100px', opacity: 0.5 }} />
            <span style={{ fontSize: '24px', fontWeight: 700, color: 'rgba(255,255,255,0.4)', marginTop: '20px' }}>CURRENCY</span>
          </div>
          
          <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '40px' }}>→</div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={ethLogo} alt="ETH" style={{ width: '100px', height: '100px', opacity: 0.7 }} />
            <span style={{ fontSize: '24px', fontWeight: 700, color: 'rgba(255,255,255,0.7)', marginTop: '20px' }}>CONTRACTS</span>
          </div>
          
          <div style={{ color: '#F7931A', fontSize: '40px' }}>→</div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(247,147,26,0.1)', padding: '40px', borderRadius: '24px', border: '2px solid rgba(247,147,26,0.3)' }}>
            <img src={eixLogo} alt="EIX" style={{ width: '120px', height: '120px' }} />
            <span style={{ fontSize: '32px', fontWeight: 900, color: '#F7931A', marginTop: '20px' }}>ECOSYSTEM</span>
          </div>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'comm-46',
    title: 'ONE TOKEN. INFINITE UTILITY.',
    category: 'Vision',
    component: () => (
      <PosterWrapper badgeText="UTILITY">
        <h1 style={{ fontSize: '72px', fontWeight: 900, textAlign: 'center', marginBottom: '60px' }}>
          ONE TOKEN. <span style={{ color: '#F7931A' }}>INFINITE UTILITY.</span>
        </h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', width: '100%', maxWidth: '900px' }}>
          {['TOKEN CREATION', 'AI SMART AUDITS', 'DEX TRADING', 'LAUNCHPAD', 'STAKING YIELD', 'GOVERNANCE'].map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '40px 20px', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ width: '40px', height: '4px', background: '#F7931A', margin: '0 auto 20px auto' }} />
              <span style={{ fontSize: '24px', fontWeight: 800 }}>{item}</span>
            </div>
          ))}
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'comm-47',
    title: 'THE FUTURE OF WEB3 IS ETHICS',
    category: 'Vision',
    component: () => (
      <PosterWrapper badgeText="MANIFESTO">
        <div style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h1 style={{ fontSize: '90px', fontWeight: 900, lineHeight: 1, marginBottom: '40px' }}>
            THE FUTURE OF WEB3<br />IS <span style={{ color: '#F7931A' }}>ETHICS</span>
          </h1>
          
          <p style={{ fontSize: '32px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
            "WE ARE BUILDING A FOUNDATION WHERE SCARCITY MEETS REAL UTILITY. NO ENDLESS MINTING. NO HIDDEN FEES. JUST POWERFUL TOOLS FOR THE NEXT GENERATION OF CREATORS."
          </p>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'comm-48',
    title: 'QUARTERLY TRANSPARENCY REPORTS',
    category: 'Vision',
    component: () => (
      <PosterWrapper badgeText="TRUST">
        <h1 style={{ fontSize: '72px', fontWeight: 900, textAlign: 'center', marginBottom: '60px' }}>
          RADICAL <span style={{ color: '#F7931A' }}>TRANSPARENCY</span>
        </h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '800px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px', background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '16px' }}>
            <span style={{ fontSize: '40px', color: '#F7931A' }}>✓</span>
            <span style={{ fontSize: '32px', fontWeight: 700 }}>QUARTERLY REVENUE REPORTS</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px', background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '16px' }}>
            <span style={{ fontSize: '40px', color: '#F7931A' }}>✓</span>
            <span style={{ fontSize: '32px', fontWeight: 700 }}>DEVELOPMENT UPDATES</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px', background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '16px' }}>
            <span style={{ fontSize: '40px', color: '#F7931A' }}>✓</span>
            <span style={{ fontSize: '32px', fontWeight: 700 }}>VERIFIED BUYBACK PROGRAMS</span>
          </div>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'comm-49',
    title: 'EVERY NEW PRODUCT INCREASES EIX UTILITY',
    category: 'Vision',
    component: () => (
      <PosterWrapper badgeText="GROWTH">
        <h1 style={{ fontSize: '64px', fontWeight: 900, textAlign: 'center', marginBottom: '80px', lineHeight: 1.1 }}>
          EVERY NEW PRODUCT<br />INCREASES <span style={{ color: '#F7931A' }}>EIX UTILITY</span>
        </h1>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0 40px' }}>
          <div style={{ fontSize: '24px', fontWeight: 800, color: 'rgba(255,255,255,0.5)' }}>FIXED SUPPLY<br />2.1M EIX</div>
          <div style={{ height: '2px', flex: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), #F7931A)', margin: '0 30px' }} />
          <div style={{ textAlign: 'right', fontSize: '24px', fontWeight: 800, color: '#F7931A' }}>EXPANDING DEMAND<br />NEW PLATFORMS</div>
        </div>
        
        <div style={{ display: 'flex', gap: '15px', marginTop: '40px', justifyContent: 'center' }}>
          {['DEX', 'AI', 'LAUNCH', 'TOOLS'].map((tag, i) => (
            <div key={i} style={{ background: '#111', border: '1px solid rgba(247,147,26,0.3)', padding: '10px 20px', borderRadius: '8px', fontWeight: 700 }}>{tag}</div>
          ))}
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'comm-50',
    title: 'BUILD THE WORLD\'S SIMPLEST WEB3 ECOSYSTEM',
    category: 'Vision',
    component: () => (
      <PosterWrapper badgeText="MISSION">
        <div style={{ textAlign: 'center', width: '100%' }}>
          <img src={eixLogo} alt="EIX" style={{ width: '150px', height: '150px', marginBottom: '40px', filter: 'drop-shadow(0 0 40px rgba(247,147,26,0.4))' }} />
          
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#F7931A', letterSpacing: '0.2em', marginBottom: '20px' }}>OUR MISSION</h2>
          
          <h1 style={{ fontSize: '64px', fontWeight: 900, lineHeight: 1.2, textTransform: 'uppercase' }}>
            TO BUILD THE WORLD'S SIMPLEST<br />AND MOST POWERFUL<br />WEB3 ECOSYSTEM.
          </h1>
        </div>
      </PosterWrapper>
    )
  }
];
