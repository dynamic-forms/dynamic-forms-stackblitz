import { Component, ViewEncapsulation } from '@angular/core';
import { DynamicFormDefinition } from '@dynamic-forms/core';
import { dynamicFormDefinition } from '../dynamic-form-definition';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MaterialComponent {
  readonly definition: DynamicFormDefinition;
  readonly model: any;

  constructor() {
    this.definition = JSON.parse(JSON.stringify(dynamicFormDefinition));
    this.model = {};
  }

  submitForm(data: any): void {
    console.log(data);
  }
}
