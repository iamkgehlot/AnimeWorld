import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchResultServiceService } from '../../services/search-result-service.service';
import *  as $ from "jquery";
declare var window: any;

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {


  constructor(private urlservice: SearchResultServiceService, private router: Router, private activatedRoute: ActivatedRoute) { }
  datar: any;
  currentpage: any;
  check1!: number;
  loadcomponent = false;

  ngOnInit(): void {



    this.currentpage = this.activatedRoute.snapshot.paramMap.get('num');
    this.check1 = Number(this.currentpage);

    this.urlservice.getTop(this.currentpage).subscribe((result: any) => {

      this.datar = result;
      this.loadcomponent = true;
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



    if (this.datar.pagination.current_page > 1) {
      this.nextpage = this.datar.pagination.current_page - 1;
      this.router.navigate(['top/page/', this.nextpage]).then(page => { window.location.reload(); });

    }


  }
  nextPage() {

    if (this.datar.pagination.last_visible_page != this.datar.pagination.current_page) {
      this.nextpage = this.datar.pagination.current_page + 1;
      this.router.navigate(['top/page/', this.nextpage]).then(page => { window.location.reload(); });
    }

  }

  redirect(id: string) {
    this.router.navigateByUrl('episodes/' + id);

  }

}
