import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResultServiceService } from '../services/search-result-service.service';

import *  as $ from "jquery";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private urlservice: SearchResultServiceService, private router: Router) { }

  randombaner: any;
  upcoming: any;
  popmov: any;
  up = true;
  pop = true;
  random = false;
  api3 = false;

  ngOnInit(): void {

    //calling 3 apis at max
       //banner
      this.urlservice.getTop(1).subscribe((result: any) => {
        this.randombaner = result;
        if ((this.randombaner.data).lenghth != 0) {
          this.random = true;
        }
        else {
          this.random = false;
        }

      })
    setTimeout(() => {
   
      // //pop tv
      this.urlservice.getTopUpcoming().subscribe((result: any) => {
        this.upcoming = result;
        if ((this.upcoming.data).length != 0) {
          this.up = false;
        }

      
    })
        //pop movie
        this.urlservice.getpopmov().subscribe((result: any) => {
          this.popmov = result;
          if ((this.popmov.data).length != 0) {
            this.pop = false;
          }

        })

      }, 1000);

      setTimeout(() => { this.api3 = true; }, 2000);

    }

  //Anime Details
  redirect(id: string) {

      this.router.navigate(['episodes/', id])

    }


}
