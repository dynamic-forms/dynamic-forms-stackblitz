import { NgModule } from '@angular/core';
import { DynamicFormIconModule, DynamicFormThemeModule } from '@dynamic-forms/core';
import { DynamicFormMarkdownModule } from '@dynamic-forms/markdown';
import { MatDynamicFormsModule } from '@dynamic-forms/material';

@NgModule({
  imports: [
    DynamicFormIconModule,
    DynamicFormThemeModule.withColors({
      colors: {
        inputAction: 'none',
      },
      libraryName: 'material',
    }),
    DynamicFormMarkdownModule,
    MatDynamicFormsModule.forRoot({ theme: 'material' }),
  ],
})
export class MaterialModule {}
