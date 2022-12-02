import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { arr2, EpisodesArray } from '../services/EpisodesArray';
import { SearchResultServiceService } from '../services/search-result-service.service';
import { Subject } from "rxjs";

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {





  constructor(private urlService: SearchResultServiceService,private router :Router) { }
  datar: any;
  dataload = false;
  loader2 = true;
  errortop = false;
  ngOnInit(): void {



    setTimeout(() => {
      this.urlService.getRandom().subscribe((result: any) => {
        this.datar = result;
        console.log(this.datar.data.title);
        this.dataload = true;
        this.loader2 = false;


      }, error => {
        console.log('404 not found')

        this.loader2 = false;
        this.errortop = true;


      });
    }, 500);

  }


  reloadcomp() {

    this.dataload = false;
    this.loader2 = true;
    this.errortop = false;
    this.ngOnInit();


  }

  redirect(id: string) {
      
      
      
    this.router.navigateByUrl('/episodes/'+id);



  }




}
