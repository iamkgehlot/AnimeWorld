import { Component, Input, OnInit } from '@angular/core';
import { SearchResultServiceService } from '../services/search-result-service.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(private urlservice: SearchResultServiceService) { }
  reviewsarr: any;
  @Input() id: any;
  laoddata = false;
  readMore = false;

  public isReadMore: boolean = true;
  lengtharr: any;


  ngOnInit(): void {

    //get reviews
    setTimeout(() => {
      this.urlservice.getReviews(this.id).subscribe((result: any) => {
        this.reviewsarr = result;

        this.laoddata = true;
        this.lengtharr = (this.reviewsarr.data).length;
      })
    }, 2000);

  }

}
