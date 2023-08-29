
import { Component,Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SearchResultServiceService } from '../../services/search-result-service.service';

@Component({
  selector: 'app-episodevids',
  templateUrl: './episodevids.component.html',
  styleUrls: ['./episodevids.component.css']
})
export class EpisodevidsComponent implements OnInit {

  constructor( private urlservice: SearchResultServiceService) {

  }

  episodedetails: any;
  @Input() id: any;
  pass = false;
  loadcomp = false;
  episodevideo: any;
  check = false;
  urlm: any
  totalepisodes: any;
  totalPages: any;
  currentpage = 1;
  hasNextPage = false;
  min = 0;
  max = 10;
  hasPrevPage = false;
  clickonwatchspin = false;
  noContentFound = false;
  firstepisode:any;

  async ngOnInit() {
    //get episodes detail
    if (this.id >= 0) {

      this.episodedetails = await this.urlservice.consumetapi(this.id).toPromise();
      if ((this.episodedetails?.episodes)?.length != 0) {
        this.loadcomp = true;
        this.totalepisodes = (this.episodedetails?.episodes)?.length
        this.totalPages = Math.ceil(this.totalepisodes / 10)
        this.firstepisode = await this.urlservice.consumetepisodevid(this.episodedetails?.episodes[1].id).toPromise();
        if (this.totalPages > 1) {
          this.hasNextPage = true


        } else {
          this.hasNextPage = false;
        }
      } else if ((this.episodedetails?.episodes)?.length == 0) {
        this.noContentFound = true;
      }
    } else {
      this.noContentFound = true;
    }

  }


  videoid: any;
  url12: any
  title: any;
  backupurl: any;
  //get episode video
  async getepisodevideo(episodeid: any, title: any) {
    this.title = title;
    this.videoid = episodeid;
    this.clickonwatchspin = true;
    this.episodevideo = await this.urlservice.consumetepisodevid(episodeid).toPromise();
    for (let i = 0; i <= (this.episodevideo?.sources).length; i++) {

      if (this.episodevideo?.sources[i]?.url) {
        this.url12 = (this.episodevideo?.sources[i - 1].url);
        this.check = true;
        break;
      }
    }
  }


  checkpage: any
  //next set of episode
  NextPage() {
    this.min += 10;
    this.max += 10;
    this.hasPrevPage = true;
    this.hasNextPage = false;
    if (this.currentpage + 1 < this.totalPages) {
      this.hasNextPage = true;
      this.currentpage += 1;
    } else {

      this.hasNextPage = false;
      this.currentpage += 1;
    }
  }

  //previous set of episode
  PrevPage() {
    this.min -= 10;
    this.max -= 10;
    this.hasPrevPage = true;
    this.currentpage -= 1;
    this.hasNextPage = true;
    if (this.currentpage < 2) {
      this.hasPrevPage = false;
    }

  }
change=false;
  onclick(){
this.change=true;
    var body = $("html, body");
    console.log("clcicke")
    body.stop().animate({scrollTop:$('video').offset()?.top}, '10000');
   
  }
  scrollToTop(): void {
    window.scrollTo(0, 600);
  }

}










