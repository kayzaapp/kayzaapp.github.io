import { TestBed } from '@angular/core/testing';

import { BUILD_INFO } from '../build-info';
import { FooterComponent } from './footer';

describe('FooterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    }).compileComponents();
  });

  it('should render version and commit reference', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';
    const expectedRef = BUILD_INFO.gitTag
      ? `${BUILD_INFO.gitTag} (${BUILD_INFO.gitCommit})`
      : BUILD_INFO.gitCommit;

    expect(text).toContain(`Version ${BUILD_INFO.version}`);
    expect(text).toContain(`Commit ${expectedRef}`);
  });
});
