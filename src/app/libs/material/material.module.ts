import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicFormThemeModule } from '@dynamic-forms/core';
import { DynamicFormMarkdownModule } from '@dynamic-forms/markdown';
import { MatDynamicFormsModule } from '@dynamic-forms/material';
import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormThemeModule.withColors({
      colors: {
        inputAction: 'none',
      },
      libraryName: 'material',
    }),
    DynamicFormMarkdownModule,
    MatDynamicFormsModule.forRoot({ theme: 'material' }),
    MaterialRoutingModule,
  ],
  declarations: [MaterialComponent],
})
export class MaterialModule {}
