import { Component } from '@angular/core';
import {ParseService} from '../services/parse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private parseServise: ParseService) {}

}
