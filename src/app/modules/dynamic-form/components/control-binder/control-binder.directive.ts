import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";
import { ComponentService } from "../../services/component.service";
import {forEach} from "@angular/router/src/utils/collection";
import {TranslateService} from "ng2-translate";
import {NovaTranslatorService} from "../../models/nova-translator.service";

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

    interpolations: any = {};

    constructor(
        private translate: NovaTranslatorService,
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

        if(this.config && this.config["label"])
          this.interpolations["label"] = this.config.label;
    }

  ngDoCheck() {
      if(this.config){
        this
          .translate
          .get(this.interpolations["label"], this.model)
          .take(1)
          .subscribe(translation => {
            if(translation === "Vehicle.Header"){
              console.log(translation);
            }

             this.config["label"] = this.translate.interpolate(translation, this.model);
          });;
      }
  }
}
