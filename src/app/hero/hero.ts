import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Signal,
} from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { SocialMedia } from '../shared/services/social-media';
import { SocialMediaProfile } from '../shared/services/social-media.model';

@Component({
  selector: 'JM-hero',
  imports: [LucideAngularModule],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  socialMediaProfiles: Signal<SocialMediaProfile[]>;

  constructor() {
    const socialMediaService = inject(SocialMedia);
    this.socialMediaProfiles = computed(() =>
      socialMediaService
        .socialMediaProfiles()
        .filter((profile) => profile.name !== 'mail')
    );
  }
}
