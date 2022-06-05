import { Component } from '@angular/core';
import { DynamicFormDefinition } from '@dynamic-forms/core';
import { createDynamicFormDefinition } from '../dynamic-form-definition';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
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
