import React from 'react';
import { PosterDefinition } from './index';
import { PosterWrapper } from '../components/PosterWrapper';

export const EarnPosters: PosterDefinition[] = [
  {
    id: 'earn-31',
    title: 'EARN UP TO 40% COMMISSION',
    category: 'Earn',
    component: () => (
      <PosterWrapper badgeText="AFFILIATE">
        <h1 style={{ fontSize: '80px', fontWeight: 900, textAlign: 'center', marginBottom: '40px', lineHeight: 1 }}>
          EARN UP TO <span style={{ color: '#F7931A' }}>40%</span><br />COMMISSION
        </h1>
        
        <div style={{ width: '100%', maxWidth: '800px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
          <div style={{ display: 'flex', background: 'rgba(0,0,0,0.5)', padding: '20px 40px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <span style={{ flex: 1, fontSize: '24px', fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>SALES VOLUME</span>
            <span style={{ fontSize: '24px', fontWeight: 700, color: '#F7931A' }}>REWARD</span>
          </div>
          {[
            { vol: '$0 - $499', rev: '10%' },
            { vol: '$500 - $999', rev: '15%' },
            { vol: '$5,000 - $9,999', rev: '25%' },
            { vol: '$50,000+', rev: '40%', highlight: true }
          ].map((row, i) => (
            <div key={i} style={{ display: 'flex', padding: '25px 40px', borderBottom: i !== 3 ? '1px solid rgba(255,255,255,0.05)' : 'none', background: row.highlight ? 'rgba(247,147,26,0.1)' : 'transparent' }}>
              <span style={{ flex: 1, fontSize: '32px', fontWeight: 800 }}>{row.vol}</span>
              <span style={{ fontSize: '32px', fontWeight: 900, color: row.highlight ? '#F7931A' : 'white' }}>{row.rev}</span>
            </div>
          ))}
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'earn-32',
    title: '$50,000 IN SALES = $20,000 COMMISSION',
    category: 'Earn',
    component: () => (
      <PosterWrapper badgeText="MAXIMUM TIER">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ fontSize: '40px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', marginBottom: '20px' }}>
            AT THE 40% MAX TIER:
          </div>
          
          <h1 style={{ fontSize: '100px', fontWeight: 900, lineHeight: 1, marginBottom: '40px' }}>
            $50,000 <span style={{ fontSize: '60px', color: 'rgba(255,255,255,0.3)' }}>IN SALES</span>
          </h1>
          
          <div style={{ fontSize: '60px', color: '#F7931A', marginBottom: '40px' }}>=</div>
          
          <div style={{ background: 'rgba(247,147,26,0.15)', border: '2px solid #F7931A', borderRadius: '30px', padding: '40px 80px', display: 'inline-block' }}>
            <span style={{ fontSize: '32px', fontWeight: 800, color: '#F7931A', display: 'block', marginBottom: '10px' }}>YOUR COMMISSION</span>
            <span style={{ fontSize: '120px', fontWeight: 900, color: 'white', lineHeight: 1 }}>$20,000</span>
          </div>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'earn-33',
    title: 'COMMISSION TIERS',
    category: 'Earn',
    component: () => (
      <PosterWrapper badgeText="FULL SCHEDULE">
        <h1 style={{ fontSize: '64px', fontWeight: 900, marginBottom: '40px' }}>COMMISSION TIERS</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', width: '100%' }}>
          {[
            { v: '$0 - $499', r: '10%' },
            { v: '$500 - $999', r: '15%' },
            { v: '$1,000 - $4,999', r: '20%' },
            { v: '$5,000 - $9,999', r: '25%' },
            { v: '$10,000 - $19,999', r: '30%' },
            { v: '$20,000 - $49,999', r: '35%' },
            { v: '$50,000+', r: '40%' }
          ].map((item, i) => (
            <div key={i} style={{ 
              background: i === 6 ? 'rgba(247,147,26,0.15)' : 'rgba(255,255,255,0.05)', 
              border: i === 6 ? '1px solid #F7931A' : '1px solid rgba(255,255,255,0.1)',
              padding: '20px 30px', 
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gridColumn: i === 6 ? '1 / -1' : 'auto'
            }}>
              <span style={{ fontSize: '24px', fontWeight: 600 }}>{item.v}</span>
              <span style={{ fontSize: '32px', fontWeight: 900, color: i === 6 ? '#F7931A' : 'white' }}>{item.r}</span>
            </div>
          ))}
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'earn-34',
    title: 'YOUR EFFORT = YOUR INCOME',
    category: 'Earn',
    component: () => (
      <PosterWrapper badgeText="MOTIVATION">
        <h1 style={{ fontSize: '80px', fontWeight: 900, textAlign: 'center', marginBottom: '80px' }}>
          YOUR EFFORT <span style={{ color: 'rgba(255,255,255,0.3)' }}>=</span><br />
          <span style={{ color: '#F7931A' }}>YOUR INCOME</span>
        </h1>
        
        <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', width: '100%' }}>
          <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '20px', textAlign: 'center' }}>
            <span style={{ fontSize: '64px', fontWeight: 900, display: 'block', marginBottom: '10px' }}>NO CAP</span>
            <span style={{ fontSize: '24px', fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>ON YOUR EARNINGS</span>
          </div>
          
          <div style={{ flex: 1, background: 'rgba(247,147,26,0.1)', padding: '40px', borderRadius: '20px', textAlign: 'center', border: '1px solid rgba(247,147,26,0.3)' }}>
            <span style={{ fontSize: '64px', fontWeight: 900, color: '#F7931A', display: 'block', marginBottom: '10px' }}>INSTANT</span>
            <span style={{ fontSize: '24px', fontWeight: 600, color: 'white' }}>PAYOUT TRACKING</span>
          </div>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'earn-35',
    title: 'REFER. EARN. REPEAT.',
    category: 'Earn',
    component: () => (
      <PosterWrapper badgeText="CYCLE">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <div style={{ fontSize: '100px', fontWeight: 900, color: 'white', lineHeight: 1.2 }}>REFER.</div>
          <div style={{ fontSize: '100px', fontWeight: 900, color: '#F7931A', lineHeight: 1.2 }}>EARN.</div>
          <div style={{ fontSize: '100px', fontWeight: 900, color: 'rgba(255,255,255,0.5)', lineHeight: 1.2 }}>REPEAT.</div>
          
          <div style={{ marginTop: '60px', padding: '20px 40px', border: '2px dashed rgba(255,255,255,0.2)', borderRadius: '20px' }}>
            <span style={{ fontSize: '32px', fontWeight: 700, letterSpacing: '0.1em' }}>UP TO 40% COMMISSION</span>
          </div>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'earn-36',
    title: '$100 SALE = $10. $1,000 = $150.',
    category: 'Earn',
    component: () => (
      <PosterWrapper badgeText="EXAMPLES">
        <h1 style={{ fontSize: '64px', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>REAL NUMBERS. REAL REWARDS.</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '100%', maxWidth: '800px' }}>
          <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '30px 40px' }}>
            <span style={{ fontSize: '40px', fontWeight: 800, width: '250px' }}>$100 SALE</span>
            <span style={{ fontSize: '40px', color: 'rgba(255,255,255,0.3)', margin: '0 30px' }}>→</span>
            <span style={{ fontSize: '40px', fontWeight: 900, color: '#F7931A' }}>$10</span>
            <span style={{ fontSize: '20px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginLeft: '15px' }}>(10%)</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.08)', borderRadius: '16px', padding: '30px 40px' }}>
            <span style={{ fontSize: '40px', fontWeight: 800, width: '250px' }}>$1,000 SALE</span>
            <span style={{ fontSize: '40px', color: 'rgba(255,255,255,0.3)', margin: '0 30px' }}>→</span>
            <span style={{ fontSize: '40px', fontWeight: 900, color: '#F7931A' }}>$150</span>
            <span style={{ fontSize: '20px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginLeft: '15px' }}>(15%)</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(247,147,26,0.15)', border: '1px solid rgba(247,147,26,0.5)', borderRadius: '16px', padding: '30px 40px' }}>
            <span style={{ fontSize: '40px', fontWeight: 800, width: '250px' }}>$10,000 SALE</span>
            <span style={{ fontSize: '40px', color: 'rgba(255,255,255,0.3)', margin: '0 30px' }}>→</span>
            <span style={{ fontSize: '40px', fontWeight: 900, color: 'white' }}>$3,000</span>
            <span style={{ fontSize: '20px', fontWeight: 600, color: '#F7931A', marginLeft: '15px' }}>(30%)</span>
          </div>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'earn-37',
    title: 'THE MORE YOU SELL, THE MORE YOU EARN',
    category: 'Earn',
    component: () => (
      <PosterWrapper badgeText="ESCALATION">
        <h1 style={{ fontSize: '72px', fontWeight: 900, textAlign: 'center', marginBottom: '60px', lineHeight: 1.1 }}>
          THE MORE YOU SELL,<br /><span style={{ color: '#F7931A' }}>THE MORE YOU EARN</span>
        </h1>
        
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '20px', height: '300px', width: '100%' }}>
          {[10, 15, 20, 25, 30, 35, 40].map((h, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '24px', fontWeight: 800, color: i === 6 ? '#F7931A' : 'white' }}>{h}%</span>
              <div style={{ width: '80px', height: `${h * 5}px`, background: i === 6 ? '#F7931A' : 'rgba(255,255,255,0.1)', borderRadius: '8px 8px 0 0' }} />
            </div>
          ))}
        </div>
        <div style={{ width: '100%', maxWidth: '800px', height: '2px', background: 'rgba(255,255,255,0.2)' }} />
      </PosterWrapper>
    )
  },
  {
    id: 'earn-38',
    title: 'PERFORMANCE = PRIVILEGE',
    category: 'Earn',
    component: () => (
      <PosterWrapper badgeText="TOP TIER">
        <div style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div style={{ fontSize: '80px', color: '#F7931A', marginBottom: '20px' }}>★</div>
          <h1 style={{ fontSize: '80px', fontWeight: 900, marginBottom: '40px' }}>
            PERFORMANCE <span style={{ color: 'rgba(255,255,255,0.3)' }}>=</span><br />PRIVILEGE
          </h1>
          
          <p style={{ fontSize: '32px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '50px' }}>
            TOP CONTRIBUTORS GAIN EXCLUSIVE ACCESS TO HIGHER REWARDS, EARLY FEATURES, AND LEADERSHIP ROLES IN THE ETHICX ECOSYSTEM.
          </p>
          
          <div style={{ display: 'inline-block', border: '2px solid #F7931A', padding: '20px 40px', borderRadius: '12px', fontSize: '28px', fontWeight: 800 }}>
            BECOME A LEADER
          </div>
        </div>
      </PosterWrapper>
    )
  },
  {
    id: 'earn-39',
    title: 'EVERY CONTRIBUTION IS RECORDED',
    category: 'Earn',
    component: () => (
      <PosterWrapper badgeText="TRANSPARENCY">
        <h1 style={{ fontSize: '72px', fontWeight: 900, textAlign: 'center', marginBottom: '60px' }}>
          EVERY CONTRIBUTION IS <span style={{ color: '#F7931A' }}>RECORDED</span>
        </h1>
        
        <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', padding: '40px', borderRadius: '20px', width: '100%', maxWidth: '800px', fontFamily: 'monospace' }}>
          {[
            { action: 'NEW_REFERRAL', amount: '$1,500', commission: '$300 (20%)', status: 'PAID' },
            { action: 'TIER_UPGRADE', amount: '--', commission: 'NOW AT 25%', status: 'ACTIVE' },
            { action: 'NEW_REFERRAL', amount: '$5,200', commission: '$1,300 (25%)', status: 'PAID' }
          ].map((log, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', borderBottom: '1px dashed rgba(255,255,255,0.1)', fontSize: '20px', color: 'rgba(255,255,255,0.7)' }}>
              <span>[{log.action}]</span>
              <span style={{ color: 'white' }}>{log.amount}</span>
              <span style={{ color: '#F7931A' }}>{log.commission}</span>
              <span style={{ color: '#00FF00' }}>{log.status}</span>
            </div>
          ))}
        </div>
        <p style={{ marginTop: '30px', fontSize: '24px', fontWeight: 600, color: 'rgba(255,255,255,0.4)' }}>
          TRANSPARENT METRICS. GUARANTEED PAYOUTS.
        </p>
      </PosterWrapper>
    )
  },
  {
    id: 'earn-40',
    title: 'INVITE 1. GET 1 FREE EIX.',
    category: 'Earn',
    component: () => (
      <PosterWrapper badgeText="REFERRAL PROMO">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', border: '4px dashed #F7931A', borderRadius: '40px', padding: '80px', width: '100%', background: 'rgba(247,147,26,0.05)' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 800, color: 'rgba(255,255,255,0.8)', marginBottom: '20px' }}>LIMITED TIME OFFER</h2>
          
          <h1 style={{ fontSize: '90px', fontWeight: 900, lineHeight: 1, marginBottom: '40px' }}>
            INVITE 1 FRIEND.<br />
            <span style={{ color: '#F7931A' }}>GET 1 FREE EIX.</span>
          </h1>
          
          <p style={{ fontSize: '28px', fontWeight: 600, color: 'white', maxWidth: '600px' }}>
            WHEN THEY MAKE THEIR FIRST PURCHASE DURING PHASE 1 PRESALE.
          </p>
        </div>
      </PosterWrapper>
    )
  }
];
