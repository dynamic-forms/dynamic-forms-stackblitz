import { Component } from '@angular/core';
import { DynamicFormComponent, DynamicFormDefinition } from '@dynamic-forms/core';
import { createDynamicFormDefinition } from './../dynamic-form-definition';
import { BootstrapModule } from './bootstrap.module';

@Component({
  standalone: true,
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss'],
  imports: [DynamicFormComponent, BootstrapModule],
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
