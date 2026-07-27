import React from 'react';
import ethicxLogo from '@assets/1764163440584-removebg-preview_1785157622863.png';

interface PosterWrapperProps {
  children: React.ReactNode;
  badgeText: string;
}

export function PosterWrapper({ children, badgeText }: PosterWrapperProps) {
  return (
    <div
      style={{
        width: '1080px',
        height: '1080px',
        position: 'relative',
        background: 'radial-gradient(ellipse at 50% 60%, #3d1a00 0%, #1a0a00 40%, #0a0a0a 80%)',
        color: '#FFFFFF',
        fontFamily: "'Barlow Condensed', sans-serif",
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Grid Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundSize: '40px 40px',
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', padding: '60px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img src={ethicxLogo} alt="EthicX Logo" style={{ width: '80px', height: '80px', objectFit: 'contain' }} crossOrigin="anonymous" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '42px', fontWeight: 800, lineHeight: 1, letterSpacing: '0.05em', textTransform: 'uppercase' }}>ETHICX LAB</span>
              <span style={{ fontSize: '24px', fontWeight: 600, color: '#F7931A', letterSpacing: '0.1em', textTransform: 'uppercase' }}>WEB3 INNOVATION</span>
            </div>
          </div>
          <div style={{ 
            padding: '12px 30px', 
            border: '2px solid #F7931A', 
            borderRadius: '100px', 
            fontSize: '28px', 
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            background: 'rgba(247, 147, 26, 0.1)',
            color: '#FFFFFF'
          }}>
            {badgeText}
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          {children}
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 'auto', borderTop: '2px solid rgba(255,255,255,0.1)', paddingTop: '30px' }}>
          <span style={{ fontSize: '28px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>ETHICX LAB COMMUNITY</span>
          <span style={{ fontSize: '28px', fontWeight: 600, color: '#F7931A', letterSpacing: '0.05em', textTransform: 'uppercase' }}>@EthicXLab</span>
        </div>
      </div>
    </div>
  );
}
