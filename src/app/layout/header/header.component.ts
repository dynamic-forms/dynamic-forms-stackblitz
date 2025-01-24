import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { map } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [AsyncPipe, MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, RouterLink, RouterLinkActive],
})
export class HeaderComponent {
  readonly theme$ = this.themeService.isDarkMode$.pipe(map(isDarkMode => (isDarkMode ? 'dark_mode' : 'light_mode')));

  constructor(private themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggle();
  }
}
