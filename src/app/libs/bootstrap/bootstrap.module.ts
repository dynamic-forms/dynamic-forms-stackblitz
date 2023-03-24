import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDynamicFormsModule } from '@dynamic-forms/bootstrap';
import { DynamicFormThemeModule } from '@dynamic-forms/core';
import { DynamicFormMarkdownModule } from '@dynamic-forms/markdown';
import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { BootstrapComponent } from './bootstrap.component';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormThemeModule.withColors({
      colors: {
        inputAction: 'secondary',
      },
      libraryName: 'bootstrap',
    }),
    DynamicFormMarkdownModule,
    BsDynamicFormsModule.forRoot({ theme: 'bootstrap' }),
    BootstrapRoutingModule,
  ],
  declarations: [BootstrapComponent],
})
export class BootstrapModule {}
