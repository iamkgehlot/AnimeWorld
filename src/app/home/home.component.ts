import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResultServiceService } from '../services/search-result-service.service';
import { Subject } from "rxjs";
import *  as $ from "jquery";
import { RandomComponent } from '../random/random.component';





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
  random = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.urlservice.getTop(1).subscribe((result: any) => {
        this.randombaner = result;
        this.random = false;


      })

    }, 1000);

    setTimeout(() => {
      this.urlservice.getTopUpcoming().subscribe((result: any) => {
        this.upcoming = result;
        this.up = false;
      })
    }, 2000);


    setTimeout(() => {

      this.up = false;

      this.urlservice.getpopmov().subscribe((result: any) => {
        this.popmov = result;
        this.pop = false;

      })


    }, 3000);



  }
  @ViewChild(RandomComponent) childComponent!: RandomComponent;
  onRefreshClick(){ 
    this.childComponent.reloadcomp() 
}
  redirect(id: string) {
    console.log(id + "epidpage");
    this.router.navigate(['episodes/', id])

  }




}
