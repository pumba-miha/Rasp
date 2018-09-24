import {Injectable} from '@angular/core';
import {Object as ParseObject, Query as ParseQuery} from 'parse';
import {BehaviorSubject, from, Observable} from 'rxjs/index';
import {Kafedr} from '../classes/kafedr';

@Injectable()
export class KafedrService {
  private _kafedrs: BehaviorSubject<any[]> = new BehaviorSubject([]);
  private observer: Observable<any[]> = this._kafedrs.asObservable();

  getKafedr(id?: string ): Promise<Kafedr[]> {
    return new Promise<Kafedr[]>((resolve) => {
      let result: Kafedr[] = [];
      const kafedr = ParseObject.extend('Kafedr');
      const query = new ParseQuery(kafedr);
      if (id) {
        query.equalTo('objectId', id);
      }
      query.find({
        success: function (_results) {
          result = _results.map((x) => {
            const res = new Kafedr();
            res.objectId = x.get('objectId');
            res.createdAt = x.get('createdAt');
            res.updatedAt = x.get('updatedAt');
            res.Name = x.get('Name');
            return res;
          });
          resolve(result);
        }
      });
    });
  }

  asObservable(id?: string): Observable<Kafedr[]> {
    this.observer = from(this.getKafedr(id));
    return this.observer;
  }

}
