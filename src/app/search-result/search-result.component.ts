import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NONAME } from 'dns';
import { get } from 'https';
import { SearchResultServiceService } from '../services/search-result-service.service';
import { arr, SearchResultArray } from '../services/SearchResultArray';
import * as $ from 'jquery';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {


  constructor(private searchresultserive: SearchResultServiceService,private router:Router,private activatedRoute:ActivatedRoute) { }

  SearchResultArray: any;
  animeId: any;
  synopsis:any;title:any;type:any;duration:any;score:any;year :any;
  img:any;
  loader=true;
  
  searchText:any;

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.activatedRoute.params.subscribe(routeParams => {
      this.searchText = routeParams;
    
    });
  

  
    this.searchresultserive.getResult(this.searchText.value).subscribe((response: Array<arr>) => {
      this.SearchResultArray = response;
      console.log(this.SearchResultArray)
      this.loader=false;
    })


   }

  loadEpisode = false; //inital property for Episodes component
  loadComponent = true; // ................. search-result component

  redirect(id: string ){
   this.router.navigate(["episodes/", id]);

 

  }


  tochild() {
    return this.animeId; //sending anime id
  }











}
