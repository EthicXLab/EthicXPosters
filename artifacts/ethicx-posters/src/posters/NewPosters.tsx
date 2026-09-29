import React from 'react';
import type { PosterDefinition, PosterCategory } from './index';
import { PosterWrapper } from '../components/PosterWrapper';
import eixLogo from '@assets/1764163440584-removebg-preview_1785157622863.png';

type PosterLayout = 'hero' | 'split' | 'flow' | 'metrics' | 'grid';

interface PosterSpec {
  id: string;
  title: string;
  category: PosterCategory;
  kicker: string;
  headline: string[];
  body: string;
  layout: PosterLayout;
  items?: { label: string; value?: string; detail?: string }[];
  steps?: string[];
  metric?: string;
  metricLabel?: string;
}

const orange = '#F7931A';
const muted = 'rgba(255,255,255,0.62)';
const panel = 'rgba(255,255,255,0.045)';
const border = 'rgba(247,147,26,0.36)';

function Heading({ spec }: { spec: PosterSpec }) {
  return (
    <div style={{ width: '100%', textAlign: 'center', marginBottom: '42px' }}>
      <div style={{ color: orange, fontSize: '24px', fontWeight: 800, letterSpacing: '0.16em', marginBottom: '22px' }}>
        {spec.kicker}
      </div>
      <h1 style={{ margin: 0, fontSize: '76px', lineHeight: 0.96, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
        {spec.headline.map((line, index) => (
          <React.Fragment key={line}>
            {index > 0 && <br />}
            <span style={{ color: index === spec.headline.length - 1 ? orange : '#fff' }}>{line}</span>
          </React.Fragment>
        ))}
      </h1>
      <p style={{ maxWidth: '760px', margin: '24px auto 0', color: muted, fontSize: '28px', lineHeight: 1.25, fontWeight: 500 }}>
        {spec.body}
      </p>
    </div>
  );
}

function Panel({ item, accent = false }: { item: NonNullable<PosterSpec['items']>[number]; accent?: boolean }) {
  return (
    <div style={{
      flex: 1,
      minHeight: '136px',
      padding: '26px 28px',
      borderRadius: '16px',
      border: `1px solid ${accent ? border : 'rgba(255,255,255,0.12)'}`,
      background: accent ? 'rgba(247,147,26,0.09)' : panel,
      boxShadow: accent ? '0 0 28px rgba(247,147,26,0.08)' : 'none',
    }}>
      <div style={{ color: accent ? orange : 'rgba(255,255,255,0.52)', fontSize: '21px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
        {item.label}
      </div>
      {item.value && <div style={{ color: accent ? orange : '#fff', fontSize: '42px', lineHeight: 1, fontWeight: 900, marginBottom: '9px' }}>{item.value}</div>}
      {item.detail && <div style={{ color: muted, fontSize: '23px', lineHeight: 1.15, fontWeight: 600 }}>{item.detail}</div>}
    </div>
  );
}

function NewPoster({ spec }: { spec: PosterSpec }) {
  const items = spec.items ?? [];

  return (
    <PosterWrapper badgeText={spec.category.toUpperCase()}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {spec.layout === 'hero' && (
          <>
            <img src={eixLogo} alt="EIX" crossOrigin="anonymous" style={{ width: '190px', height: '190px', objectFit: 'contain', marginBottom: '32px', filter: 'drop-shadow(0 0 46px rgba(247,147,26,0.62))' }} />
            <Heading spec={spec} />
            <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
              {items.slice(0, 4).map((item, index) => <Panel key={item.label} item={item} accent={index === 0} />)}
            </div>
          </>
        )}

        {spec.layout === 'split' && (
          <>
            <Heading spec={spec} />
            <div style={{ display: 'flex', gap: '24px', width: '100%', alignItems: 'stretch' }}>
              {items.slice(0, 4).map((item, index) => <Panel key={item.label} item={item} accent={index === 1 || index === 3} />)}
            </div>
          </>
        )}

        {spec.layout === 'flow' && (
          <>
            <Heading spec={spec} />
            <div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'center', width: '100%', gap: '10px' }}>
              {(spec.steps ?? []).map((step, index) => (
                <React.Fragment key={step}>
                  <div style={{ flex: 1, minHeight: '190px', border: `1px solid ${index === 0 ? orange : 'rgba(255,255,255,0.16)'}`, borderRadius: '16px', background: index === 0 ? 'rgba(247,147,26,0.1)' : panel, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '18px', textAlign: 'center' }}>
                    <div style={{ color: orange, fontSize: '30px', fontWeight: 900, marginBottom: '12px' }}>{String(index + 1).padStart(2, '0')}</div>
                    <div style={{ color: '#fff', fontSize: '25px', lineHeight: 1.05, fontWeight: 800, textTransform: 'uppercase' }}>{step}</div>
                  </div>
                  {index < (spec.steps?.length ?? 0) - 1 && <div style={{ color: orange, fontSize: '34px', fontWeight: 900, alignSelf: 'center' }}>→</div>}
                </React.Fragment>
              ))}
            </div>
            {items.length > 0 && <div style={{ display: 'flex', gap: '18px', width: '100%', marginTop: '30px' }}>{items.slice(0, 3).map((item, index) => <Panel key={item.label} item={item} accent={index === 0} />)}</div>}
          </>
        )}

        {spec.layout === 'metrics' && (
          <>
            <Heading spec={spec} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '42px', width: '100%' }}>
              <div style={{ width: '320px', height: '320px', flexShrink: 0, border: `2px solid ${orange}`, borderRadius: '50%', background: 'radial-gradient(circle, rgba(247,147,26,0.3), rgba(247,147,26,0.04) 58%, transparent 60%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 60px rgba(247,147,26,0.2)' }}>
                <img src={eixLogo} alt="EIX" crossOrigin="anonymous" style={{ width: '82px', height: '82px', objectFit: 'contain', marginBottom: '14px' }} />
                <div style={{ color: orange, fontSize: '72px', lineHeight: 0.9, fontWeight: 900 }}>{spec.metric}</div>
                <div style={{ color: '#fff', fontSize: '21px', fontWeight: 800, letterSpacing: '0.08em', marginTop: '12px', textAlign: 'center' }}>{spec.metricLabel}</div>
              </div>
              <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                {items.slice(0, 4).map((item, index) => <Panel key={item.label} item={item} accent={index === 0 || index === 3} />)}
              </div>
            </div>
          </>
        )}

        {spec.layout === 'grid' && (
          <>
            <Heading spec={spec} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '18px', width: '100%' }}>
              {items.slice(0, 6).map((item, index) => <Panel key={item.label} item={item} accent={index === 0 || index === 5} />)}
            </div>
          </>
        )}
      </div>
    </PosterWrapper>
  );
}

const specs: PosterSpec[] = [
  { id: 'eix-new-01', title: 'EIX IS THE NATIVE UTILITY TOKEN', category: 'Token Utility', kicker: 'THE CORE OF ETHICX LAB', headline: ['ONE TOKEN.', 'THE WHOLE ECOSYSTEM.'], body: 'EIX powers every product, service, and future application built by EthicX Lab.', layout: 'hero', items: [{ label: 'Token Creation', value: '1 EIX', detail: 'Per standard token creation' }, { label: 'Platform Fees', value: 'PAID IN EIX', detail: 'All services use the native token' }, { label: 'Ecosystem', value: 'ONE STANDARD', detail: 'One utility across every product' }] },
  { id: 'eix-new-02', title: 'ONE TOKEN. MULTIPLE UTILITIES.', category: 'Token Utility', kicker: 'EIX TOKEN', headline: ['ONE TOKEN.', 'MULTIPLE UTILITIES.'], body: 'A single native asset connects creation, management, AI, DEX services, launchpads, and the ecosystem ahead.', layout: 'grid', items: [{ label: 'Create', detail: 'Launch tokens with EIX' }, { label: 'Manage', detail: 'Control your token lifecycle' }, { label: 'Build', detail: 'Access AI services' }, { label: 'Trade', detail: 'Use DEX utilities' }, { label: 'Launch', detail: 'Fund new projects' }, { label: 'Grow', detail: 'Earn ecosystem rewards' }] },
  { id: 'eix-new-03', title: 'EIX POWERS THE WHOLE ECOSYSTEM', category: 'Token Utility', kicker: 'NATIVE UTILITY', headline: ['EIX POWERS', 'EVERY LAYER.'], body: 'From the first token creation fee to future partner applications, utility flows through EIX.', layout: 'flow', steps: ['Create', 'Use', 'Build', 'Grow'], items: [{ label: 'Native Demand', detail: 'Every service creates utility demand' }, { label: 'Shared Standard', detail: 'One token across the platform' }, { label: 'Ecosystem Flywheel', detail: 'More products create more use' }] },
  { id: 'eix-new-04', title: 'BUILT FOR REAL UTILITY', category: 'Token Utility', kicker: 'EIX PRINCIPLE', headline: ['REAL UTILITY.', 'NOT JUST A LABEL.'], body: 'EIX is designed to be used across the EthicX Lab ecosystem, not left idle.', layout: 'split', items: [{ label: 'Access', value: 'SERVICES', detail: 'Use tools and platform products' }, { label: 'Payment', value: 'FEES', detail: 'Pay for ecosystem services' }, { label: 'Participation', value: 'REWARDS', detail: 'Earn through contribution' }, { label: 'Expansion', value: 'PARTNERS', detail: 'Connect to future projects' }] },
  { id: 'eix-new-05', title: 'THE NATIVE TOKEN OF ETHICX LAB', category: 'Token Utility', kicker: 'EIX TOKEN', headline: ['MEET EIX.', 'THE NATIVE TOKEN.'], body: 'A fixed-supply utility token built to power a growing Web3 product ecosystem.', layout: 'hero', items: [{ label: 'Symbol', value: 'EIX', detail: 'EthicX native utility token' }, { label: 'Supply', value: '2.1M', detail: 'Hard-capped total supply' }, { label: 'Purpose', value: 'UTILITY', detail: 'Built for products and services' }] },

  { id: 'eix-new-06', title: 'TOKEN CREATION STARTS WITH EIX', category: 'Platform', kicker: 'PLATFORM UTILITY 01', headline: ['CREATE TOKENS.', 'START WITH EIX.'], body: 'Token creation fees are paid in EIX, creating direct demand from every new standard token.', layout: 'flow', steps: ['Choose', 'Pay 1 EIX', 'Create', 'Deploy'], items: [{ label: 'Standard Fee', value: '1 EIX', detail: 'Target token creation fee' }, { label: 'Simple Entry', detail: 'A clear utility from day one' }, { label: 'More Builders', detail: 'More projects create more demand' }] },
  { id: 'eix-new-07', title: 'MANAGE YOUR TOKEN WITH EIX', category: 'Platform', kicker: 'PLATFORM UTILITY 02', headline: ['CREATE IS STEP ONE.', 'MANAGEMENT IS NEXT.'], body: 'Use EIX to manage, update, verify, and control your token throughout its lifecycle.', layout: 'grid', items: [{ label: 'Manage', detail: 'Keep token operations organized' }, { label: 'Update', detail: 'Maintain project settings' }, { label: 'Verify', detail: 'Build transparent trust' }, { label: 'Control', detail: 'Operate from one platform' }, { label: 'Monitor', detail: 'Stay close to activity' }, { label: 'Scale', detail: 'Grow with the ecosystem' }] },
  { id: 'eix-new-08', title: 'PLATFORM FEES ARE PAID IN EIX', category: 'Platform', kicker: 'PLATFORM UTILITY 03', headline: ['PLATFORM FEES.', 'ONE NATIVE ASSET.'], body: 'EIX keeps the payment layer simple across the products and services of EthicX Lab.', layout: 'metrics', metric: 'EIX', metricLabel: 'NATIVE PAYMENT LAYER', items: [{ label: 'Creation', detail: 'Token creation services' }, { label: 'Management', detail: 'Updates and verification' }, { label: 'Launchpad', detail: 'Project participation' }, { label: 'Trading', detail: 'Platform and DEX fees' }] },
  { id: 'eix-new-09', title: 'AI SERVICES POWERED BY EIX', category: 'Platform', kicker: 'PLATFORM UTILITY 04', headline: ['BUILD SMARTER.', 'USE EIX.'], body: 'Access AI tools and utilities through the same native token that powers the wider ecosystem.', layout: 'split', items: [{ label: 'AI Tools', value: 'ACCESS', detail: 'Practical tools for builders' }, { label: 'Creator Flow', value: 'FASTER', detail: 'Move from idea to execution' }, { label: 'Native Payment', value: 'EIX', detail: 'One token for platform use' }, { label: 'Web3 Ready', value: 'BUILT IN', detail: 'Designed for the ecosystem' }] },
  { id: 'eix-new-10', title: 'LAUNCHPAD SERVICES USE EIX', category: 'Platform', kicker: 'PLATFORM UTILITY 05', headline: ['LAUNCH PROJECTS.', 'GROW WITH EIX.'], body: 'Participate in launchpad services and pay launchpad fees in EIX.', layout: 'flow', steps: ['Discover', 'Participate', 'Launch', 'Expand'], items: [{ label: 'Project Access', detail: 'A utility path for new ideas' }, { label: 'Launch Fees', value: 'EIX', detail: 'Native platform settlement' }, { label: 'Ecosystem Growth', detail: 'More launches, more utility' }] },

  { id: 'eix-new-11', title: 'DEX SERVICES BUILT AROUND EIX', category: 'Platform', kicker: 'PLATFORM UTILITY 06', headline: ['TRADE.', 'BUILD.', 'CONNECT.'], body: 'Use EIX for DEX features, pair creation, liquidity tools, and more.', layout: 'grid', items: [{ label: 'DEX', detail: 'Decentralized exchange features' }, { label: 'Pairs', detail: 'Create trading pairs' }, { label: 'Liquidity', detail: 'Support deeper markets' }, { label: 'Trading', detail: 'Pay platform fees' }, { label: 'Tools', detail: 'More ways to participate' }, { label: 'Access', detail: 'Native utility at the center' }] },
  { id: 'eix-new-12', title: 'TRADING PLATFORM UTILITY', category: 'Platform', kicker: 'PLATFORM UTILITY 07', headline: ['EIX AT THE', 'TRADING LAYER.'], body: 'Use EIX for trading fees, premium features, and future platform utilities.', layout: 'metrics', metric: '24/7', metricLabel: 'ECOSYSTEM ACCESS', items: [{ label: 'Fees', detail: 'Trade with native utility' }, { label: 'Features', detail: 'Unlock platform functions' }, { label: 'Markets', detail: 'Connect projects and users' }, { label: 'Flow', detail: 'Keep value moving' }] },
  { id: 'eix-new-13', title: 'DIGITAL PRODUCTS. NATIVE UTILITY.', category: 'Platform', kicker: 'PLATFORM UTILITY 08', headline: ['EVERY PRODUCT', 'CAN SPEAK EIX.'], body: 'Future digital products from EthicX Lab will integrate EIX as their utility layer.', layout: 'hero', items: [{ label: 'Future Products', detail: 'Designed to integrate EIX' }, { label: 'Shared Utility', detail: 'A common ecosystem standard' }, { label: 'More Use Cases', detail: 'Utility expands with the platform' }] },
  { id: 'eix-new-14', title: 'THE BUILDER ECONOMY STARTS HERE', category: 'Platform', kicker: 'FOR CREATORS', headline: ['BUILD WITH EIX.', 'SHIP WITH PURPOSE.'], body: 'A native token gives builders one consistent way to access, pay, and participate.', layout: 'split', items: [{ label: 'Creators', value: 'BUILD', detail: 'Create new products' }, { label: 'Users', value: 'USE', detail: 'Access new utilities' }, { label: 'Partners', value: 'CONNECT', detail: 'Join the ecosystem' }, { label: 'EIX', value: 'POWER', detail: 'Keep the network moving' }] },
  { id: 'eix-new-15', title: 'UTILITY DEMAND GROWS WITH PRODUCTS', category: 'Platform', kicker: 'THE FLYWHEEL', headline: ['MORE PRODUCTS.', 'MORE DEMAND.'], body: 'Every useful application creates another reason to use the native token.', layout: 'flow', steps: ['Products', 'Users', 'Usage', 'Demand'], items: [{ label: 'Utility Loop', detail: 'Product usage creates token demand' }, { label: 'Network Effect', detail: 'More users improve the ecosystem' }, { label: 'Long-Term Value', detail: 'Built through real activity' }] },

  { id: 'eix-new-16', title: 'POWER CARDS TURN EIX INTO ACTION', category: 'Architecture', kicker: 'EIX ARCHITECTURE 02', headline: ['EIX IN.', 'POWER OUT.'], body: 'Power Cards convert EIX into execution power inside the EthicX ecosystem.', layout: 'hero', items: [{ label: 'Spend EIX', value: 'POWER CARDS', detail: 'Unlock execution capacity' }, { label: 'Unique Codes', value: 'EACH CARD', detail: 'Distinct power identity' }, { label: 'Expandable', value: 'UPGRADE', detail: 'More power as the system grows' }] },
  { id: 'eix-new-17', title: 'POWER CARDS. MORE EXECUTION.', category: 'Architecture', kicker: 'POWER CARDS', headline: ['MORE POWER.', 'MORE EXECUTION.'], body: 'Use EIX to activate Power Cards and increase what the system can execute.', layout: 'flow', steps: ['Spend EIX', 'Unlock Card', 'Execute', 'Upgrade'], items: [{ label: 'Input', value: 'EIX', detail: 'The native fuel' }, { label: 'Output', value: 'POWER', detail: 'More execution capacity' }, { label: 'Loop', value: 'GROW', detail: 'Upgrade as demand grows' }] },
  { id: 'eix-new-18', title: 'GEMS ARE GENERATED BY POWER', category: 'Architecture', kicker: 'GEMS MINING', headline: ['POWER GENERATES', 'GEMS.'], body: 'The architecture turns execution power into Gems, the resource used across the reward system.', layout: 'metrics', metric: 'GEMS', metricLabel: 'GENERATED BY POWER', items: [{ label: 'Power', detail: 'Activated through EIX' }, { label: 'Mining', detail: 'Generate Gems continuously' }, { label: 'Capacity', detail: 'Higher power, higher capacity' }, { label: 'Utility', detail: 'Gems feed the reward flow' }] },
  { id: 'eix-new-19', title: 'MORE POWER. MORE GEMS.', category: 'Architecture', kicker: 'GEMS MINING', headline: ['THE FORMULA IS', 'SIMPLE.'], body: 'Increase Power Card execution and the system increases its Gem mining capacity.', layout: 'split', items: [{ label: 'Power Level', value: 'UP', detail: 'Higher execution power' }, { label: 'Gem Output', value: 'UP', detail: 'More Gems generated' }, { label: 'Reward Flow', value: 'ACTIVE', detail: 'More resources to distribute' }, { label: 'Ecosystem', value: 'STRONGER', detail: 'Capacity compounds over time' }] },
  { id: 'eix-new-20', title: 'THE EIX POWER LOOP', category: 'Architecture', kicker: 'ARCHITECTURE', headline: ['SPEND EIX.', 'CREATE POWER.', 'MINE GEMS.'], body: 'A clear utility loop connects EIX, Power Cards, Gems, and daily project rewards.', layout: 'flow', steps: ['EIX', 'Cards', 'Power', 'Gems'], items: [{ label: 'Fuel', value: 'EIX', detail: 'Native input' }, { label: 'Resource', value: 'GEMS', detail: 'Generated by power' }, { label: 'Output', value: 'REWARDS', detail: 'Distributed to the ecosystem' }] },

  { id: 'eix-new-21', title: 'DAILY BLOCK MINING', category: 'Architecture', kicker: 'DAILY PROJECT ENGINE', headline: ['EVERY PARTNER', 'ADDS A BLOCK.'], body: 'Each partner project adds a daily block that powers the reward cycle.', layout: 'flow', steps: ['Partner', 'Daily Block', 'Rewards', 'Reset'], items: [{ label: 'Block Closes', value: '12:00 AM UTC', detail: 'A daily cycle for the system' }, { label: 'Next Day', value: 'NEW BLOCK', detail: 'The process repeats' }, { label: 'Example', value: '5,000 PTC', detail: 'Daily block reward example' }] },
  { id: 'eix-new-22', title: 'POWER THE DAILY BLOCK', category: 'Architecture', kicker: 'DAILY BLOCK MINING', headline: ['DAILY BLOCKS.', 'CONTINUOUS VALUE.'], body: 'Power generated by EIX keeps the partner project reward engine active each day.', layout: 'grid', items: [{ label: 'Partner Projects', detail: 'Each adds a block' }, { label: 'Daily Mining', detail: 'Rewards close each day' }, { label: 'Block Reward', value: '5,000 PTC', detail: 'Example project output' }, { label: 'UTC Close', value: '00:00', detail: 'Daily reset point' }, { label: 'Next Block', detail: 'Fresh cycle begins' }, { label: 'More Partners', detail: 'More network activity' }] },
  { id: 'eix-new-23', title: 'REWARDS FOLLOW CONTRIBUTION', category: 'Rewards', kicker: 'CONTRIBUTION MODEL', headline: ['CONTRIBUTE GEMS.', 'EARN YOUR SHARE.'], body: 'Users contribute Gems to the daily block. Rewards are distributed by each user’s contribution weight.', layout: 'metrics', metric: '100%', metricLabel: 'WEIGHTED DISTRIBUTION', items: [{ label: 'User A', value: '25%', detail: 'Contribution example' }, { label: 'User B', value: '15%', detail: 'Contribution example' }, { label: 'User C', value: '10%', detail: 'Contribution example' }, { label: 'User D', value: '50%', detail: 'Contribution example' }] },
  { id: 'eix-new-24', title: 'CONTRIBUTION WEIGHT CREATES FAIRNESS', category: 'Rewards', kicker: 'REWARD DISTRIBUTION', headline: ['YOUR SHARE', 'FOLLOWS YOUR INPUT.'], body: 'A weighted model connects daily contribution to the share of the block reward.', layout: 'split', items: [{ label: 'Contribute', value: 'GEMS', detail: 'Add to the daily block' }, { label: 'Measure', value: 'WEIGHT', detail: 'Calculate your share' }, { label: 'Distribute', value: 'REWARD', detail: 'Receive the weighted output' }, { label: 'Repeat', value: 'DAILY', detail: 'Keep participating' }] },
  { id: 'eix-new-25', title: 'PARTNER TOKENS ARE MULTI-PROJECT REWARDS', category: 'Rewards', kicker: 'PARTNER TOKENS', headline: ['EARN MORE THAN', 'ONE TOKEN.'], body: 'Partner projects can add sellable, tradable, and withdrawable tokens to the ecosystem.', layout: 'grid', items: [{ label: 'Earned', detail: 'Tokens from partner projects' }, { label: 'Sellable', detail: 'Convert when you choose' }, { label: 'Tradable', detail: 'Move across markets' }, { label: 'Withdrawable', detail: 'Take value out' }, { label: 'Multi-Project', detail: 'Multiple reward streams' }, { label: 'Top-Tier', detail: 'More projects, same model' }] },
  { id: 'eix-new-26', title: 'REWARDS IN EIX AND PARTNER TOKENS', category: 'Rewards', kicker: 'REWARD LAYER', headline: ['ONE CONTRIBUTION.', 'MULTIPLE REWARDS.'], body: 'The reward layer combines EIX utility with project tokens earned through the partner network.', layout: 'hero', items: [{ label: 'EIX Rewards', value: 'NATIVE', detail: 'Core ecosystem value' }, { label: 'Partner Tokens', value: 'MULTI', detail: 'Project-specific rewards' }, { label: 'Real Cash', value: 'CONVERTIBLE', detail: 'Designed for practical utility' }] },
  { id: 'eix-new-27', title: 'THE DAILY REWARD EXAMPLE', category: 'Rewards', kicker: 'EXAMPLE PROJECT: PTC', headline: ['ONE BLOCK.', '5,000 PTC.'], body: 'If a block closes at 5,000 PTC, your contribution percentage determines your reward.', layout: 'metrics', metric: '5,000', metricLabel: 'PTC BLOCK REWARD', items: [{ label: '25% Share', value: '1,250 PTC', detail: 'Example user reward' }, { label: '15% Share', detail: 'Weighted by contribution' }, { label: '10% Share', detail: 'Weighted by contribution' }, { label: '50% Share', detail: 'Weighted by contribution' }] },
  { id: 'eix-new-28', title: 'REFERRALS CREATE EIX REWARDS', category: 'Rewards', kicker: 'REFERRAL ENGINE', headline: ['BRING USERS.', 'EARN EIX.'], body: 'Users who acquire EIX through referrals can generate EIX rewards for the network.', layout: 'flow', steps: ['Invite', 'Acquire', 'Activate', 'Reward'], items: [{ label: 'Referral', detail: 'Bring new users into the ecosystem' }, { label: 'Reward in EIX', value: 'NATIVE', detail: 'Keep value in the core token' }, { label: 'Network Growth', detail: 'More users, more utility' }] },
  { id: 'eix-new-29', title: 'REFERRAL REWARDS ARE REAL UTILITY', category: 'Rewards', kicker: 'REFERRAL & EIX REWARDS', headline: ['SHARE THE ECOSYSTEM.', 'SHARE THE UPSIDE.'], body: 'Referral rewards are designed to be cash-convertible, withdrawable, and usable on the ecosystem.', layout: 'grid', items: [{ label: 'EIX Reward', detail: 'Native reward output' }, { label: 'Real Cash', detail: 'Convert when needed' }, { label: 'Withdrawable', detail: 'Control your value' }, { label: 'On-Chain', detail: 'Optional hold and use' }, { label: 'Invite', detail: 'Grow the community' }, { label: 'Repeat', detail: 'Build a stronger network' }] },
  { id: 'eix-new-30', title: 'REWARDS THAT DRIVE RETENTION', category: 'Rewards', kicker: 'USER BENEFIT', headline: ['USE.', 'EARN.', 'RETURN.'], body: 'When utility creates rewards, users have a reason to keep participating in the ecosystem.', layout: 'flow', steps: ['Use EIX', 'Contribute', 'Earn', 'Return'], items: [{ label: 'Daily Action', detail: 'Participation becomes a habit' }, { label: 'Reward Loop', detail: 'Value flows back to users' }, { label: 'Retention', detail: 'Utility supports growth' }] },

  { id: 'eix-new-31', title: '40% OF TOTAL SUPPLY FOR USERS', category: 'Economy', kicker: 'DISTRIBUTION GOAL', headline: ['40%', 'FOR THE USERS.'], body: 'The distribution goal sets 40% of total EIX supply aside for users.', layout: 'metrics', metric: '40%', metricLabel: 'DISTRIBUTION GOAL', items: [{ label: 'Total Supply', value: '2,100,000', detail: 'Fixed EIX supply' }, { label: 'User Allocation', value: '840,000 EIX', detail: '40% of total supply' }, { label: 'Community', value: 'PRIORITY', detail: 'Participation matters' }, { label: 'Growth', value: 'SHARED', detail: 'Build with the ecosystem' }] },
  { id: 'eix-new-32', title: '840,000 EIX FOR USER PARTICIPATION', category: 'Economy', kicker: 'USER DISTRIBUTION', headline: ['840,000 EIX.', 'ONE COMMUNITY GOAL.'], body: 'The user allocation translates the 40% distribution goal into a clear, fixed number.', layout: 'hero', items: [{ label: 'Total Supply', value: '2.1M EIX', detail: 'Hard cap' }, { label: 'User Share', value: '40%', detail: 'Distribution goal' }, { label: 'Allocation', value: '840K EIX', detail: 'For participating users' }] },
  { id: 'eix-new-33', title: 'REVENUE FLOWS BACK INTO THE ECOSYSTEM', category: 'Economy', kicker: 'REVENUE SOURCES', headline: ['USE EIX.', 'FUND THE FUTURE.'], body: 'Revenue generated by EIX usage returns to the system through project funding and ecosystem growth.', layout: 'flow', steps: ['Usage', 'Revenue', 'Allocation', 'Growth'], items: [{ label: 'Project Funding', detail: 'Support new products' }, { label: 'Ecosystem Resources', detail: 'Keep the engine active' }, { label: 'Marketing', detail: 'Bring in more users' }] },
  { id: 'eix-new-34', title: 'REVENUE SOURCES PAID IN EIX', category: 'Economy', kicker: 'REVENUE SOURCES', headline: ['EVERY SERVICE', 'FEEDS THE FLYWHEEL.'], body: 'Token creation, AI, DEX, trading, platform fees, digital products, and future services create revenue activity.', layout: 'grid', items: [{ label: 'Token Creation', detail: 'Creation fee in EIX' }, { label: 'AI Applications', detail: 'Tools and utilities' }, { label: 'DEX Services', detail: 'Pairs and liquidity' }, { label: 'Trading Platform', detail: 'Fees and features' }, { label: 'Platform Services', detail: 'Management and access' }, { label: 'Digital Products', detail: 'Future EIX-integrated products' }] },
  { id: 'eix-new-35', title: 'REVENUE ALLOCATION BUILDS THE NEXT LAYER', category: 'Economy', kicker: 'REVENUE ALLOCATION', headline: ['VALUE COMES IN.', 'ECOSYSTEM GROWS.'], body: 'Revenue allocation connects today’s utility to tomorrow’s products, partners, and users.', layout: 'split', items: [{ label: 'Development', value: 'BUILD', detail: 'Improve the ecosystem' }, { label: 'Treasury', value: 'GROW', detail: 'Strengthen the foundation' }, { label: 'Marketing', value: 'REACH', detail: 'Bring the story forward' }, { label: 'Community', value: 'REWARD', detail: 'Support participation' }] },
  { id: 'eix-new-36', title: 'ECOSYSTEM DEVELOPMENT IS A REVENUE PRIORITY', category: 'Economy', kicker: 'ALLOCATION 01', headline: ['FUND THE BUILD.', 'EXPAND THE UTILITY.'], body: 'A portion of revenue supports the products and infrastructure that create future EIX demand.', layout: 'hero', items: [{ label: 'Development', value: 'BUILD', detail: 'Product and platform work' }, { label: 'Infrastructure', value: 'SCALE', detail: 'More reliable ecosystem services' }, { label: 'Utility', value: 'EXPAND', detail: 'More reasons to use EIX' }] },
  { id: 'eix-new-37', title: 'MARKETING BRINGS THE ECOSYSTEM TO USERS', category: 'Economy', kicker: 'ALLOCATION 02', headline: ['MORE REACH.', 'MORE UTILITY.'], body: 'Marketing allocation helps more users discover the EIX-powered ecosystem.', layout: 'metrics', metric: 'EIX', metricLabel: 'THE STORY TRAVELS', items: [{ label: 'Awareness', detail: 'Make the utility visible' }, { label: 'Acquisition', detail: 'Bring in new users' }, { label: 'Community', detail: 'Strengthen participation' }, { label: 'Demand', detail: 'Grow usage across products' }] },
  { id: 'eix-new-38', title: 'PARTNERSHIPS EXPAND EIX UTILITY', category: 'Ecosystem', kicker: 'ALLOCATION 06', headline: ['PARTNER UP.', 'BUILD OUT.'], body: 'Partnerships bring EIX into new projects, services, and shared ecosystem opportunities.', layout: 'flow', steps: ['Partner', 'Integrate', 'Launch', 'Expand'], items: [{ label: 'Joint Projects', detail: 'Build with aligned teams' }, { label: 'New Utilities', detail: 'Extend where EIX can be used' }, { label: 'Network Growth', detail: 'More projects, stronger demand' }] },
  { id: 'eix-new-39', title: 'WEB3 SERVICES WILL USE EIX', category: 'Ecosystem', kicker: 'ECOSYSTEM APPLICATIONS', headline: ['THE NEXT WEB3', 'LAYER USES EIX.'], body: 'Upcoming Web3 services and applications can integrate EIX as their ecosystem utility.', layout: 'split', items: [{ label: 'Web3 Services', value: 'INTEGRATE', detail: 'Use EIX in new applications' }, { label: 'Products', value: 'CONNECT', detail: 'Share one utility layer' }, { label: 'Partners', value: 'BUILD', detail: 'Create joint opportunities' }, { label: 'Users', value: 'BENEFIT', detail: 'Access more practical tools' }] },
  { id: 'eix-new-40', title: 'GOVERNANCE IS A FUTURE UTILITY', category: 'Ecosystem', kicker: 'FUTURE APPLICATION', headline: ['OWNERSHIP CAN', 'BECOME A VOICE.'], body: 'As the ecosystem evolves, EIX holders may get future governance rights when launched.', layout: 'hero', items: [{ label: 'Future Governance', value: 'WHEN LAUNCHED', detail: 'A planned ecosystem direction' }, { label: 'Holder Voice', value: 'PARTICIPATE', detail: 'Help shape what comes next' }, { label: 'Shared Future', value: 'BUILD', detail: 'Grow with the network' }] },

  { id: 'eix-new-41', title: 'EIX IS THE ECOSYSTEM FUEL', category: 'Ecosystem', kicker: 'ETHICX ARCHITECTURE', headline: ['POWER.', 'GEMS.', 'REWARDS.'], body: 'EIX fuels a connected architecture where usage creates power, power creates Gems, and Gems support rewards.', layout: 'flow', steps: ['EIX', 'Power', 'Gems', 'Rewards'], items: [{ label: 'Fuel', value: 'EIX', detail: 'Native utility token' }, { label: 'Resource', value: 'GEMS', detail: 'Generated through power' }, { label: 'Outcome', value: 'VALUE', detail: 'Distributed across the ecosystem' }] },
  { id: 'eix-new-42', title: 'HOW VALUE CIRCULATES', category: 'Ecosystem', kicker: 'ECONOMY FLOW', headline: ['BUY.', 'USE.', 'EARN.', 'REINVEST.'], body: 'A stronger ecosystem keeps value moving from users to products and back again.', layout: 'flow', steps: ['Buy EIX', 'Use Power', 'Mine Gems', 'Earn'], items: [{ label: 'Then', value: 'REINVEST', detail: 'Return value to the ecosystem' }, { label: 'More Projects', detail: 'Create more utility' }, { label: 'More Demand', detail: 'Strengthen the flywheel' }] },
  { id: 'eix-new-43', title: 'REAL UTILITY. HIGH DEMAND.', category: 'Ecosystem', kicker: 'KEY BENEFITS', headline: ['UTILITY CREATES', 'DEMAND.'], body: 'When a token is used by products, services, and users, its utility becomes part of the ecosystem’s daily activity.', layout: 'grid', items: [{ label: 'Real Utility', detail: 'Used across products' }, { label: 'High Demand', detail: 'More services, more use' }, { label: 'Strong Ecosystem', detail: 'Connected applications' }, { label: 'Sustainable Growth', detail: 'Built through activity' }, { label: 'Long-Term Value', detail: 'Designed for continued use' }, { label: 'Shared Upside', detail: 'Users and partners grow together' }] },
  { id: 'eix-new-44', title: 'FROM TOKEN TO ECOSYSTEM', category: 'Ecosystem', kicker: 'THE BIG PICTURE', headline: ['EIX STARTS', 'THE FLOW.'], body: 'The native token connects the platform, the reward model, and the applications built around them.', layout: 'metrics', metric: '1', metricLabel: 'NATIVE STANDARD', items: [{ label: 'Platform', detail: 'Create and manage' }, { label: 'Architecture', detail: 'Power and mine' }, { label: 'Rewards', detail: 'Contribute and earn' }, { label: 'Ecosystem', detail: 'Partner and expand' }] },
  { id: 'eix-new-45', title: 'BUILD. USE. GROW. WITH EIX.', category: 'Ecosystem', kicker: 'THE ETHICX INVITATION', headline: ['BUILD.', 'USE.', 'GROW.'], body: 'EIX is the shared utility for everyone moving the EthicX Lab ecosystem forward.', layout: 'hero', items: [{ label: 'Build', value: 'PRODUCTS', detail: 'Create useful applications' }, { label: 'Use', value: 'SERVICES', detail: 'Put the ecosystem to work' }, { label: 'Grow', value: 'TOGETHER', detail: 'Expand the network' }] },
  { id: 'eix-new-46', title: 'EIX CONNECTS EVERY PRODUCT', category: 'Ecosystem', kicker: 'ONE ECOSYSTEM', headline: ['ONE TOKEN.', 'MANY DOORS.'], body: 'From digital products to future partner platforms, EIX makes the ecosystem feel connected.', layout: 'grid', items: [{ label: 'Creation', detail: 'Token creation' }, { label: 'AI', detail: 'AI applications' }, { label: 'DEX', detail: 'DEX services' }, { label: 'Trading', detail: 'Trading platform' }, { label: 'Partners', detail: 'Joint projects' }, { label: 'Web3', detail: 'Future applications' }] },
  { id: 'eix-new-47', title: 'SCARCITY MEETS UTILITY', category: 'Economy', kicker: 'EIX DIFFERENCE', headline: ['FIXED SUPPLY.', 'EXPANDING UTILITY.'], body: 'EIX combines a 2.1M hard cap with a growing set of products, services, and ecosystem applications.', layout: 'split', items: [{ label: 'Supply', value: '2.1M', detail: 'A fixed total supply' }, { label: 'Utility', value: 'EXPANDING', detail: 'More services over time' }, { label: 'Demand', value: 'PRACTICAL', detail: 'Driven by real use' }, { label: 'Vision', value: 'ECOSYSTEM', detail: 'Built beyond one product' }] },
  { id: 'eix-new-48', title: 'A TOKEN FOR BUILDERS AND USERS', category: 'Ecosystem', kicker: 'WHO EIX IS FOR', headline: ['MADE FOR', 'PARTICIPATION.'], body: 'Builders create the products. Users power the activity. Partners expand the network. EIX connects them.', layout: 'grid', items: [{ label: 'Builders', value: 'CREATE', detail: 'Launch new products' }, { label: 'Users', value: 'USE', detail: 'Access utilities' }, { label: 'Miners', value: 'CONTRIBUTE', detail: 'Support daily blocks' }, { label: 'Partners', value: 'EXPAND', detail: 'Add project tokens' }, { label: 'Community', value: 'GROW', detail: 'Share the network' }, { label: 'EIX', value: 'CONNECTS', detail: 'One native standard' }] },
  { id: 'eix-new-49', title: 'THE ETHICX VALUE LOOP', category: 'Ecosystem', kicker: 'SYSTEM SUMMARY', headline: ['USEFUL INPUT.', 'MEASURABLE OUTPUT.'], body: 'EIX turns participation into an observable flow of products, power, Gems, rewards, and growth.', layout: 'flow', steps: ['Utility', 'Power', 'Gems', 'Growth'], items: [{ label: 'Input', value: 'EIX', detail: 'The native utility asset' }, { label: 'Output', value: 'REWARDS', detail: 'Value distributed by activity' }, { label: 'Next', value: 'EXPANSION', detail: 'More products and partners' }] },
  { id: 'eix-new-50', title: 'WELCOME TO THE EIX ECOSYSTEM', category: 'Ecosystem', kicker: 'ETHICX LAB', headline: ['EIX POWERS', 'WHAT COMES NEXT.'], body: 'A scarce native token for a connected ecosystem of products, services, partners, and rewards.', layout: 'hero', items: [{ label: 'Fixed Supply', value: '2.1M EIX', detail: 'No endless minting' }, { label: 'Real Utility', value: 'USE EIX', detail: 'Across the ecosystem' }, { label: 'Shared Growth', value: 'BUILD • USE • GROW', detail: 'With EthicX Lab' }] },
];

export const NewPosters: PosterDefinition[] = specs.map((spec) => ({
  id: spec.id,
  title: spec.title,
  category: spec.category,
  component: () => <NewPoster spec={spec} />,
}));