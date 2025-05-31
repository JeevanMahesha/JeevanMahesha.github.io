import {
  ApplicationConfig,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { SocialMedia } from './shared/services/social-media';

export const appConfig: ApplicationConfig = {
  providers: [provideZonelessChangeDetection(), provideRouter([]), SocialMedia],
};
