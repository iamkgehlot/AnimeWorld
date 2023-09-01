import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchResultComponent } from './searchbox/search-result/search-result.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { FormsModule } from '@angular/forms';
import { EpisodesComponent } from './episodes/episodes.component';
import { HrtominPipe } from './pipes/hrtomin.pipe';

import { HomeComponent } from './home/home.component';
import { TopComponent } from './searchbox/top/top.component';
import { ReviewsComponent } from './episodes/reviews/reviews.component';
import { RelationsComponent } from './episodes/relations/relations.component';
import { ImagesComponent } from './episodes/images/images.component';
import { CurrentseasonComponent } from './searchbox/currentseason/currentseason.component';
import { UpcomingComponent } from './searchbox/upcoming/upcoming.component';
import { RandomComponent } from './home/random/random.component';
import { TotopComponent } from './totop/totop.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { EpisodevidsComponent } from './episodes/episodevids/episodevids.component';
//videogular
import { VgCoreModule } from 'ngx-videogular';
import { VgControlsModule } from 'ngx-videogular';
import { VgOverlayPlayModule } from 'ngx-videogular';
import { VgBufferingModule } from 'ngx-videogular';
import { VgStreamingModule } from 'ngx-videogular';




@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    SearchboxComponent,
    EpisodesComponent,
    HrtominPipe,
    HomeComponent,
    TopComponent,
    ReviewsComponent,
    RelationsComponent,
    ImagesComponent,
    CurrentseasonComponent,
    UpcomingComponent,
    RandomComponent,
    TotopComponent,
    LoadingSpinnerComponent,
    EpisodevidsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    //videogular
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
  



  ],
  providers: [RandomComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
