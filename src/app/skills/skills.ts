import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'JM-skills',
  templateUrl: './skills.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
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
        'python',
      ],
    },
    {
      category: 'Tools & DevOps',
      items: [
        'Git',
        'Docker',
        'esbuild',
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
