import { Component } from '@angular/core';
import { DynamicFormComponent, DynamicFormDefinition, withDynamicFormColors } from '@dynamic-forms/core';
import { provideMatDynamicFormsWithDefaultFeatures } from '@dynamic-forms/material';
import { createDynamicFormDefinition } from '../dynamic-form-definition';

const colors = {
  colors: {
    inputAction: 'none',
  },
  libraryName: 'material',
};

const features = [withDynamicFormColors(colors)];

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss',
  imports: [DynamicFormComponent],
  providers: provideMatDynamicFormsWithDefaultFeatures({ theme: 'material' }, ...features),
})
export class MaterialComponent {
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
