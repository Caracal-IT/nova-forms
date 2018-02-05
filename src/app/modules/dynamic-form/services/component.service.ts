import {ComponentFactory, ComponentFactoryResolver, Injectable, Type} from "@angular/core";

@Injectable()
export class ComponentService {
    static components: {[type: string]: Type<any>} = {}

    constructor(private resolver: ComponentFactoryResolver) { }

    resolve(component: string) : ComponentFactory<any> {
        if (!ComponentService.components[component]) {
            const supportedTypes = Object.keys(ComponentService.components).join(', ');
            throw new Error(
                `Trying to use an unsupported type (${component}).
                              Supported types: ${supportedTypes}`
            );
        }

        return this.resolver.resolveComponentFactory<any>(ComponentService.components[component]);
    }

    static add(key: string, component: any){
        if (ComponentService.components[key]) {
            throw new Error(
                `A component with the ${key} already exists`
            );
        }

        ComponentService.components[key] = component;
    }
}
