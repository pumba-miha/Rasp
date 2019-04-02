import {Injectable} from '@angular/core';
import {Object as ParseObject, Query as ParseQuery, Parse} from 'parse';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {Aud} from '../classes/aud';

@Injectable()
export class AudService {
  public observer: Observable<any[]>;
  private bs: BehaviorSubject<any[]>;
  private _aud: Aud[] = [];

  constructor() {
    this.bs = new BehaviorSubject<Aud[]>(this._aud);
    this.observer = this.bs.asObservable();
  }

  async getData() {
    const result = await this.getDataPromise();
    this._aud = result;
    this.bs.next(this._aud);
    return result;
  }

  getDataPromise(): Promise<Aud[]> {
    return new Promise<Aud[]>((resolve) => {
      let result: Aud[] = [];
      const fakult = ParseObject.extend('Aud');
      const query = new ParseQuery(fakult);
      query.find().then((_results) => {
          result = _results.map((x) => {
            console.log(x.toJSON());
            return x.toJSON() as Aud;
          });
          resolve(result);
        }
      );
    });
  }

  save(aud: Aud): void {
    const parceAud = ParseObject.extend('Aud');
    const savedAud = new parceAud();
    // Main
    savedAud.set('objectId', aud.objectId);
    savedAud.set('AudName', aud.AudName);
    savedAud.set('Capacity', aud.Capacity);
    savedAud.save()
      .then((savedAud) => {
        // alert('New object created with objectId: ' + savedKafedr.id);
        const foundIndex = this._aud.findIndex(x => x.objectId === aud.objectId);
        if (foundIndex !== -1) {
          this._aud[foundIndex] = savedAud.toJSON();
        } else {
          this._aud.push(savedAud.toJSON());
        }
        this.bs.next(this._aud);
      }, (error) => {
        alert('Failed to create new object, with error code: ' + error.message);
      });
  }
}
