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
      <JM-navigation></JM-navigation>
      <main>
        <JM-hero></JM-hero>
        <JM-about></JM-about>
        <JM-skills></JM-skills>
      </main>
      <JM-footer></JM-footer>
    </div>
  `,
})
export class App {}
