import {Component } from '@angular/core';

@Component({
  selector: 'dynamic-button',
  template: `
      <button [class]='config.style' (click)="wf.next(config.nextActivity);">{{config.label|translate}}</button>
  `
})
export class DynamicButtonComponent {
  config: any;
  model: any;
  wf: any;
}