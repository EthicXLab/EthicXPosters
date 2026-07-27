import React from 'react';
import { PosterDefinition } from './index';
import { PosterWrapper } from '../components/PosterWrapper';
import btcLogo from '@assets/Bitcoin.svg_1785157622689.webp';
import eixLogo from '@assets/1764163440584-removebg-preview_1785157622863.png';

export const ScarcityPosters: PosterDefinition[] = [
  {
    id: 'scarcity-1',
    title: '10X MORE SCARCE THAN BITCOIN',
    category: 'Scarcity',
    component: () => (
      <PosterWrapper badgeText="SCARCITY">
        <h1 style={{ fontSize: '80px', fontWeight: 900, textAlign: 'center', marginBottom: '60px', lineHeight: 1 }}>
          10X MORE SCARCE<br />THAN <span style={{ color: '#F7931A' }}>BITCOIN</span>
        </h1>
        <div style={{ display: 'flex', gap: '80px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.5 }}>
            <img src={btcLogo} alt="BTC" style={{ width: '120px', height: '120px', marginBottom: '20px' }} />
            <span style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '0.1em' }}>BITCOIN</span>
            <span style={{ fontSize: '48px', fontWeight: 900 }}>21,000,000</span>
          </div>
          <div style={{ fontSize: '64px', fontWeight: 900, color: 'rgba(255,255,255,0.2)' }}>VS</div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={eixLogo} alt="EIX" style={{ width: '150px', height: '150px', marginBottom: '20px', filter: 'drop-shadow(0 0 40px rgba(247,147,26,0.5))' }} />
            <span style={{ fontSize: '28px', fontWeight: 700, color: '#F7931A', letterSpacing: '0.1em' }}>ETHICX (EIX)</span>
            <span style={{ fontSize: '64px', fontWeight: 900, color: '#F7931A' }}>2,100,000</span>
          </div>
        </div>
        <div style={{ marginTop: '60px', padding: '20px 40px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <p style={{ fontSize: '32px', fontWeight: 600, letterSpacing: '0.05em', margin: 0 }}>SAME INSPIRATION. 10 TIMES RARER.</p>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'scarcity-2',
    title: 'BITCOIN HAD 21M. EIX HAS 2.1M.',
    category: 'Scarcity',
    component: () => (
      <PosterWrapper badgeText="SUPPLY">
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '40px' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '60px', borderRadius: '24px', borderLeft: '8px solid rgba(255,255,255,0.2)' }}>
            <span style={{ fontSize: '36px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '10px' }}>BITCOIN CAPPED AT</span>
            <span style={{ fontSize: '100px', fontWeight: 900, lineHeight: 1 }}>21,000,000</span>
          </div>
          <div style={{ background: 'rgba(247,147,26,0.1)', padding: '60px', borderRadius: '24px', borderLeft: '8px solid #F7931A', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', right: '-40px', top: '-40px', opacity: 0.1, transform: 'scale(1.5)' }}>
               <img src={eixLogo} alt="" style={{ width: '300px' }} />
            </div>
            <span style={{ fontSize: '36px', fontWeight: 600, color: '#F7931A', display: 'block', marginBottom: '10px', position: 'relative', zIndex: 1 }}>ETHICX CAPPED AT</span>
            <span style={{ fontSize: '120px', fontWeight: 900, lineHeight: 1, color: '#F7931A', position: 'relative', zIndex: 1 }}>2,100,000</span>
          </div>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'scarcity-3',
    title: 'THE SCARCEST TOKEN IN WEB3',
    category: 'Scarcity',
    component: () => (
      <PosterWrapper badgeText="THE DATA">
        <h1 style={{ fontSize: '72px', fontWeight: 900, textAlign: 'center', marginBottom: '80px', textTransform: 'uppercase' }}>THE SCARCEST TOKEN<br />IN WEB3</h1>
        
        <div style={{ width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '32px', fontWeight: 700 }}>BITCOIN (BTC)</span>
              <span style={{ fontSize: '32px', fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>21M</span>
            </div>
            <div style={{ width: '100%', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '100%', background: 'rgba(255,255,255,0.3)' }} />
            </div>
          </div>
          
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '32px', fontWeight: 700, color: '#F7931A' }}>ETHICX (EIX)</span>
              <span style={{ fontSize: '32px', fontWeight: 900, color: '#F7931A' }}>2.1M</span>
            </div>
            <div style={{ width: '100%', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', overflow: 'hidden' }}>
              <div style={{ width: '10%', height: '100%', background: '#F7931A', boxShadow: '0 0 20px #F7931A' }} />
            </div>
            
            <div style={{ position: 'absolute', top: '100px', left: '5%', transform: 'translateX(-50%)' }}>
               <div style={{ borderLeft: '2px dashed #F7931A', height: '60px', marginLeft: '50%', marginBottom: '10px' }} />
               <div style={{ background: '#F7931A', color: 'black', padding: '10px 20px', borderRadius: '8px', fontSize: '24px', fontWeight: 900 }}>
                 10X MORE RARE
               </div>
            </div>
          </div>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'scarcity-4',
    title: 'WHEN SUPPLY IS LIMITED, VALUE IS UNLIMITED',
    category: 'Scarcity',
    component: () => (
      <PosterWrapper badgeText="PHILOSOPHY">
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(247,147,26,0.15) 0%, transparent 70%)', zIndex: 0 }} />
        
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <img src={eixLogo} alt="EIX" style={{ width: '200px', height: '200px', marginBottom: '40px', filter: 'drop-shadow(0 0 60px rgba(247,147,26,0.6))' }} />
          <h1 style={{ fontSize: '90px', fontWeight: 900, lineHeight: 0.9, textTransform: 'uppercase', marginBottom: '30px' }}>
            WHEN SUPPLY IS <span style={{ color: '#F7931A' }}>LIMITED</span>,<br />VALUE IS <span style={{ color: '#F7931A' }}>UNLIMITED</span>
          </h1>
          <div style={{ height: '4px', width: '100px', background: '#F7931A', marginBottom: '30px' }} />
          <p style={{ fontSize: '32px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}>
            MAXIMUM SUPPLY: 2,100,000 EIX
          </p>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'scarcity-5',
    title: 'RARER THAN BITCOIN. RICHER IN UTILITY.',
    category: 'Scarcity',
    component: () => (
      <PosterWrapper badgeText="THE VISION">
        <h1 style={{ fontSize: '72px', fontWeight: 900, textAlign: 'center', marginBottom: '60px' }}>
          RARER THAN <span style={{ color: 'rgba(255,255,255,0.5)' }}>BITCOIN</span>.<br />
          RICHER IN <span style={{ color: '#F7931A' }}>UTILITY</span>.
        </h1>
        
        <div style={{ display: 'flex', width: '100%', gap: '40px' }}>
          <div style={{ flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <span style={{ fontSize: '24px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.2em', marginBottom: '20px' }}>SCARCITY</span>
            <span style={{ fontSize: '64px', fontWeight: 900, color: 'white', lineHeight: 1 }}>2.1M</span>
            <span style={{ fontSize: '24px', fontWeight: 600, color: '#F7931A', marginTop: '10px' }}>TOTAL SUPPLY</span>
          </div>
          
          <div style={{ flex: 1, background: 'rgba(247,147,26,0.05)', border: '1px solid rgba(247,147,26,0.3)', borderRadius: '20px', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '24px', fontWeight: 700, color: '#F7931A', letterSpacing: '0.2em', marginBottom: '20px', textAlign: 'center' }}>UTILITY</span>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {['Token Creation (1 EIX)', 'AI Developer Tools', 'DEX & Trading', 'Launchpad Access'].map((item, i) => (
                <li key={i} style={{ fontSize: '24px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '8px', height: '8px', background: '#F7931A', borderRadius: '50%' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'scarcity-6',
    title: 'ONLY 2,100,000 EIX WILL EVER EXIST',
    category: 'Scarcity',
    component: () => (
      <PosterWrapper badgeText="ABSOLUTE LIMIT">
        <div style={{ border: '4px solid #F7931A', padding: '80px', borderRadius: '30px', position: 'relative', textAlign: 'center', background: 'rgba(0,0,0,0.5)' }}>
          <div style={{ position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)', background: '#0a0a0a', padding: '0 40px' }}>
            <img src={eixLogo} alt="EIX" style={{ width: '80px', height: '80px' }} />
          </div>
          
          <h2 style={{ fontSize: '40px', fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', marginBottom: '20px' }}>HARD CAP PROTOCOL</h2>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px' }}>
            {['0','2',',','1','0','0',',','0','0','0'].map((char, i) => (
              <div key={i} style={{ 
                background: char === ',' ? 'transparent' : '#111', 
                color: char === ',' ? 'rgba(255,255,255,0.3)' : 'white',
                border: char === ',' ? 'none' : '2px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                width: char === ',' ? '30px' : '60px',
                height: char === ',' ? 'auto' : '90px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: char === ',' ? '60px' : '72px',
                fontWeight: 900,
                boxShadow: char === ',' ? 'none' : 'inset 0 10px 20px rgba(0,0,0,0.5)'
              }}>
                {char}
              </div>
            ))}
          </div>
          
          <h1 style={{ fontSize: '48px', fontWeight: 900, textTransform: 'uppercase', color: '#F7931A' }}>
            WILL EVER EXIST. NO MINTING. NO INFLATION.
          </h1>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'scarcity-7',
    title: 'BITCOIN TOOK YEARS. EIX STARTS NOW.',
    category: 'Scarcity',
    component: () => (
      <PosterWrapper badgeText="TIMELINE">
        <h1 style={{ fontSize: '80px', fontWeight: 900, textAlign: 'center', marginBottom: '80px', lineHeight: 1 }}>
          BITCOIN TOOK YEARS.<br /><span style={{ color: '#F7931A' }}>EIX STARTS NOW.</span>
        </h1>
        
        <div style={{ position: 'relative', width: '100%', height: '200px', display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '4px', background: 'rgba(255,255,255,0.2)', transform: 'translateY(-50%)' }} />
          
          <div style={{ position: 'absolute', left: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-50%)' }}>
            <div style={{ width: '30px', height: '30px', background: 'white', borderRadius: '50%', border: '6px solid #111', zIndex: 2 }} />
            <span style={{ fontSize: '32px', fontWeight: 800, marginTop: '20px' }}>2009</span>
            <span style={{ fontSize: '24px', fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>BTC 21M</span>
          </div>
          
          <div style={{ position: 'absolute', right: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'translateY(-50%)' }}>
            <div style={{ width: '40px', height: '40px', background: '#F7931A', borderRadius: '50%', border: '6px solid #111', zIndex: 2, boxShadow: '0 0 20px #F7931A' }} />
            <span style={{ fontSize: '40px', fontWeight: 900, marginTop: '20px', color: '#F7931A' }}>2025</span>
            <span style={{ fontSize: '28px', fontWeight: 700, color: 'white' }}>EIX 2.1M</span>
          </div>
        </div>
        
        <p style={{ fontSize: '32px', fontWeight: 600, textAlign: 'center', marginTop: '40px', color: 'rgba(255,255,255,0.8)' }}>
          THE NEXT GENERATION OF DIGITAL SCARCITY.
        </p>
      </PosterWrapper>
    )
  },
  {
    id: 'scarcity-8',
    title: 'SAME DNA. 10X RARER.',
    category: 'Scarcity',
    component: () => (
      <PosterWrapper badgeText="DNA">
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '60px', marginBottom: '60px' }}>
            <img src={btcLogo} alt="BTC" style={{ width: '150px', height: '150px', opacity: 0.3 }} />
            <div style={{ width: '100px', height: '4px', background: 'linear-gradient(to right, rgba(255,255,255,0.2), #F7931A)' }} />
            <img src={eixLogo} alt="EIX" style={{ width: '200px', height: '200px', filter: 'drop-shadow(0 0 50px rgba(247,147,26,0.6))' }} />
          </div>
          
          <h1 style={{ fontSize: '90px', fontWeight: 900, textAlign: 'center', lineHeight: 1 }}>
            SAME DNA.<br />
            <span style={{ color: '#F7931A' }}>10X RARER.</span>
          </h1>
          
          <div style={{ marginTop: '50px', display: 'flex', gap: '40px' }}>
            <div style={{ padding: '20px 40px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
              <span style={{ fontSize: '20px', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '5px' }}>STORE OF VALUE</span>
              <span style={{ fontSize: '32px', fontWeight: 700 }}>FIXED SUPPLY</span>
            </div>
            <div style={{ padding: '20px 40px', background: 'rgba(247,147,26,0.1)', borderRadius: '16px', border: '1px solid rgba(247,147,26,0.3)', textAlign: 'center' }}>
              <span style={{ fontSize: '20px', color: '#F7931A', display: 'block', marginBottom: '5px' }}>NEXT GEN UTILITY</span>
              <span style={{ fontSize: '32px', fontWeight: 700, color: 'white' }}>WEB3 INFRASTRUCTURE</span>
            </div>
          </div>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'scarcity-9',
    title: 'THE MATH OF SCARCITY',
    category: 'Scarcity',
    component: () => (
      <PosterWrapper badgeText="THE MATH">
        <h1 style={{ fontSize: '64px', fontWeight: 900, textAlign: 'center', marginBottom: '80px', color: 'rgba(255,255,255,0.8)' }}>THE MATH OF SCARCITY</h1>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', fontSize: '80px', fontWeight: 900, width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>21,000,000</span>
            <span style={{ fontSize: '24px', fontWeight: 700, color: 'rgba(255,255,255,0.4)', marginTop: '10px' }}>BITCOIN SUPPLY</span>
          </div>
          
          <div style={{ color: '#F7931A' }}>÷</div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ color: 'white' }}>10</span>
            <span style={{ fontSize: '24px', fontWeight: 700, color: 'transparent', marginTop: '10px' }}>-</span>
          </div>
          
          <div style={{ color: '#F7931A' }}>=</div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(247,147,26,0.1)', padding: '20px 40px', borderRadius: '24px', border: '2px solid rgba(247,147,26,0.3)' }}>
            <span style={{ color: '#F7931A' }}>2,100,000</span>
            <span style={{ fontSize: '24px', fontWeight: 700, color: 'white', marginTop: '10px' }}>ETHICX SUPPLY</span>
          </div>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'scarcity-10',
    title: 'SCARCE SUPPLY. INFINITE ECOSYSTEM.',
    category: 'Scarcity',
    component: () => (
      <PosterWrapper badgeText="ECOSYSTEM">
        <h1 style={{ fontSize: '64px', fontWeight: 900, textAlign: 'center', marginBottom: '60px' }}>
          SCARCE SUPPLY.<br /><span style={{ color: '#F7931A' }}>INFINITE ECOSYSTEM.</span>
        </h1>
        
        <div style={{ position: 'relative', width: '400px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', inset: -40, border: '1px dashed rgba(255,255,255,0.2)', borderRadius: '50%', animation: 'spin 20s linear infinite' }} />
          <div style={{ position: 'absolute', inset: -80, border: '1px dashed rgba(247,147,26,0.2)', borderRadius: '50%' }} />
          
          <img src={eixLogo} alt="EIX" style={{ width: '160px', height: '160px', position: 'relative', zIndex: 10, filter: 'drop-shadow(0 0 30px rgba(247,147,26,0.5))' }} />
          
          {[
            { label: 'TOKEN CREATION', angle: 0 },
            { label: 'AI TOOLS', angle: 45 },
            { label: 'DEX', angle: 90 },
            { label: 'LAUNCHPAD', angle: 135 },
            { label: 'TRADING', angle: 180 },
            { label: 'STAKING', angle: 225 },
            { label: 'GOVERNANCE', angle: 270 },
            { label: 'COMMUNITY', angle: 315 },
          ].map((item, i) => {
            const rad = (item.angle * Math.PI) / 180;
            const radius = 240;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            return (
              <div key={i} style={{ 
                position: 'absolute', 
                left: `calc(50% + ${x}px)`, 
                top: `calc(50% + ${y}px)`, 
                transform: 'translate(-50%, -50%)',
                background: 'rgba(10,10,10,0.8)',
                border: '1px solid rgba(247,147,26,0.4)',
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                color: item.angle % 90 === 0 ? '#F7931A' : 'white',
                boxShadow: '0 4px 10px rgba(0,0,0,0.5)'
              }}>
                {item.label}
              </div>
            )
          })}
        </div>
      </PosterWrapper>
    )
  }
];
