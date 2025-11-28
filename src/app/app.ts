import { Component } from '@angular/core';
import { About } from './about/about';
import { Footer } from './footer/footer';
import { Hero } from './hero/hero';
import { Navigation } from './navigation/navigation';
import { Skills } from './skills/skills';

@Component({
  selector: 'app-root',
  imports: [Navigation, Hero, About, Footer, Skills],
  template: `
    <div class="min-h-screen bg-gray-50">
      <JM-navigation />
      <main>
        <JM-hero />
        @defer (on viewport) {
        <JM-about />
        } @placeholder {
        <div class="h-screen bg-gray-50"></div>
        } @defer (on viewport) {
        <JM-skills />
        } @placeholder {
        <div class="h-screen bg-gray-50"></div>
        }
      </main>
      @defer (on viewport) {
      <JM-footer />
      } @placeholder {
      <div class="h-screen bg-gray-50"></div>
      }
    </div>
  `,
})
export class App {}
