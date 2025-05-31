import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'JM-about',
  template: `
    <section id="about" class="bg-white">
      <div class="section-container">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
          <div class="prose prose-lg text-gray-600">
            <p class="mb-6">
              I'm a passionate Full-Stack
              Developer with a keen eye for creating elegant solutions. With a
              strong foundation in both frontend and backend technologies, I
              specialize in building robust applications that deliver
              exceptional user experiences.
            </p>
            <p class="mb-6">
              My expertise spans across modern technologies like Angular, React, Node.js,
              and TypeScript, allowing me to create scalable and maintainable
              applications. I'm particularly interested in performance
              optimization and creating accessible web applications that work
              for everyone.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, and sharing my knowledge
              with the developer community through blog posts and mentoring.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
