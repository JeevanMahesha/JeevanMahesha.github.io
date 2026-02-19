import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { SocialMedia } from '../shared/services/social-media';
import { SocialMediaProfile } from '../shared/services/social-media.model';

@Component({
  selector: 'jm-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  thisYear = new Date().getFullYear();
  socialMediaProfiles: Signal<SocialMediaProfile[]>;

  constructor() {
    const socialMediaService = inject(SocialMedia);
    this.socialMediaProfiles = socialMediaService.socialMediaProfiles;
  }
}
