import {Injectable} from '@angular/core';
import {Object as ParseObject, Query as ParseQuery, Parse} from 'parse';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {Fakult} from '../classes/fakult';
import {Group} from '../classes/group';

@Injectable()
export class GroupService {
  public observer: Observable<any[]>;
  private bs: BehaviorSubject<any[]>;
  private _group: Group[] = [];

  constructor() {
    this.bs = new BehaviorSubject<Group[]>(this._group);
    this.observer = this.bs.asObservable();
  }

  async getData() {
    const result = await this.getDataPromise();
    this._group = result;
    this.bs.next(this._group);
    return result;
  }

  getDataPromise(): Promise<Group[]> {
    return new Promise<Group[]>((resolve) => {
      let result: Group[] = [];
      const group = ParseObject.extend('Group');
      const query = new ParseQuery(group);
      query.include('IdFakult');
      query.find().then((_results) => {
          result = _results.map((x) => {
            console.log(x.toJSON());
            return x.toJSON() as Group;
          });
          resolve(result);
        }
      );
    });
  }

  save(group: Group): void {
    const parceGroup = ParseObject.extend('Group');
    const parceFakult = ParseObject.extend('Fakult');
    const savedGroup = new parceGroup();
    const savedGroupFak = new parceFakult();
    // Main
    savedGroup.set('objectId', group.objectId);
    savedGroup.set('GroupName', group.GroupName);
    savedGroup.set('Kurs', group.Kurs);
    // Kafedr
    savedGroupFak.set('objectId', group.IdFakult.objectId);
    savedGroup.set('IdFakult', savedGroupFak);
    savedGroup.set('FakultName', savedGroupFak.get('FakultName'));
    savedGroup.save()
      .then((savedGroup) => {
        console.log('New object created with objectId: ' + savedGroup.id);
        const foundIndex = this._group.findIndex(x => x.objectId === group.objectId);
        console.log('foundIndex: ' + foundIndex);
        if (foundIndex !== -1) {
          this._group[foundIndex] = savedGroup.toJSON();
        } else {
          this._group.push(savedGroup.toJSON());
        }
        this.bs.next(this._group);
      }, (error) => {
        alert('Failed to create new object, with error code: ' + error.message);
      });
  }
}
