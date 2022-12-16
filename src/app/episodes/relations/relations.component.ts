import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResultServiceService } from '../../services/search-result-service.service';

@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.css']
})


export class RelationsComponent implements OnInit {

  constructor(private urlservice: SearchResultServiceService, private router: Router) { }

  relations: any;
  loadcomponet = false;
  loadspinner = true;
  notfound = false;
  @Input() id: any

  //get relation data
  ngOnInit(): void {
  
      this.urlservice.getRelations(this.id).subscribe((result: any) => {
        this.relations = result;
        this.loadspinner = false;
        if ((this.relations.data).length != 0) {
          this.loadcomponet = true;
        } else {
          this.loadcomponet = false;
          this.notfound = true;
        }
      })
   


  }
  //get anime detailes
  sendtoepisode(id: any) {
    this.router.navigate(['episodes/', id])
  }

}
