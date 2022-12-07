import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchResultServiceService } from '../services/search-result-service.service';
declare var window: any;

@Component({
  selector: 'app-currentseason',
  templateUrl: './currentseason.component.html',
  styleUrls: ['./currentseason.component.css']
})
export class CurrentseasonComponent implements OnInit {

  constructor(private urlservice: SearchResultServiceService, private router: Router, private activatedRoute: ActivatedRoute) { }

  datar: any;
  currentpage: any;
  check1!: number;
  loadcomponent = false;

  ngOnInit(): void {

    this.currentpage = this.activatedRoute.snapshot.paramMap.get('num');
    this.check1 = Number(this.currentpage);

    //current page subscribe
    this.urlservice.getCurrentSeason(this.currentpage).subscribe((result: any) => {
      this.datar = result;
      this.loadcomponent = true;
    })
  }

  //prev page
  nextpage: any;
  prevPage() {
    if (this.datar.pagination.current_page > 1) {
      this.nextpage = this.datar.pagination.current_page - 1;
      this.router.navigate(['current/page/', this.nextpage]).then(page => { window.location.reload(); });

    }


  }

  //next page
  nextPage() {
    console.log("next click1")
    if (this.datar.pagination.last_visible_page != this.datar.pagination.current_page) {
      this.nextpage = this.datar.pagination.current_page + 1;
      this.router.navigate(['current/page/', this.nextpage]).then(page => { window.location.reload(); });

    }
  }

  redirect(id: string) {
    this.router.navigateByUrl('episodes/' + id);
  }
}
