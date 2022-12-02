import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
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
loadcomponent=false;

  ngOnInit(): void {
   


    this.currentpage = this.activatedRoute.snapshot.paramMap.get('num');
    this.check1 = Number(this.currentpage);

    this.urlservice.getCurrentSeason(this.currentpage).subscribe((result: any) => {

      this.datar = result;
      console.log(result)
      this.loadcomponent=true;
    })
    $("#navshow").css({
     
      transition: '  display .1s ease'
    });

    $("#hideme").css({
      
      transition: '  display .1s ease'
    });

    $("#hideme2").css({
   
      transition: '  display .1s ease'
    });

    $("#showme").css({
   

      transition: 'display .5s ease'
    });

    $('#formchange').css({
   

      transition: ' margin-top .5s ease'
    });
   
  }
  nextpage: any;
  prevPage() {
    

    console.log("prev click1")
    if (this.datar.pagination.current_page > 1) {
      this.nextpage = this.datar.pagination.current_page - 1;
      this.router.navigate(['current/page/', this.nextpage]).then(page => { window.location.reload(); });
      console.log(this.nextpage)
   
    }
    console.log("out")
   

  }
  nextPage() {

    console.log("next click1")
    if (this.datar.pagination.last_visible_page != this.datar.pagination.current_page) {
      this.nextpage = this.datar.pagination.current_page + 1;
      this.router.navigate(['current/page/', this.nextpage]).then(page => { window.location.reload(); });
      console.log(this.nextpage)
    }
    console.log("out")

  }

  redirect(id: string) {
    console.log(id + "epidpage");
    this.router.navigateByUrl( 'episodes/'+id);

  }
}