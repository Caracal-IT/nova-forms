import {Observable} from "rxjs/Observable";

export abstract class NovaTranslatorService{
  abstract get(key: string, interpolateParams: any|undefined): Observable<string|any>;
  abstract interpolate(expr: string, params?: any): string;
}
