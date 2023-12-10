import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicFormMarkdownComponent, DynamicFormMarkdownService } from '@dynamic-forms/markdown';
import { MarkdownComponent } from './markdown.component';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormMarkdownComponent,
  ],
  declarations: [
    MarkdownComponent,
  ],
  exports: [
    MarkdownComponent,
  ],
  providers: [
    DynamicFormMarkdownService,
  ],
})
export class MarkdownModule {}
