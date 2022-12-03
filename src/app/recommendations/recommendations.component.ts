import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResultServiceService } from '../services/search-result-service.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  constructor(private urlservice: SearchResultServiceService, private router: Router) { }

  datar: any;
  @Input() id: any;
  loadcomponent = false;
  ngOnInit(): void {

    setTimeout(() => {
      this.urlservice.getRecommendations(this.id).subscribe((result: any) => {
        this.datar = result;

        if ((this.datar.data).length != 0) {
          this.loadcomponent = true;


        } else {
          this.loadcomponent = false;

        }
      },
        err => {
          console.log("404 error")
          this.loadcomponent = false;
        }
      )
    }, 3000);


  }
  redirect(id: string) {



    this.router.navigateByUrl('/episodes/' + id);



  }

}
