import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { ContentComponent } from './layout/content/content.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, ContentComponent],
})
export class AppComponent {}
