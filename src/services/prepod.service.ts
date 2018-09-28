import {Injectable} from '@angular/core';
import {Prepod} from '../classes/prepod';
import {Object as ParseObject, Query as ParseQuery} from 'parse';
import {BehaviorSubject, from, Observable} from 'rxjs/index';

@Injectable()
export class PrepodService {
  //private _prepods: BehaviorSubject<any[]> = new BehaviorSubject([]);
  private observer: Observable<any[]>;//= this._prepods.asObservable();

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
            res.objectId = x.id;
            res.createdAt = x.get('createdAt');
            res.updatedAt = x.get('updatedAt');
            res.Name = x.get('Name');
            res.SecondName = x.get('SecondName');
            res.MiddleName = x.get('MiddleName');
            // Kafedr
            res.Kafedr.objectId = x.get('IdKafedr').id;
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

  savePrepod(prepod: Prepod): void {
    const parcePrepod = ParseObject.extend("Prepod");
    const parceKafedr = ParseObject.extend("Kafedr");
    const savedPrepod = new parcePrepod();
    const savedPrepodKaf = new parceKafedr();

    //Main
    savedPrepod.set('objectId', prepod.objectId);
    savedPrepod.set('Name', prepod.Name);
    savedPrepod.set('SecondName', prepod.SecondName);
    savedPrepod.set('MiddleName', prepod.MiddleName);
    //Kafedr
    savedPrepodKaf.set('objectId', prepod.Kafedr.objectId);
    //savedPrepodKaf.set('Name', prepod.Kafedr.Name);
    savedPrepod.set('IdKafedr', savedPrepodKaf);

    savedPrepod.save()
      .then((savedPrepod) => {
        // Execute any logic that should take place after the object is saved.
        alert('New object created with objectId: ' + savedPrepod.id);
      }, (error) => {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      });
    this.asObservable();
  }
}


