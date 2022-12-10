import { Component, OnInit } from '@angular/core';
import {MOVIES} from '@consumet/extensions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    const gogoanime = new MOVIES.FlixHQ();
    // Search for an anime. In this case, "One Piece"
    const results = gogoanime.search("Black Adam").then(data => {
      // print results
      console.log(data);
    })



  }
  title = 'Anime Browser';




  onActivate(event:any) {
    // window.scroll(0,0);
 
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
 
    }
}
