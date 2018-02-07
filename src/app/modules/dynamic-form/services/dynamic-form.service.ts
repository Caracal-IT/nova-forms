import { Injectable } from "@angular/core";
import {ComponentService} from "./component.service";

@Injectable()
export class DynamicFormService {
    constructor(private componentService: ComponentService){ }

    createComponent(container: any, config: any, model: any, wf: any) {
        const dynamicForm = this.componentService.resolve("dynamicForm");
        container.clear();

        const component = container.createComponent(dynamicForm);
        component.instance.config = config;
        component.instance.model = model;
        component.instance.wf = wf;
    }
}
