import { Injectable } from "@angular/core";
import {ComponentService} from "./component.service";

@Injectable()
export class DynamicFormService {
    constructor(private componetService: ComponentService){ }
    
    createComponent(container: any, config: any, model: any, wf: any) {
        const dynamicForm = this.componetService.resolve("dynamicForm");
        container.clear();
        
        var component = container.createComponent(dynamicForm);
        component.instance.config = config;
        component.instance.model = model;
        component.instance.wf = wf;
    }
}