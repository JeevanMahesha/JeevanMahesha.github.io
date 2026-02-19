import { LucideIconData } from 'lucide-angular';

export type SocialMediaName = 'github' | 'linkedin' | 'twitter' | 'mail';
export interface SocialMediaProfile {
  name: SocialMediaName;
  url: string;
  icon: LucideIconData;
  ariaLabel: string;
}
