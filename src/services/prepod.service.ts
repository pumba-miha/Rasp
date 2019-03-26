import {Injectable} from '@angular/core';
import {Prepod} from '../classes/prepod';
import {Object as ParseObject, Query as ParseQuery, Parse} from 'parse';
import {BehaviorSubject, Observable} from 'rxjs/index';

@Injectable()
export class PrepodService {
  public observer: Observable<any[]>;
  private bs: BehaviorSubject<any[]>;
  private sub: any;
  private _prepod: Prepod[] = [];

  constructor() {
    this.bs = new BehaviorSubject<Prepod[]>(this._prepod);
    this.observer = this.bs.asObservable();
  }

  async getData() {
    this.getSubscribe();
    const result = await this.getDataPromise();
    this._prepod = result;
    this.bs.next(this._prepod);
    return result;
  }

  getDataPromise(): Promise<Prepod[]> {
    return new Promise<Prepod[]>((resolve) => {
      let result: Prepod[] = [];
      const prepod = ParseObject.extend('Prepod');
      const query = new ParseQuery(prepod);
      query.include('IdKafedr');
      query.find().then((_results) => {
          result = _results.map((prep) => {
            console.log(prep.toJSON());
            return prep.toJSON() as Prepod;
          });
          resolve(result);
        }
      );
    });
  }

  getSubscribe(): void {
    const query = new Parse.Query('Prepod');
    query.include('IdKafedr');
    this.sub = query.subscribe();
    this.sub.on('open', () => {
      console.log('Opened');
    });
    this.sub.on('update', (object) => {
      console.log('update');
      const foundIndex = this._prepod.findIndex(x => x.objectId === object.id);
      const res = object.toJSON() as Prepod;
      this._prepod[foundIndex] = res;
      this.bs.next(this._prepod);
    });
    this.sub.on('create', (object) => {
      console.log('create');
      const res = object.toJSON() as Prepod;
      this._prepod.push(res);
      this.bs.next(this._prepod);
    });
    this.sub.on('delete', (object) => {
      console.log('delete');
      const foundIndex = this._prepod.findIndex(x => x.objectId === object.id);
      this._prepod.splice(foundIndex, 1);
      this.bs.next(this._prepod);
    });
  }

  savePrepod(prepod: Prepod): void {
    const parcePrepod = ParseObject.extend('Prepod');
    const parceKafedr = ParseObject.extend('Kafedr');
    const savedPrepod = new parcePrepod();
    const savedPrepodKaf = new parceKafedr();
    // Main
    savedPrepod.set('objectId', prepod.objectId);
    savedPrepod.set('Name', prepod.Name);
    savedPrepod.set('SecondName', prepod.SecondName);
    savedPrepod.set('MiddleName', prepod.MiddleName);
    // Kafedr
    savedPrepodKaf.set('objectId', prepod.IdKafedr.objectId);
    savedPrepod.set('IdKafedr', savedPrepodKaf);
    savedPrepod.save()
      .then((savedPrepod) => {
        alert('New object created with objectId: ' + savedPrepod.id);
      }, (error) => {
        alert('Failed to create new object, with error code: ' + error.message);
    });
  }
}


