import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lstNumbers=[];


  onStartGame(num)
  {
    console.log('in app comp start='+num);
    this.lstNumbers.push(num);
  }
}
