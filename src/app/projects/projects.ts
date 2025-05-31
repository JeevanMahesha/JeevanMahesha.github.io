import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GithubIcon, LucideAngularModule, ExternalLink } from 'lucide-angular';

@Component({
  selector: 'JM-projects',
  imports: [LucideAngularModule],
  templateUrl: './projects.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  icons = {
    github: GithubIcon,
    external: ExternalLink,
  };
  projects = [
    {
      title: 'E-commerce Platform',
      description:
        'A full-stack e-commerce solution with real-time inventory management, secure payments, and an intuitive admin dashboard.',
      image:
        'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=400&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management App',
      description:
        'Real-time collaborative task management system with team workflows, notifications, and detailed analytics.',
      image:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&q=80',
      tech: ['React', 'TypeScript', 'Socket.io', 'Express'],
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Content Generator',
      description:
        'An AI-powered platform that generates high-quality content using advanced language models and user preferences.',
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&q=80',
      tech: ['Next.js', 'OpenAI API', 'TailwindCSS', 'PostgreSQL'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Health & Fitness Tracker',
      description:
        'Comprehensive fitness tracking application with workout plans, nutrition logging, and progress visualization.',
      image:
        'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=400&q=80',
      tech: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      github: '#',
      demo: '#',
    },
  ];
}
