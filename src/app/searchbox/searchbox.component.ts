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
  
  constructor(private router : Router) { }

  ngOnInit(): void {
    

  }
  sendtop(){

      this.router.navigate(["top/page/",1]);
     
  
   
  }

  sendcurrent(){

    this.router.navigate(["current/page/",1]);
   

 
}


sendupcoming(){

  this.router.navigate(["upcoming/page/",1]);
 


}

  sendhome() {
    this.router.navigate(["/"]);
   

  }

  enteredSearchValue!: "";



  SendSearchedvalueMethod() {


    //send data from search field to search-result coponent
    this.router.navigate(['search/', this.enteredSearchValue]);
    $("#navshow").css({
      'margin-left': '0px',
      'margin-right': '0px',
      transition: '  display .1s ease'
    });

    $("#hideme").css({
      display: "none",
      transition: '  display .1s ease'
    });

    $("#hideme2").css({
      display: "none",
      transition: '  display .1s ease'
    });

    $("#showme").css({
      display: "block",
      
      transition: 'display .5s ease'
    });

    $('#formchange').css({
      // "margin-left": "33vw",
      "margin-top": '-30px',
      
      transition: ' margin-top .5s ease'
    });
  
  }

}
