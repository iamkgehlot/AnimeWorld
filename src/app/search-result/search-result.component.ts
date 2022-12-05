import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchResultServiceService } from '../services/search-result-service.service';
import { arr } from '../services/SearchResultArray';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {


  constructor(private searchresultserive: SearchResultServiceService, private router: Router, private activatedRoute: ActivatedRoute) { }
  SearchResultArray: any;
  animeId: any;
  synopsis: any; title: any; type: any; duration: any; score: any; year: any;
  img: any;
  loader = true;
  searchText: any;

  ngOnInit(): void {

    // get route params
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.activatedRoute.params.subscribe(routeParams => {
      this.searchText = routeParams;

    });

    //get search result
    this.searchresultserive.getResult(this.searchText.value).subscribe((response: Array<arr>) => {
      this.SearchResultArray = response;
      console.log(this.SearchResultArray)
      this.loader = false;
    })

  }

  loadEpisode = false; //inital property for Episodes component
  loadComponent = true; // ................. search-result component
  redirect(id: string) {
    this.router.navigate(["episodes/", id]);
  }

  tochild() {
    return this.animeId; //get anime details
  }











}
