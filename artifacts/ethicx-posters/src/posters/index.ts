import { ScarcityPosters } from './ScarcityPosters';
import { PresalePosters } from './PresalePosters';
import { DeveloperPosters } from './DeveloperPosters';
import { EarnPosters } from './EarnPosters';
import { CommunityPosters } from './CommunityPosters';
import { NewPosters } from './NewPosters';

export type PosterCategory =
  | 'Scarcity' | 'Presale' | 'Developer' | 'Earn' | 'Community' | 'Vision'
  | 'Token Utility' | 'Platform' | 'Architecture' | 'Rewards' | 'Economy' | 'Ecosystem';

export interface PosterDefinition {
  id: string;
  title: string;
  category: PosterCategory;
  component: React.ComponentType;
}

export const oldPosters: PosterDefinition[] = [
  ...ScarcityPosters,
  ...PresalePosters,
  ...DeveloperPosters,
  ...EarnPosters,
  ...CommunityPosters,
];

export const currentPosters: PosterDefinition[] = NewPosters;

// Keep the original export available for any existing imports.
export const allPosters: PosterDefinition[] = currentPosters;
