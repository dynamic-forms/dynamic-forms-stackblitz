import { Component } from '@angular/core';
import { DynamicFormComponent, DynamicFormDefinition } from '@dynamic-forms/core';
import { createDynamicFormDefinition } from '../dynamic-form-definition';
import { MaterialModule } from './material.module';

@Component({
  standalone: true,
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
  imports: [DynamicFormComponent, MaterialModule],
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
