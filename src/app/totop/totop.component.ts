import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-totop',
  templateUrl: './totop.component.html',
  styleUrls: ['./totop.component.css']
})
export class TotopComponent implements OnInit {

  windowScrolled!: boolean;
  constructor() { }
  @HostListener("window:scroll", [])
  //view hide to top button on screen location
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 20) {
      this.windowScrolled = false;
    }
  }
  //scroll to top
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }


  ngOnInit(): void {

  }

}
