import {Component, Input} from '@angular/core';

@Component({
    exportAs: 'dynamicForm',
    selector: 'dynamic-form',
    template: `
            <ng-container
                *ngFor="let field of config;"
                controlBinder
                [config]="field"
                [wf]="wf"
                [model]="model">
            </ng-container>
  `
})
export class DynamicFormComponent {
    @Input()
    config: any;
    
    @Input()
    model: any;

    @Input()
    wf: any;
}