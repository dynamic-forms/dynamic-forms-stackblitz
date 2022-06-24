import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicFormMarkdownModule } from '@dynamic-forms/core';
import { MatDynamicFormsModule } from '@dynamic-forms/material';
import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';

@NgModule({
  imports: [
    CommonModule,
    MatDynamicFormsModule.forRoot({ theme: 'material' }),
    DynamicFormMarkdownModule,
    MaterialRoutingModule,
  ],
  declarations: [MaterialComponent],
})
export class MaterialModule {}
