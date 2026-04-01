import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { BUILD_INFO } from '../build-info';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  protected readonly version = BUILD_INFO.version;
  protected readonly gitCommit = BUILD_INFO.gitCommit;
  protected readonly gitTag = BUILD_INFO.gitTag;
  protected readonly displayRef = computed(() =>
    this.gitTag ? `${this.gitTag} (${this.gitCommit})` : this.gitCommit
  );
}
