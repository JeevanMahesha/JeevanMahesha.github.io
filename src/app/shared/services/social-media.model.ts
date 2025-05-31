export type SocialMediaName = 'github' | 'linkedin' | 'twitter' | 'mail';
export interface SocialMediaProfile {
  name: SocialMediaName;
  url: string;
  icon: any;
  ariaLabel: string;
}
