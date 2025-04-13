import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-root',
  imports: [NavigationComponent, HeroComponent],
  template: `
    <div className="min-h-screen bg-gray-50">
      <JM-navigation></JM-navigation>
      <main>
        <JM-hero></JM-hero>
      </main>
    </div>
  `,
})
export class AppComponent {}
