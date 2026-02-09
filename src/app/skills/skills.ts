import {
  ChangeDetectionStrategy,
  Component,
  Type,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  SiAngularIcon,
  SiBootstrapIcon,
  SiCssIcon,
  SiDjangoIcon,
  SiDockerIcon,
  SiEsbuildIcon,
  SiExpressIcon,
  SiFastapiIcon,
  SiFirebaseIcon,
  SiFlaskIcon,
  SiGithubIcon,
  SiGitIcon,
  SiGraphqlIcon,
  SiHtml5Icon,
  SiJavascriptIcon,
  SiJestIcon,
  SiMongodbIcon,
  SiNestjsIcon,
  SiNginxIcon,
  SiNpmIcon,
  SiPnpmIcon,
  SiPostgresqlIcon,
  SiPwaIcon,
  SiPythonIcon,
  SiReactIcon,
  SiReactivexIcon,
  SiReduxIcon,
  SiRustIcon,
  SiSassIcon,
  SiSpringIcon,
  SiTypescriptIcon,
  SiWebpackIcon,
  SiYarnIcon,
} from '@semantic-icons/simple-icons';

const CATEGORY = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools & DevOps',
};

@Component({
  selector: 'JM-skills',
  templateUrl: './skills.html',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  frontendRef = viewChild('Frontend', { read: ViewContainerRef });
  backendRef = viewChild('Backend', { read: ViewContainerRef });
  toolsRef = viewChild('Tools', { read: ViewContainerRef });
  categoryValue = CATEGORY;

  skills: Array<{
    category: string;
    icons: Type<unknown>[];
  }> = [
    {
      category: 'Frontend',
      icons: [
        SiHtml5Icon,
        SiCssIcon,
        SiJavascriptIcon,
        SiTypescriptIcon,
        SiAngularIcon,
        SiReactIcon,
        SiSassIcon,
        SiBootstrapIcon,
        SiReactivexIcon,
        SiReduxIcon,
        SiPwaIcon,
        SiJestIcon,
      ],
    },
    {
      category: 'Backend',
      icons: [
        SiExpressIcon,
        SiPostgresqlIcon,
        SiGraphqlIcon,
        SiNestjsIcon,
        SiRustIcon,
        SiDjangoIcon,
        SiFlaskIcon,
        SiSpringIcon,
        SiFastapiIcon,
        SiMongodbIcon,
        SiFirebaseIcon,
        SiPythonIcon,
      ],
    },
    {
      category: 'Tools & DevOps',
      icons: [
        SiGitIcon,
        SiDockerIcon,
        SiEsbuildIcon,
        SiGithubIcon,
        SiNpmIcon,
        SiPnpmIcon,
        SiWebpackIcon,
        SiYarnIcon,
        SiNginxIcon,
      ],
    },
  ];

  ngAfterViewInit() {
    this.skills.forEach((skillSet) => {
      skillSet.icons.forEach((icon) => {
        switch (skillSet.category) {
          case CATEGORY.frontend:
            const frontendRef = this.frontendRef()?.createComponent(icon);
            frontendRef?.location.nativeElement.classList.add('size-8');
            break;
          case CATEGORY.backend:
            const backendRef = this.backendRef()?.createComponent(icon);
            backendRef?.location.nativeElement.classList.add('size-8');
            break;
          case CATEGORY.tools:
            const toolsRef = this.toolsRef()?.createComponent(icon);
            toolsRef?.location.nativeElement.classList.add('size-8');
            break;
        }
      });
    });
  }
}
