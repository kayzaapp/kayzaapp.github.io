import { ChangeDetectionStrategy, Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';

import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly activeSection = signal<string>('home');

  private observer: IntersectionObserver | undefined;

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined') return;

      const sections = document.querySelectorAll<HTMLElement>('section[id]');

      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.activeSection.set(entry.target.id);
              break;
            }
          }
        },
        { rootMargin: '-10% 0px -80% 0px', threshold: 0 }
      );

      sections.forEach(section => this.observer!.observe(section));
    });

    destroyRef.onDestroy(() => this.observer?.disconnect());
  }
}
