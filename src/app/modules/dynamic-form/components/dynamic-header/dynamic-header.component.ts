import { Component } from '@angular/core';

@Component({
  selector: 'dynamic-header',
  template: `
      <h1>{{ config.label|translate }}</h1>
  `
})
export class DynamicHeaderComponent {
  config: any;
  model: any;
  wf: any;
}