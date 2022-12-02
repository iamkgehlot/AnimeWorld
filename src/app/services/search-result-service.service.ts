import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contains } from 'jquery';
import { map, Observable } from 'rxjs';
import { arr2, EpisodesArray } from './EpisodesArray';
import { RecommendationsArray } from './recommendations';
import { arr, SearchResultArray } from './SearchResultArray';

@Injectable({
  providedIn: 'root'
})
export class SearchResultServiceService {

  constructor(private http: HttpClient) { }

  getResult(searchparam: any): Observable<Array<arr>> {
    return this.http.get<SearchResultArray>('https://api.jikan.moe/v4/anime?q=' + searchparam + '&limit=20&sfw').pipe(
      map(x => x.data)
    )
  }

  getTop(pagenum:any): Observable<any> {
    return this.http.get('https://api.jikan.moe/v4/top/anime?page='+pagenum+'&limit=20&sfw');
    
  }
  getTopUpcoming(): Observable<any> {
    return this.http.get('https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=4&sfw');
    
  }
  getpopmov(): Observable<any> {
    return this.http.get('https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=4&type=movie');
    
  }

  getEpFull(id:any): Observable<any> {
    return this.http.get('https://api.jikan.moe/v4/anime/'+id+'/full');
  }
  
  getEpisodes(id: any): Observable<Array<arr2>> {
    return this.http.get<EpisodesArray>('https://api.jikan.moe/v4/anime/' + id + '/episodes?sfw').pipe(
      map(x => x.data)
    )
  }
  getVids(id:any): Observable<any> {
    return this.http.get('https://api.jikan.moe/v4/anime/'+id+'/videos');
  }

  
  getRecommendations(id:any):Observable<any>{
    return this.http.get('https://api.jikan.moe/v4/anime/'+id+'/recommendations?sfw');
  }
  getReviews(id:any):Observable<any>{
    return this.http.get('https://api.jikan.moe/v4/anime/'+id+'/reviews');
  }

  getRelations(id:any):Observable<any>{
    return this.http.get("https://api.jikan.moe/v4/anime/"+id+"/relations");
  }

  getImages(id:any):Observable<any>
  {
    return this.http.get("https://api.jikan.moe/v4/anime/"+id+"/pictures");
  }

  getCurrentSeason(pagenum:any):Observable<any>
  {
   return this.http.get("https://api.jikan.moe/v4/seasons/now?page="+pagenum+"&limit=20&sfw");

  }

  getUpcominngSeason(pagenum:any):Observable<any>
  {
   return this.http.get("https://api.jikan.moe/v4/seasons/upcoming?page="+pagenum+"&limit=20&sfw");

  }

  getRandom():Observable<any>{
    return this.http.get("https://api.jikan.moe/v4/random/anime?sfw");
  }
  
}







// line-height: 1.15;
// -webkit-text-size-adjust: 100%;
// font-family: 'Open Sans',sans-serif;
// font-size: 16px;
// text-decoration: none;
// color: #224187;
// height: 230px;
// width: 150px;
// margin: 10px;
// border-radius: 8px;
// background: #fff;
// overflow: hidden;

// line-height: 1.15;
// -webkit-text-size-adjust: 100%;
// font-family: 'Open Sans',sans-serif;
// font-size: 16px;
// display: flex;
// flex-wrap: wrap;