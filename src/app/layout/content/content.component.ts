import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  imports: [RouterOutlet],
})
export class ContentComponent {}
