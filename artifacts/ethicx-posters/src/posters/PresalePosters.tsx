import React from 'react';
import { PosterDefinition } from './index';
import { PosterWrapper } from '../components/PosterWrapper';
import eixLogo from '@assets/1764163440584-removebg-preview_1785157622863.png';
import ethLogo from '@assets/ethereum_logo_icon_147293_1785157622577.webp';
import solLogo from '@assets/bnb-bnb-logo_1785157622763.png'; // Fallback to BNB image for now if SOL isn't provided, actually let's just use text or generic style

export const PresalePosters: PosterDefinition[] = [
  {
    id: 'presale-11',
    title: '$0.50 TODAY. UP TO $10 TARGET.',
    category: 'Presale',
    component: () => (
      <PosterWrapper badgeText="OPPORTUNITY">
        <div style={{ textAlign: 'center', width: '100%' }}>
          <h1 style={{ fontSize: '90px', fontWeight: 900, marginBottom: '20px', lineHeight: 1 }}>
            $0.50 <span style={{ color: 'rgba(255,255,255,0.5)' }}>TODAY.</span><br />
            <span style={{ color: '#F7931A' }}>UP TO $10 TARGET.</span>
          </h1>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', margin: '60px 0' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px 40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ display: 'block', fontSize: '20px', fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>PHASE 1</span>
              <span style={{ fontSize: '50px', fontWeight: 900 }}>$0.50</span>
            </div>
            
            <div style={{ fontSize: '40px', color: '#F7931A' }}>→</div>
            
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px 40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ display: 'block', fontSize: '20px', fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>PHASE 2</span>
              <span style={{ fontSize: '50px', fontWeight: 900 }}>$1.00</span>
            </div>
            
            <div style={{ fontSize: '40px', color: '#F7931A' }}>→</div>
            
            <div style={{ background: 'rgba(247,147,26,0.15)', padding: '40px 50px', borderRadius: '16px', border: '2px solid #F7931A', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-15px', right: '-15px', background: '#F7931A', color: 'black', padding: '5px 15px', borderRadius: '20px', fontWeight: 900, fontSize: '18px' }}>20X POTENTIAL</div>
              <span style={{ display: 'block', fontSize: '20px', fontWeight: 700, color: '#F7931A' }}>LISTING TARGET</span>
              <span style={{ fontSize: '60px', fontWeight: 900, color: 'white' }}>$10.00</span>
            </div>
          </div>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'presale-12',
    title: 'BUY AT $0.50 BEFORE THE WORLD DOES',
    category: 'Presale',
    component: () => (
      <PosterWrapper badgeText="URGENCY">
        <div style={{ position: 'relative', textAlign: 'center', width: '100%' }}>
          <div style={{ display: 'inline-block', background: '#F7931A', color: 'black', padding: '10px 30px', borderRadius: '30px', fontSize: '24px', fontWeight: 900, marginBottom: '40px' }}>
            PHASE 1 OPEN NOW
          </div>
          
          <h1 style={{ fontSize: '80px', fontWeight: 900, lineHeight: 1.1, textTransform: 'uppercase' }}>
            BUY AT <span style={{ color: '#F7931A' }}>$0.50</span><br />
            BEFORE THE<br />WORLD DOES
          </h1>
          
          <div style={{ marginTop: '60px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '20px', display: 'inline-block' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#F7931A', boxShadow: '0 0 10px #F7931A' }} />
                <span style={{ fontSize: '28px', fontWeight: 700 }}>PHASE 1: $0.50 (ACTIVE)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', opacity: 0.4 }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid white' }} />
                <span style={{ fontSize: '28px', fontWeight: 700 }}>PHASE 2: $1.00 (PENDING)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', opacity: 0.4 }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid white' }} />
                <span style={{ fontSize: '28px', fontWeight: 700 }}>LISTING: $10.00 (TARGET)</span>
              </div>
            </div>
          </div>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'presale-13',
    title: 'PRESALE PHASES',
    category: 'Presale',
    component: () => (
      <PosterWrapper badgeText="ROADMAP">
        <h1 style={{ fontSize: '64px', fontWeight: 900, marginBottom: '60px' }}>PRESALE PHASES</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '800px' }}>
          <div style={{ background: 'linear-gradient(90deg, rgba(247,147,26,0.2) 0%, rgba(255,255,255,0.05) 100%)', border: '1px solid #F7931A', borderRadius: '20px', padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ color: '#F7931A', fontSize: '24px', fontWeight: 700, display: 'block', marginBottom: '10px' }}>CURRENT PHASE</span>
              <span style={{ fontSize: '48px', fontWeight: 900 }}>PHASE 1</span>
            </div>
            <div style={{ fontSize: '64px', fontWeight: 900, color: 'white' }}>$0.50</div>
          </div>
          
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '24px', fontWeight: 700, display: 'block', marginBottom: '10px' }}>NEXT PHASE</span>
              <span style={{ fontSize: '48px', fontWeight: 900, color: 'rgba(255,255,255,0.7)' }}>PHASE 2</span>
            </div>
            <div style={{ fontSize: '64px', fontWeight: 900, color: 'rgba(255,255,255,0.7)' }}>$1.00</div>
          </div>
          
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '24px', fontWeight: 700, display: 'block', marginBottom: '10px' }}>EXCHANGE LISTING</span>
              <span style={{ fontSize: '48px', fontWeight: 900, color: 'rgba(255,255,255,0.7)' }}>TARGET</span>
            </div>
            <div style={{ fontSize: '64px', fontWeight: 900, color: '#F7931A' }}>$10.00</div>
          </div>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'presale-14',
    title: 'THE 20X OPPORTUNITY',
    category: 'Presale',
    component: () => (
      <PosterWrapper badgeText="POTENTIAL">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ fontSize: '180px', fontWeight: 900, lineHeight: 0.8, color: '#F7931A', textShadow: '0 0 80px rgba(247,147,26,0.4)', marginBottom: '20px' }}>
            20X
          </div>
          <h2 style={{ fontSize: '60px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '60px' }}>OPPORTUNITY</h2>
          
          <div style={{ display: 'flex', gap: '40px', width: '100%', justifyContent: 'center' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', minWidth: '300px' }}>
              <span style={{ fontSize: '24px', color: 'rgba(255,255,255,0.5)', fontWeight: 700, display: 'block' }}>ENTRY</span>
              <span style={{ fontSize: '64px', fontWeight: 900 }}>$0.50</span>
            </div>
            
            <div style={{ background: 'rgba(247,147,26,0.1)', padding: '40px', borderRadius: '20px', border: '1px solid rgba(247,147,26,0.3)', minWidth: '300px' }}>
              <span style={{ fontSize: '24px', color: '#F7931A', fontWeight: 700, display: 'block' }}>TARGET</span>
              <span style={{ fontSize: '64px', fontWeight: 900, color: 'white' }}>$10.00</span>
            </div>
          </div>
          
          <p style={{ marginTop: '40px', fontSize: '24px', fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>
            BASED ON EXCHANGE LISTING PROJECTIONS
          </p>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'presale-15',
    title: 'EARLY ADOPTERS WIN',
    category: 'Presale',
    component: () => (
      <PosterWrapper badgeText="HISTORY">
        <h1 style={{ fontSize: '72px', fontWeight: 900, marginBottom: '60px', textTransform: 'uppercase', textAlign: 'center' }}>
          EARLY ADOPTERS <span style={{ color: '#F7931A' }}>WIN</span>
        </h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '100%', maxWidth: '800px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px', background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '16px' }}>
            <img src={ethLogo} alt="ETH" style={{ width: '60px', height: '60px' }} />
            <div>
              <span style={{ fontSize: '32px', fontWeight: 800, display: 'block' }}>ETHEREUM ICO</span>
              <span style={{ fontSize: '24px', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>$0.31 (2014)</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px', background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '16px' }}>
            <div style={{ width: '60px', height: '60px', background: '#F3BA2F', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <img src={solLogo} alt="BNB" style={{ width: '40px' }} />
            </div>
            <div>
              <span style={{ fontSize: '32px', fontWeight: 800, display: 'block' }}>BINANCE COIN ICO</span>
              <span style={{ fontSize: '24px', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>$0.15 (2017)</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px', background: 'rgba(247,147,26,0.1)', border: '1px solid #F7931A', padding: '30px', borderRadius: '16px', marginTop: '20px' }}>
            <img src={eixLogo} alt="EIX" style={{ width: '60px', height: '60px' }} />
            <div>
              <span style={{ fontSize: '32px', fontWeight: 800, color: '#F7931A', display: 'block' }}>ETHICX PRESALE</span>
              <span style={{ fontSize: '24px', color: 'white', fontWeight: 600 }}>$0.50 (NOW)</span>
            </div>
          </div>
        </div>
        
        <p style={{ marginTop: '50px', fontSize: '28px', fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>
          HISTORY REWARDS THOSE WHO ENTER EARLY.
        </p>
      </PosterWrapper>
    )
  },
  {
    id: 'presale-16',
    title: 'LIMITED PRESALE. UNLIMITED POTENTIAL.',
    category: 'Presale',
    component: () => (
      <PosterWrapper badgeText="ALLOCATION">
        <h1 style={{ fontSize: '80px', fontWeight: 900, textAlign: 'center', lineHeight: 1, marginBottom: '60px' }}>
          LIMITED PRESALE.<br />
          <span style={{ color: '#F7931A' }}>UNLIMITED POTENTIAL.</span>
        </h1>
        
        <div style={{ position: 'relative', width: '300px', height: '300px', marginBottom: '40px' }}>
          <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="20" />
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F7931A" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="150.72" />
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '64px', fontWeight: 900 }}>40%</span>
            <span style={{ fontSize: '20px', fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>ALLOCATION</span>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.05)', padding: '30px 60px', borderRadius: '16px' }}>
          <span style={{ fontSize: '32px', fontWeight: 700, color: '#F7931A', display: 'block', marginBottom: '10px' }}>ONLY 840,000 EIX</span>
          <span style={{ fontSize: '24px', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>AVAILABLE IN PUBLIC PRESALE</span>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'presale-17',
    title: 'INVEST. HOLD. BUILD.',
    category: 'Presale',
    component: () => (
      <PosterWrapper badgeText="PHILOSOPHY">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', width: '100%', maxWidth: '800px' }}>
          {[
            { step: '01', title: 'INVEST', desc: 'Secure your EIX at the lowest entry price of $0.50 during Phase 1.' },
            { step: '02', title: 'HOLD', desc: 'Benefit from extreme scarcity (2.1M cap) as the ecosystem grows.' },
            { step: '03', title: 'BUILD', desc: 'Use 1 EIX to launch your own tokens and access premium AI tools.' }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '40px', background: 'rgba(255,255,255,0.03)', padding: '40px', borderRadius: '20px', borderLeft: i === 0 ? '4px solid #F7931A' : '4px solid rgba(255,255,255,0.2)' }}>
              <span style={{ fontSize: '64px', fontWeight: 900, color: i === 0 ? '#F7931A' : 'rgba(255,255,255,0.2)', lineHeight: 0.8 }}>{item.step}</span>
              <div>
                <span style={{ fontSize: '40px', fontWeight: 800, display: 'block', marginBottom: '10px', color: i === 0 ? 'white' : 'rgba(255,255,255,0.8)' }}>{item.title}</span>
                <span style={{ fontSize: '24px', fontWeight: 500, color: 'rgba(255,255,255,0.5)' }}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'presale-18',
    title: 'FROM $500 TO $10,000?',
    category: 'Presale',
    component: () => (
      <PosterWrapper badgeText="PROJECTION">
        <h1 style={{ fontSize: '80px', fontWeight: 900, textAlign: 'center', marginBottom: '60px' }}>
          FROM $500 TO <span style={{ color: '#F7931A' }}>$10,000?</span>
        </h1>
        
        <div style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '50px', width: '100%', maxWidth: '800px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '30px', marginBottom: '30px' }}>
            <span style={{ fontSize: '32px', fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>INVESTMENT</span>
            <span style={{ fontSize: '32px', fontWeight: 900 }}>$500</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '30px', marginBottom: '30px' }}>
            <span style={{ fontSize: '32px', fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>EIX RECEIVED (@ $0.50)</span>
            <span style={{ fontSize: '32px', fontWeight: 900 }}>1,000 EIX</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '32px', fontWeight: 700, color: '#F7931A' }}>VALUE AT $10 TARGET</span>
            <span style={{ fontSize: '64px', fontWeight: 900, color: '#F7931A' }}>$10,000</span>
          </div>
        </div>
        
        <p style={{ marginTop: '40px', fontSize: '20px', color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '0.1em' }}>
          *PROJECTIONS BASED ON TARGET LISTING PRICE. DO YOUR OWN RESEARCH.
        </p>
      </PosterWrapper>
    )
  },
  {
    id: 'presale-19',
    title: 'PHASE 2 PRICE: $1.00',
    category: 'Presale',
    component: () => (
      <PosterWrapper badgeText="WARNING">
        <div style={{ textAlign: 'center' }}>
          <div style={{ border: '4px solid #F7931A', borderRadius: '50%', width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px', margin: '0 auto 40px auto' }}>
            <span style={{ fontSize: '60px', fontWeight: 900, color: '#F7931A' }}>!</span>
          </div>
          
          <h1 style={{ fontSize: '90px', fontWeight: 900, lineHeight: 1, textTransform: 'uppercase', marginBottom: '40px' }}>
            PHASE 2 PRICE:<br />
            <span style={{ color: 'white' }}>$1.00</span>
          </h1>
          
          <div style={{ background: '#F7931A', color: 'black', padding: '20px 40px', borderRadius: '12px', display: 'inline-block', fontSize: '32px', fontWeight: 900, marginBottom: '40px' }}>
            ACT BEFORE PHASE 2 BEGINS
          </div>
          
          <p style={{ fontSize: '32px', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>
            CURRENT PHASE 1 PRICE: <strong>$0.50</strong>
          </p>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'presale-20',
    title: 'THE WINDOW IS OPEN',
    category: 'Presale',
    component: () => (
      <PosterWrapper badgeText="LIVE">
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '300px', border: '2px solid rgba(247,147,26,0.3)', borderRadius: '20px', zIndex: 0 }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(0.9)', width: '800px', height: '300px', border: '2px solid rgba(247,147,26,0.5)', borderRadius: '20px', zIndex: 0 }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(0.8)', width: '800px', height: '300px', border: '4px solid #F7931A', borderRadius: '20px', zIndex: 0, boxShadow: '0 0 50px rgba(247,147,26,0.2)' }} />
          
          <h1 style={{ position: 'relative', zIndex: 1, fontSize: '90px', fontWeight: 900, textTransform: 'uppercase', background: '#0a0a0a', padding: '0 40px' }}>
            THE WINDOW<br /><span style={{ color: '#F7931A' }}>IS OPEN</span>
          </h1>
          
          <div style={{ position: 'relative', zIndex: 1, marginTop: '60px', display: 'flex', gap: '30px' }}>
            <div style={{ background: '#111', border: '1px solid rgba(255,255,255,0.2)', padding: '15px 30px', borderRadius: '10px', fontSize: '24px', fontWeight: 700 }}>PRESALE LIVE</div>
            <div style={{ background: '#F7931A', color: 'black', border: '1px solid #F7931A', padding: '15px 30px', borderRadius: '10px', fontSize: '24px', fontWeight: 900 }}>$0.50 ENTRY</div>
          </div>
        </div>
      </PosterWrapper>
    )
  }
];
