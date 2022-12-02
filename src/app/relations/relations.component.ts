import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResultServiceService } from '../services/search-result-service.service';
var window:any;
@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.css']
})
export class RelationsComponent implements OnInit {

  constructor(private urlservice:SearchResultServiceService,private router : Router) { }
relations:any;
loadcomponet=false;
@Input() id:any
  ngOnInit(): void {
    setTimeout(() => {
    this.urlservice.getRelations(this.id).subscribe((result:any)=>{
      this.relations=result;
  
      this.loadcomponet=true;
    
    })
  }, 3000);


  }

  sendtoepisode(id:any){

    this.router.navigate(['episodes/', id])

    
  }

}
