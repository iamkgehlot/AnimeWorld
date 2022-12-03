import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { SearchResultServiceService } from '../services/search-result-service.service';



function downloadImage(url: any, name: any) {
  fetch(url)
    .then(resp => resp.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;

      a.download = name;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch(() => alert('An error sorry'));
}

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private urlservice: SearchResultServiceService) { }
  @Input() id: any;
  images: any;
  loadcomponent = false;
  loadnotfound = false;
  loadspin = true;
  ngOnInit(): void {

    setTimeout(() => {
      this.urlservice.getImages(this.id).subscribe((result: any) => {
        this.loadspin = false;
        this.images = result;
        if ((this.images).length != 0) {
          this.loadspin = false;
          this.loadcomponent = true;
        } else {
          this.loadspin = false;
          this.loadnotfound = true;
        }

      })
    }, 1500);

  }


  todownload(url: any, name: any) {
    downloadImage(url, name);

  }


}
