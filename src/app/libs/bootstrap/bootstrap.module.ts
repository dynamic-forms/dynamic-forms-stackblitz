import { NgModule } from '@angular/core';
import { BsDynamicFormsModule } from '@dynamic-forms/bootstrap';
import { DynamicFormIconModule, DynamicFormThemeModule } from '@dynamic-forms/core';
import { DynamicFormMarkdownModule } from '@dynamic-forms/markdown';

@NgModule({
  imports: [
    DynamicFormIconModule,
    DynamicFormThemeModule.withColors({
      colors: {
        inputAction: 'secondary',
      },
      libraryName: 'bootstrap',
    }),
    DynamicFormMarkdownModule,
    BsDynamicFormsModule.forRoot({ theme: 'bootstrap' }),
  ],
})
export class BootstrapModule {}
