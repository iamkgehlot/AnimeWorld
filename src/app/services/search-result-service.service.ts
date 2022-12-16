import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { arr2, EpisodesArray } from './EpisodesArray';
import { arr, SearchResultArray } from './SearchResultArray';

@Injectable({
  providedIn: 'root'
})
export class SearchResultServiceService {

  constructor(private http: HttpClient) { }

  //search
  getResult(searchparam: any): Observable<Array<arr>> {
    return this.http.get<SearchResultArray>('https://api.jikan.moe/v4/anime?q=' + searchparam + '&limit=20&sfw').pipe(
      map(x => x.data)
    )
  }

  //next prev pge
  getTop(pagenum:any): Observable<any> {
    return this.http.get('https://api.jikan.moe/v4/top/anime?page='+pagenum+'&limit=20&sfw');
    
  }
  //popular anime
  getTopUpcoming(): Observable<any> {
    return this.http.get('https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=4&sfw');
    
  }
  //popular movie
  getpopmov(): Observable<any> {
    return this.http.get('https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=4&type=movie');
    
  }
  //full episode details
  getEpFull(id:any): Observable<any> {
    return this.http.get('https://api.jikan.moe/v4/anime/'+id+'/full');
  }
  //only episode
  getEpisodes(id: any): Observable<Array<arr2>> {
    return this.http.get<EpisodesArray>('https://api.jikan.moe/v4/anime/' + id + '/episodes?sfw').pipe(
      map(x => x.data)
    )
  }
  // video
  getVids(id:any): Observable<any> {
    return this.http.get('https://api.jikan.moe/v4/anime/'+id+'/videos');
  }
  //recommendations
  getRecommendations(id:any):Observable<any>{
    return this.http.get('https://api.jikan.moe/v4/anime/'+id+'/recommendations?sfw');
  }
  //comments
  getReviews(id:any):Observable<any>{
    return this.http.get('https://api.jikan.moe/v4/anime/'+id+'/reviews');
  }
  //related anime
  getRelations(id:any):Observable<any>{
    return this.http.get("https://api.jikan.moe/v4/anime/"+id+"/relations");
  }
  //images
  getImages(id:any):Observable<any>
  {
    return this.http.get("https://api.jikan.moe/v4/anime/"+id+"/pictures");
  }
  //currently airing
  getCurrentSeason(pagenum:any):Observable<any>
  {
   return this.http.get("https://api.jikan.moe/v4/seasons/now?page="+pagenum+"&limit=20&sfw");
  }
  //upcoming
  getUpcominngSeason(pagenum:any):Observable<any>
  {
   return this.http.get("https://api.jikan.moe/v4/seasons/upcoming?page="+pagenum+"&limit=20&sfw");
  }
  //random
  getRandom():Observable<any>{
    return this.http.get("https://api.jikan.moe/v4/random/anime?sfw");
  }
  //get episode details
consumetapi(id:any):Observable<any>{
  return this.http.get("https://api.consumet.org/meta/anilist/info/"+id)
}
//get episode m3u8 links
consumetepisodevid(episodeId:any):Observable<any>{
  return this.http.get("https://api.consumet.org/meta/anilist/watch/"+episodeId);
}

//searchCompare
compare():Observable<any>{
  return this.http.get("./assets/data.json")
}

}





