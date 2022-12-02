import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { FormsModule } from '@angular/forms';
import { EpisodesComponent } from './episodes/episodes.component';
import { HrtominPipe } from './pipes/hrtomin.pipe';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { HomeComponent } from './home/home.component';
import { TopComponent } from './top/top.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RelationsComponent } from './relations/relations.component';
import { ImagesComponent } from './images/images.component';
import { CurrentseasonComponent } from './currentseason/currentseason.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { RandomComponent } from './random/random.component';
import { TotopComponent } from './totop/totop.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    SearchboxComponent,
    EpisodesComponent,
    HrtominPipe,
    RecommendationsComponent,
    HomeComponent,
    TopComponent,
    ReviewsComponent,
    RelationsComponent,
    ImagesComponent,
    CurrentseasonComponent,
    UpcomingComponent,
    RandomComponent,
    TotopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [RandomComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
