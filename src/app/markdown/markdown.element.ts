import { DynamicFormElement, DynamicFormMarkdownDefinition, DynamicFormMarkdownTemplate } from '@dynamic-forms/core';

export class MarkdownElement extends DynamicFormElement<DynamicFormMarkdownTemplate, DynamicFormMarkdownDefinition> {
  constructor(source: string) {
    super(null, null, null, { template: { source } });
  }

  get source(): string { return this.template.source; }
  set source(value: string) { this.template.source = value; }
}
