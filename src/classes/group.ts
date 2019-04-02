import {BaseClass} from './baseClass';
import {Fakult} from './fakult';

export class Group extends BaseClass {
  public GroupName = '';
  public Kurs = 1;
  public IdFakult = new Fakult();
}
