import {Injectable} from '@angular/core';
import {Object as ParseObject, Query as ParseQuery, Parse} from 'parse';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {Fakult} from '../classes/fakult';

@Injectable()
export class FakultService {
  public observer: Observable<any[]>;
  private bs: BehaviorSubject<any[]>;
  private _fakult: Fakult[] = [];

  constructor() {
    this.bs = new BehaviorSubject<Fakult[]>(this._fakult);
    this.observer = this.bs.asObservable();
  }

  async getData() {
    const result = await this.getDataPromise();
    this._fakult = result;
    this.bs.next(this._fakult);
    return result;
  }

  getDataPromise(): Promise<Fakult[]> {
    return new Promise<Fakult[]>((resolve) => {
      let result: Fakult[] = [];
      const fakult = ParseObject.extend('Fakult');
      const query = new ParseQuery(fakult);
      query.find().then((_results) => {
          result = _results.map((x) => {
            console.log(x.toJSON());
            return x.toJSON() as Fakult;
          });
          resolve(result);
        }
      );
    });
  }
}
