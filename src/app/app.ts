import { Component } from '@angular/core';
import { AboutComponent } from './about/about';
import { FooterComponent } from './footer/footer';
import { HeroComponent } from './hero/hero';
import { NavigationComponent } from './navigation/navigation';
import { SkillsComponent } from './skills/skills';


@Component({
  selector: 'app-root',
  imports: [
    NavigationComponent,
    HeroComponent,
    AboutComponent,
    FooterComponent,
    SkillsComponent,
  ],
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
export class AppComponent {}
