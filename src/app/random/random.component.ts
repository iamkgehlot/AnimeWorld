import { Component, OnInit, } from '@angular/core';
import {  Router } from '@angular/router';
import { SearchResultServiceService } from '../services/search-result-service.service';


@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  constructor(private urlService: SearchResultServiceService, private router: Router) { }

  datar: any;
  dataload = false;
  loader2 = true;
  errortop = false;
  ngOnInit(): void {
    //get random content
    setTimeout(() => {
      this.urlService.getRandom().subscribe((result: any) => {
        this.datar = result;
        this.dataload = true;
        this.loader2 = false;
      }, error => {
        this.loader2 = false;
        this.errortop = true;
      });
    }, 500);

  }

  //refresh only this component
  reloadcomp() {
    this.dataload = false;
    this.loader2 = true;
    this.errortop = false;
    this.ngOnInit();
  }

  //get anime details
  redirect(id: string) {
    this.router.navigateByUrl('/episodes/' + id);
  }




}
