import { MediaMatcher } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly _isDarkMode = new BehaviorSubject<boolean>(false);
  readonly isDarkMode$ = this._isDarkMode.asObservable();

  constructor(private media: MediaMatcher) {}

  init(): void {
    this.setMode(this.media.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  toggle(): void {
    this.setMode(!this._isDarkMode.value);
  }

  private setMode(isDarkMode: boolean): void {
    this._isDarkMode.next(isDarkMode);
    if (isDarkMode) {
      document.body.classList.add(`dark-mode`);
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
