import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { arr2 } from '../services/EpisodesArray';
import { SearchResultServiceService } from '../services/search-result-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import *  as $ from "jquery";


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  Anilistid: any;
  constructor(private urlService: SearchResultServiceService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer, private router: Router) { }
  episodesArray: any;
  episodenum: any; //getting value from search result componet
  dataload = false;
  loader2 = true;
  loader = true;
  datar: any;
  errorep = false;
  erroryt = false;
  errortop = false;
  comparedata: any;
  lengths: any
  
  ngOnInit(): void {
    this.urlService.compare().subscribe((result: any) => {
      this.comparedata = result;
      for(let i =0;i<= (result).length+1;i++){
        // console.log(this.comparedata[i].mal_id)
        if(this.comparedata[i].mal_id==this.episodenum.id){
          if((this.comparedata[i].anilist_id)!=0){
            this.Anilistid=this.comparedata[i]["anilist_id"];
            if(!this.Anilistid){
              this.Anilistid=-1;
            }
            break;
          }
          
          break;
        }
      }
    })
     
    
    //getting params from routes
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.activatedRoute.params.subscribe(routeParams => {
      this.episodenum = routeParams;
    });



   
      //getFull Episode Details for banner
      this.urlService.getEpFull(this.episodenum.id).subscribe((result: any) => {
        this.datar = result;
        this.dataload = true;
        this.loader2 = false;

      },(error:any)  => {
        this.loader2 = false;
        this.errortop = true;
      });
      //episode details
      this.urlService.getEpisodes(this.episodenum.id).subscribe((response: Array<arr2>) => {
        this.episodesArray = response;
        this.showep();
        this.loader = false;

      }, error => {
        this.errorep = true;
        this.loader = false;

      })

    

  }

  //review/comment component
  inImages = false;
  showImages() {
    this.inImages = true;
    this.showImagescss();
  }


  //relations component
  relatedclicked = false;
  showrelated() {
    this.showrelations();
    this.relatedclicked = true;
  }

  //youtube component
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
        } else if (((this.viddata.data.promo).length == 0)) {
          this.showytspin = false;
          this.noytvidfound = true;

        }

      }, error => {
        this.erroryt = true;
        this.showytspin = false;

      }
      )
    }, 500);


  }

  //get music
  musicurl: any;
  musicvid = false;
  showmusicspin = true;
  nomusicvidfound = false;
  musicviddata: any
  errorss = false;
  getmusic() {
    this.showmusic();
    setTimeout(() => {
      this.urlService.getVids(this.episodenum.id).subscribe((result: any) => {
        this.showmusicspin = false;
        this.musicviddata = result;
        if ((this.musicviddata.data.music_videos).length != 0) {
          this.musicurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.musicviddata.data.music_videos[0].video.embed_url);
          this.musicvid = true;
        } else if ((this.musicviddata.data.music_videos).length == 0) {
          this.nomusicvidfound = true;
        }
      }, error => {
        this.showmusicspin = false;
        this.errorss = true;


      })
    }, 500);
  }



  //send id to components
  sendid() {
    return this.episodenum.id;
  }


  //css change on clicks

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

  showImagescss() {
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
      "padding-left": "2vw",
      "padding-right": "2vw",
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
      "padding-left": "2vw",
      "padding-right": "2vw",
      "padding-top": "3vw",
      transition: '  display .1s ease'
    });
  }



















}


