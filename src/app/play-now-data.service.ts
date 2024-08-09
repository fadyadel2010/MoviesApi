import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PMovesObject } from './playnowinterface';
import { TrendNowObject } from './trendingnow';
import { TopRatedObject } from './top-rated-inter-face';
import { UpComingObject } from './up-coming-interface';

@Injectable({
  providedIn: 'root'
})
export class PlayNowDataService {
 

  constructor(private _httpClint:HttpClient) { }

  getpost():Observable<PMovesObject>{
  return this._httpClint.get<PMovesObject>("https://api.themoviedb.org/3/movie/now_playing?api_key=866cd3a065ef9304a549f1d65e494940")
  }

  getTrending():Observable<TrendNowObject>{
    return this._httpClint.get<TrendNowObject>("https://api.themoviedb.org/3/trending/all/day?api_key=866cd3a065ef9304a549f1d65e494940")
  }

  TopRated():Observable<TopRatedObject>{
    return this._httpClint.get<TopRatedObject>("https://api.themoviedb.org/3/tv/top_rated?api_key=866cd3a065ef9304a549f1d65e494940")
  }

  UpCooming():Observable<UpComingObject>{
    return this._httpClint.get<UpComingObject>("https://api.themoviedb.org/3/movie/upcoming?api_key=866cd3a065ef9304a549f1d65e494940")
  }
}
