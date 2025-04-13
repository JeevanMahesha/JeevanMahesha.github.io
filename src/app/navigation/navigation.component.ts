import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { LucideAngularModule, X, MenuIcon } from 'lucide-angular';

@Component({
  selector: 'JM-navigation',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './navigation.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  isMenuOpen = false;
  isScrolled = false;

  icons = {
    x: X,
    menu: MenuIcon,
  };

  navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
