import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentseasonComponent } from './searchbox/currentseason/currentseason.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './searchbox/search-result/search-result.component';
import { TopComponent } from './searchbox/top/top.component';
import { UpcomingComponent } from './searchbox/upcoming/upcoming.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  { path: 'top/page/:num', component: TopComponent },
  { path: 'current/page/:num', component: CurrentseasonComponent },
  { path: 'upcoming/page/:num', component: UpcomingComponent },
  { path: 'episodes/:id', component: EpisodesComponent },
  {path: 'search/:value',component:SearchResultComponent},
  
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
