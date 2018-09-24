import {Injectable} from '@angular/core';
import {Prepod} from '../classes/prepod';
import {Object as ParseObject, Query as ParseQuery} from 'parse';
import {BehaviorSubject, from, Observable} from 'rxjs/index';

@Injectable()
export class PrepodService {
  private _prepods: BehaviorSubject<any[]> = new BehaviorSubject([]);
  private observer: Observable<any[]> = this._prepods.asObservable();

  getPrepod(id?: string ): Promise<Prepod[]> {
    return new Promise<Prepod[]>((resolve) => {
      let result: Prepod[] = [];
      const prepod = ParseObject.extend('Prepod');
      const query = new ParseQuery(prepod);
      query.include('IdKafedr');
      if (id) {
        query.equalTo('objectId', id);
      }
      query.find({
        success: function (_results) {
          result = _results.map((x) => {
            const res = new Prepod();
            res.objectId = x.get('objectId');
            res.createdAt = x.get('createdAt');
            res.updatedAt = x.get('updatedAt');
            res.Name = x.get('Name');
            res.SecondName = x.get('SecondName');
            res.MiddleName = x.get('MiddleName');
            // Kafedr
            res.Kafedr.objectId = x.get('IdKafedr').get('objectId');
            res.Kafedr.Name = x.get('IdKafedr').get('Name');
            return res;
          });
          resolve(result);
        }
      });
    });
  }

  asObservable(id?: string): Observable<Prepod[]> {
    this.observer = from(this.getPrepod(id));
    return this.observer;
  }

}
