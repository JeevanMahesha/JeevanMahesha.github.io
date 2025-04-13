import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  LucideAngularModule,
} from 'lucide-angular';

@Component({
  selector: 'JM-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  thisYear = new Date().getFullYear();
  icons = {
    github: GithubIcon,
    linkedin: LinkedinIcon,
    twitter: TwitterIcon,
    mail: MailIcon,
  };
}
