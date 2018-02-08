import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';

import { ControlBinderDirective } from "./components/control-binder/control-binder.directive";

import {TranslateModule} from "ng2-translate";
import {ComponentService} from "./services/component.service";
import {DynamicFormService} from "./services/dynamic-form.service";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule.forRoot()
    ],
    declarations: [
        ControlBinderDirective,
        DynamicFormComponent
    ],
    providers: [
      ComponentService,
      DynamicFormService
    ],
    exports: [
        DynamicFormComponent
    ],
    entryComponents: [
        DynamicFormComponent
    ]
})
export class DynamicFormModule {
  public static addModules(components: Array<{ key: string, component: any }>) {
    for (let component of components)
      ComponentService.add(component.key, component.component);
  }

  public static registerComponents() {
    ComponentService.add("dynamicForm", DynamicFormComponent);
  }
}
