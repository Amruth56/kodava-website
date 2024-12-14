import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  home(){
    console.log('home tab clicked')
  }
  tradition(){
    console.log('tradition tab clicked')
  }
  clan(){
    console.log('clan tab clicked')
  }
  history(){
    console.log('history tab clicked')
  }
  images(){
    console.log('images tab clicked')
  }

}
