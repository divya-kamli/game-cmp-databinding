import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  //@Output('onstartgame') startGameEvent=new EventEmitter<{counterNo:number,refNo:number}>();
  @Output('onstartgame') startGameEvent=new EventEmitter<number>();
  constructor() { }

  refNo;
  counter:number=0;
  ngOnInit() {
  }

  OnStart()
  {
    console.log('in game constrol start='+this.counter);
   
    this.refNo=setInterval( ()=>{this.startGameEvent.emit(this.counter);
      this.counter++;
    },1000);
    console.log('this.refNo='+this.refNo);
   // this.refNo=setInterval(,1000);
    // this.startGameEvent.emit(this.counter);
    
  }
  OnStop()
  {
    //alert('hiii');
    console.log('this.refNo='+this.refNo);
    clearInterval(this.refNo);
  }


}
