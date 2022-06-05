import { Component } from '@angular/core';
import { DynamicFormDefinition } from '@dynamic-forms/core';
import { createDynamicFormDefinition } from './../dynamic-form-definition';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss'],
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
