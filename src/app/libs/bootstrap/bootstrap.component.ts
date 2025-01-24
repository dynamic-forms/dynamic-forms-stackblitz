import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { provideBsDynamicFormsWithDefaultFeatures } from '@dynamic-forms/bootstrap';
import { DynamicFormComponent, DynamicFormDefinition, withDynamicFormColors } from '@dynamic-forms/core';
import { map } from 'rxjs';
import { createDynamicFormDefinition } from './../dynamic-form-definition';
import { ThemeService } from 'src/app/services/theme.service';

const colors = {
  colors: {
    inputAction: 'secondary',
  },
  libraryName: 'bootstrap',
};

const features = [withDynamicFormColors(colors)];

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrl: './bootstrap.component.scss',
  imports: [DynamicFormComponent, AsyncPipe],
  providers: provideBsDynamicFormsWithDefaultFeatures({ theme: 'bootstrap' }, ...features),
})
export class BootstrapComponent {
  readonly theme$ = this.themeService.isDarkMode$.pipe(map(isDarkMode => (isDarkMode ? 'dark' : 'light')));
  readonly definition: DynamicFormDefinition;
  readonly model: any;

  constructor(private themeService: ThemeService) {
    this.definition = createDynamicFormDefinition();
    this.model = {};
  }

  submitForm(data: any): void {
    // eslint-disable-next-line no-console
    console.log(data);
  }
}
