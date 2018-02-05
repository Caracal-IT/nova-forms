import {Injectable} from "@angular/core";
import {TranslateService} from "ng2-translate";

@Injectable()
export class NovaTranslationsService {
  constructor(private translate: TranslateService){

  }

  get currentLang(): string {
    return this.translate.currentLang;
  }

  use(lang: string){
    this.translate.use(lang);
  }

  addLangs(langs: any){
    this.translate.addLangs(langs);
  }

  setDefaultLang(lang: string){
    this.translate.setDefaultLang(lang);
  }

  getBrowserLang(){
    return this.translate.getBrowserLang();
  }
}
