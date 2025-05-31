import { Injectable, signal } from '@angular/core';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
} from 'lucide-angular';
import { SocialMediaProfile } from './social-media.model';

@Injectable()
export class SocialMedia {
  public socialMediaProfiles = signal<SocialMediaProfile[]>([
    {
      name: 'github',
      url: 'https://github.com/JeevanMahesha',
      icon: GithubIcon,
      ariaLabel: 'GitHub',
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jeevanmahesha/',
      icon: LinkedinIcon,
      ariaLabel: 'LinkedIn',
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/JeevanMahesha',
      icon: TwitterIcon,
      ariaLabel: 'Twitter',
    },
    {
      name: 'mail',
      url: 'mailto:csejeevanm@gmail.com',
      icon: MailIcon,
      ariaLabel: 'Email',
    },
  ]);
}
