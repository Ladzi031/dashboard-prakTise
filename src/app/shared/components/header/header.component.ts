import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() toggleSide = new EventEmitter<any>();
  constructor(){

  }

  public toggleSideBar(){
    this.toggleSide.emit("toggling");
  }
}
