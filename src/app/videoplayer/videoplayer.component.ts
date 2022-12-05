import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent implements OnInit {

  constructor() { }
@Input() url:any;
  ngOnInit(): void {
    console.log(this.url+"cvvvv")
  }

  

}
