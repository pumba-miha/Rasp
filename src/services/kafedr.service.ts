import {Injectable} from '@angular/core';
import {Object as ParseObject, Query as ParseQuery, Parse} from 'parse';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {Kafedr} from '../classes/kafedr';

@Injectable()
export class KafedrService {
  public observer: Observable<any[]>;
  private bs: BehaviorSubject<any[]>;
  // private sub: any;
  private _kafedr: Kafedr[] = [];

  constructor() {
    this.bs = new BehaviorSubject<Kafedr[]>(this._kafedr);
    this.observer = this.bs.asObservable();
  }

  async getData() {
    const result = await this.getDataPromise();
    this._kafedr = result;
    this.bs.next(this._kafedr);
    return result;
  }

  getDataPromise(): Promise<Kafedr[]> {
    return new Promise<Kafedr[]>((resolve) => {
      let result: Kafedr[] = [];
      const kafedr = ParseObject.extend('Kafedr');
      const query = new ParseQuery(kafedr);
      query.include('IdFakult');
      query.find().then((_results) => {
          result = _results.map((x) => {
            console.log(x.toJSON());
            return x.toJSON() as Kafedr;
          });
          resolve(result);
        }
      );
    });
  }
  saveKafedr(kafedr: Kafedr): void {
    const parceKafedr = ParseObject.extend('Kafedr');
    const parceFakult = ParseObject.extend('Fakult');
    const savedKafedr = new parceKafedr();
    const savedKafedrFakult = new parceFakult();
    // Main
    parceKafedr.set('objectId', kafedr.objectId);
    parceKafedr.set('Name', kafedr.KafedrName);
    // Fakult
    savedKafedrFakult.set('objectId', kafedr.IdFakult.objectId);
    parceKafedr.set('IdKafedr', savedKafedrFakult);
    parceKafedr.save()
      .then((savedPrepod) => {
        alert('New object created with objectId: ' + savedPrepod.id);
      }, (error) => {
        alert('Failed to create new object, with error code: ' + error.message);
      });
  }
/*
  getSubscribe(): void {
    const query = new Parse.Query('Kafedr');
    this.sub = query.subscribe();
    this.sub.on('open', () => {
      console.log('Opened');
    });
    this.sub.on('update', (object) => {
      console.log('update');
      const foundIndex = this._kafedr.findIndex(x => x.objectId === object.id);
      const res = object.toJSON() as Prepod;
      this._kafedr[foundIndex] = res;
      this.bs.next(this._kafedr);
    });
    this.sub.on('create', (object) => {
      console.log('create');
      const res = object.toJSON() as Prepod;
      this._kafedr.push(res);
      this.bs.next(this._kafedr);
    });
    this.sub.on('delete', (object) => {
      console.log('delete');
      const foundIndex = this._kafedr.findIndex(x => x.objectId === object.id);
      this._kafedr.splice(foundIndex, 1);
      this.bs.next(this._kafedr);
    });
  }
*/
}
