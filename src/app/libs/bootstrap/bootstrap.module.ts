import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDynamicFormsModule } from '@dynamic-forms/bootstrap';
import { DynamicFormMarkdownModule } from '@dynamic-forms/core';
import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { BootstrapComponent } from './bootstrap.component';

@NgModule({
  imports: [
    CommonModule,
    BsDynamicFormsModule.forRoot({ theme: 'bootstrap' }),
    DynamicFormMarkdownModule,
    BootstrapRoutingModule,
  ],
  declarations: [BootstrapComponent],
})
export class BootstrapModule {}
