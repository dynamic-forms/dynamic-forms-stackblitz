import { Component } from '@angular/core';
import { provideBsDynamicFormsWithDefaultFeatures } from '@dynamic-forms/bootstrap';
import { DynamicFormComponent, DynamicFormDefinition, withDynamicFormColors } from '@dynamic-forms/core';
import { createDynamicFormDefinition } from './../dynamic-form-definition';

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
  imports: [DynamicFormComponent],
  providers: provideBsDynamicFormsWithDefaultFeatures({ theme: 'bootstrap' }, ...features),
})
export class BootstrapComponent {
  readonly definition: DynamicFormDefinition;
  readonly model: any;

  constructor() {
    this.definition = createDynamicFormDefinition();
    this.model = {};
  }

  submitForm(data: any): void {
    console.log(data);
  }
}
