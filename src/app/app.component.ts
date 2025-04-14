import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';

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
