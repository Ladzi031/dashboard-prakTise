import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {
  sideBarOpen:boolean = false;
  constructor(){

  }
  receiveMessage(message: any){
    this.sideBarOpen = !this.sideBarOpen;   // simply negate current state.
  }
}
