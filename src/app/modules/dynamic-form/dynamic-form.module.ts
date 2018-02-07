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

export function createTranslateLoader(http: Http){
  return new TranslateStaticLoader(http,  './assets/i18n', '.json');
}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule.forRoot({
          provide: TranslateLoader, // './assets/i18n'   ./api/localize
          useFactory: createTranslateLoader,
          deps: [Http]
        }),
    ],
    declarations: [
        ControlBinderDirective,
        DynamicFormComponent
    ],
    exports: [
        DynamicFormComponent
    ],
    entryComponents: [
        DynamicFormComponent
    ]
})
export class DynamicFormModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: DynamicFormModule,
            providers: [
                ComponentService,
                DynamicFormService,
                NovaTranslationsService
            ]
        };
    }

    public static addModules(components: Array<{key: string, component: any}>){
        for(let component of components)
          ComponentService.add(component.key, component.component);
    }

    public static registerComponents(){
        ComponentService.add("dynamicForm", DynamicFormComponent);
    }
}
