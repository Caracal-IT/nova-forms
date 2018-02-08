import {ModuleWithProviders, NgModule, Provider} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';

import { ControlBinderDirective } from "./components/control-binder/control-binder.directive";

import {TranslateLoader, TranslateModule, TranslateStaticLoader} from "ng2-translate";
import {ComponentService} from "./services/component.service";
import {DynamicFormService} from "./services/dynamic-form.service";
import {Http} from "@angular/http";
import {NovaTranslationsService} from "./services/nova.translations.service";

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
      DynamicFormService,
      NovaTranslationsService
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
