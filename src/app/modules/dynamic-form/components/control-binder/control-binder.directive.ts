import { Directive, Input, ViewContainerRef } from "@angular/core";
import { ComponentService } from "../../services/component.service";

@Directive({
    selector: '[controlBinder]'
})
export class ControlBinderDirective {
    @Input()
    model: any | undefined;

    @Input()
    config: any | undefined;

    @Input()
    wf: any;

    constructor(
        private container: ViewContainerRef,
        private componentService: ComponentService
    ) { }

    ngOnInit() {
        const control = this.componentService.resolve(this.config.type);

        let component = this.container.createComponent(control);
        component.instance.config = this.config;
        component.instance.model = this.model;
        component.instance.wf = {}
        component.instance.wf.next = (activityName: string) => this.wf.next(activityName);
    }
}