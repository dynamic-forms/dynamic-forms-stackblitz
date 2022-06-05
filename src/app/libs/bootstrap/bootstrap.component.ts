import { Component, ViewEncapsulation } from '@angular/core';
import { DynamicFormDefinition } from '@dynamic-forms/core';
import { dynamicFormDefinition } from './../dynamic-form-definition';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BootstrapComponent {
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
