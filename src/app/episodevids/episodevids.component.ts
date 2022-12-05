
import { Component,ElementRef, Input, OnInit, SimpleChanges, ViewChild,} from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { SearchResultServiceService } from '../services/search-result-service.service';
import Hls from 'hls.js';


@Component({
  selector: 'app-episodevids',
  templateUrl: './episodevids.component.html',
  styleUrls: ['./episodevids.component.css']
})
export class EpisodevidsComponent implements OnInit {






  constructor(private urlservice: SearchResultServiceService, private sanitizer: DomSanitizer) {

  }
  

  episodedetails: any;
 @Input() id: any;
  pass = false;
  loadcomp = false;
  episodevideo: any;
  check = false;
  urlm:any


 async ngOnInit() {

  this.episodedetails = await this.urlservice.consumetapi(this.id).toPromise();
  if ((this.episodedetails.episodes).length != 0) {
    this.loadcomp = true;
  }
 }


async getEPisode(id:any){

}




  url12:any
  async getepisodevideo(episodeid: any) {
    console.log(episodeid)
    this.episodevideo = await this.urlservice.consumetepisodevid(episodeid).toPromise();
    this.url12 =  (this.episodevideo.sources[4].url);
    console.log(this.url12);
    this.check=true;


  }





    

  





}


