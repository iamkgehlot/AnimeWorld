import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import *  as $ from "jquery";

declare var window: any;

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  //redirect to top Anime page
  sendtop() {
    this.router.navigate(["top/page/", 1]);
  }

  //redirect to current anime seasons
  sendcurrent() {
    this.router.navigate(["current/page/", 1]);
  }
  //redirect to upcoming season
  sendupcoming() {
    this.router.navigate(["upcoming/page/", 1]);
  }

  //redirect home
  sendhome() {
    this.router.navigate(["/"]);

  }

  enteredSearchValue!: ""; //two way binded

  SendSearchedvalueMethod() {
    //send data from search field to search-result coponent
    this.router.navigate(['search/', this.enteredSearchValue]);

  }
}
