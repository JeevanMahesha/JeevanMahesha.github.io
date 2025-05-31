import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  GithubIcon,
  LinkedinIcon,
  LucideAngularModule,
  TwitterIcon,
} from 'lucide-angular';

@Component({
  selector: 'JM-hero',
  imports: [LucideAngularModule],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  icons = {
    github: GithubIcon,
    linkedin: LinkedinIcon,
    twitter: TwitterIcon,
  };
}
