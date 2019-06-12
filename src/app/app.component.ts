import { Component } from '@angular/core';
import { DD } from '@dd/dd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-with-wallabyjs';
  constructor(){
    var dd:DD;
  }
}
