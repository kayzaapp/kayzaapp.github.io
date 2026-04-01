import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
}
