import { ScarcityPosters } from './ScarcityPosters';
import { PresalePosters } from './PresalePosters';
import { DeveloperPosters } from './DeveloperPosters';
import { EarnPosters } from './EarnPosters';
import { CommunityPosters } from './CommunityPosters';

export type PosterCategory = 'Scarcity' | 'Presale' | 'Developer' | 'Earn' | 'Community' | 'Vision';

export interface PosterDefinition {
  id: string;
  title: string;
  category: PosterCategory;
  component: React.ComponentType;
}

export const allPosters: PosterDefinition[] = [
  ...ScarcityPosters,
  ...PresalePosters,
  ...DeveloperPosters,
  ...EarnPosters,
  ...CommunityPosters,
];
