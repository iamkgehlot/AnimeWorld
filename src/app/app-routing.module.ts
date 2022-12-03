import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentseasonComponent } from './currentseason/currentseason.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { HomeComponent } from './home/home.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { TopComponent } from './top/top.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  { path: 'top/page/:num', component: TopComponent },
  { path: 'current/page/:num', component: CurrentseasonComponent },
  { path: 'upcoming/page/:num', component: UpcomingComponent },
  { path: 'recommondations', component: RecommendationsComponent },
  { path: 'episodes/:id', component: EpisodesComponent },
  {path: 'search/:value',component:SearchResultComponent},
  
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
