import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { arr2, EpisodesArray } from '../services/EpisodesArray';
import { SearchResultServiceService } from '../services/search-result-service.service';

import { DomSanitizer } from '@angular/platform-browser';
import *  as $ from "jquery";
import { contains } from 'jquery';
import { throws } from 'assert';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  constructor(private urlService: SearchResultServiceService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer,private router :Router) { }
  episodesArray: any;
  episodenum: any; //getting value from search result componet
  dataload = false;
  loader2 = true;
  loader = true;
  datar: any;
  errorep=false;
  erroryt=false;
 errortop=false;
 
  ngOnInit(): void {
    // this.showep();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.activatedRoute.params.subscribe(routeParams => {
      this.episodenum=routeParams;
    });
    // this.episodenum = this.activatedRoute.snapshot.paramMap.get('id');

    console.log(this.episodenum + "epcompo")
  
    setTimeout(() => {
      this.urlService.getEpisodes(this.episodenum.id).subscribe((response: Array<arr2>) => {
        // console.log(response);
        this.episodesArray = response;
        this.showep();
        this.loader = false;
        console.log(response+"Episode detailes")
      }, error =>{
        console.log('404 not found')
      console.log(error)
        this.errorep=true;
        this.loader = false;
 
       })

    }, 500);
    setTimeout(() => {
    this.urlService.getEpFull(this.episodenum.id).subscribe((result: any) => {
      this.datar = result;
    
      this.dataload = true;
      this.loader2 = false;
      console.log("ep full ");

    }, error =>{
      console.log(error)
      console.log('404 not found')
   
      this.loader2 = false;
      this.errortop=true;


     });
  }, 500);
  

  }

  inreview = false;
  showreview() {
    this.inreview = true;
    this.showreviewcss();
  }
relatedclicked=false;
  showrelated() {
    this.showrelations();
    this.relatedclicked=true;
  }


  viddata: any;
  yturl: any;
  ytvid = false;
  showytspin = true;
  noytvidfound = false;
  getyt() {
    this.showytvid();
    setTimeout(() => {
      this.urlService.getVids(this.episodenum.id).subscribe((result: any) => {
        this.showytspin = false;
        this.viddata = result;
        if ((this.viddata.data.promo).length != 0) {
          this.yturl = this.sanitizer.bypassSecurityTrustResourceUrl(this.viddata.data.promo[0].trailer.embed_url);
          this.ytvid = true;
          console.log(result+"getvids");
        } else if (((this.viddata.data.promo).length == 0)) {
          this.showytspin = false;
          this.noytvidfound = true;
          console.log("in Yt no vid found condn")
         
        }
      }, error =>{
        console.log('404 not found')
        console.log(error)
        this.erroryt=true;
        this.showytspin = false;
 
       }
    
      
      )
    }, 500);


  }
  musicurl: any;
  musicvid = false;
  showmusicspin = true;
  nomusicvidfound = false;
  musicviddata: any
  errorss=false;
  getmusic() {
    this.showmusic();
    setTimeout(() => {
      this.urlService.getVids(this.episodenum.id).subscribe((result: any) => {
        this.showmusicspin = false;
        this.musicviddata = result;
        console.log(result.data.music_videos+"get Music videos")
        if ((this.musicviddata.data.music_videos).length != 0) {
          this.musicurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.musicviddata.data.music_videos[0].video.embed_url);
          this.musicvid = true;
        } else if ((this.musicviddata.data.music_videos).length == 0) {
          this.nomusicvidfound = true;
        }
      }, error =>{
       console.log('404 not found')
       this.showmusicspin = false;
       this.errorss=true;
       console.log(error)


      })
    }, 500);
  }
reviewclicked=false;
  sendntoreview() {
    return this.episodenum.id;
    this.reviewclicked=true;
  }


  sendid() {
    return this.episodenum.id;
  }


  showep() {


    $("#nav-yt").css({
      "display": "none",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'

    });
    $("#nav-Episode").css({
      "display": "contents",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });
    $("#nav-images").css({
      "display": "none",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });
    $("#nav-relations").css({
      "display": "none",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });

    $("#nav-music").css({
      "display": "none",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });

  }

  showreviewcss() {
    $("#nav-yt").css({
      "display": "none",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'

    });
    $("#nav-Episode").css({
      "display": "none",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });
    $("#nav-images").css({
      "display": "contents",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });
    $("#nav-relations").css({
      "display": "none",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });

    $("#nav-music").css({
      "display": "none",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });

  }


  showrelations() {

    $("#nav-yt").css({
      "display": "none",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'

    });
    $("#nav-Episode").css({
      "display": "none",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });
    $("#nav-images").css({
      "display": "none",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });
    $("#nav-relations").css({
      "display": "contents",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });

    $("#nav-music").css({
      "display": "none",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });
  }


  showytvid() {

    $("#nav-yt").css({
      "display": "block",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });
    $("#nav-Episode").css({
      "display": "none",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });
    $("#nav-music").css({
      "display": "none",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });

    $("#nav-relations").css({
      "display": "none",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });

    $("#nav-images").css({
      "display": "none",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });
  }

  showmusic() {

    $("#nav-yt").css({
      "display": "none",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });
    $("#nav-Episode").css({
      "display": "none",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });
    $("#nav-images").css({
      "display": "none",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });
    $("#nav-relations").css({
      "display": "none",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });

    $("#nav-music").css({
      "display": "block",
      "padding-left": "9vw",
      "padding-right": "9vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });
  }



















}


