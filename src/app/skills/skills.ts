import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'JM-skills',
  imports: [],
  templateUrl: './skills.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  skills = [
    {
      category: 'Frontend',
      items: [
        'HTML5',
        'CSS',
        'JavaScript',
        'TypeScript',
        'Angular',
        'React',
        'Next.js',
        'TailwindCSS',
        'Sass',
        'Bootstrap',
        'reactivex',
        'Redux',
        'pwa',
        'ngrx',
        'jest',
      ],
    },
    {
      category: 'Backend',
      items: [
        'Node.js',
        'Express',
        'PostgreSQL',
        'GraphQL',
        'nestjs',
        'rust',
        'Django',
        'Flask',
        'Spring',
        'FastAPI',
        'MongoDB',
        'Firebase',
      ],
    },
    {
      category: 'Tools & DevOps',
      items: [
        'Git',
        'Docker',
        'amazonwebservices',
        'github',
        'githubpages',
        'githubactions',
        'npm',
        'pnpm',
        'webpack',
        'yarn',
        'nginx',
      ],
    },
  ];
}
