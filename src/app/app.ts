import { Component } from '@angular/core';
import { About } from './about/about';
import { Footer } from './footer/footer';
import { Hero } from './hero/hero';
import { Navigation } from './navigation/navigation';
import { Skills } from './skills/skills';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-root',
  imports: [Navigation, Hero, About, Footer, Skills],
  template: `
    <div class="min-h-screen bg-gray-50">
      <jm-navigation />
      <main>
        <jm-hero />
        @defer (on viewport) {
          <jm-about />
        } @placeholder {
          <div class="h-screen bg-gray-50"></div>
        }
        @defer (on viewport) {
          <jm-skills />
        } @placeholder {
          <div class="h-screen bg-gray-50"></div>
        }
      </main>
      @defer (on viewport) {
        <jm-footer />
      } @placeholder {
        <div class="h-screen bg-gray-50"></div>
      }
    </div>
  `,
})
export class App {}
