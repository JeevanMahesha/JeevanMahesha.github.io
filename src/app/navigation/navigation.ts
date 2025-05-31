import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  signal,
} from '@angular/core';
import { LucideAngularModule, MenuIcon, X } from 'lucide-angular';

@Component({
  selector: 'JM-navigation',
  imports: [LucideAngularModule, NgClass],
  templateUrl: './navigation.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  isMenuOpen = signal(false);
  isScrolled = signal(false);

  icons = {
    x: X,
    menu: MenuIcon,
  };

  navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    // { href: '#projects', label: 'Projects' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMenu() {
    this.isMenuOpen.update((prev) => !prev);
  }
}
