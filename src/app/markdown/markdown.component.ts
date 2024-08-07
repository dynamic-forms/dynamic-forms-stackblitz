import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DynamicFormMarkdownComponent, DynamicFormMarkdownService } from '@dynamic-forms/markdown';
import { MarkdownElement } from './markdown.element';

@Component({
  standalone: true,
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.scss',
  imports: [DynamicFormMarkdownComponent],
  providers: [DynamicFormMarkdownService],
})
export class MarkdownComponent implements OnInit, OnChanges {
  element: MarkdownElement;

  @Input()
  source: string;

  ngOnChanges({ source }: SimpleChanges): void {
    if (!source.firstChange && this.source !== this.element.source) {
      this.element.source = this.source;
    }
  }

  ngOnInit(): void {
    this.element = new MarkdownElement(this.source);
  }
}
