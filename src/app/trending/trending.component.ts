import { TrendMovies } from './../trendingnow';
import { Component, OnInit } from '@angular/core';
import { PlayNowDataService } from '../play-now-data.service';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css'
})
export class TrendingComponent implements OnInit {

  imgpath:string = "https://image.tmdb.org/t/p/w500/";
  MoviesTrendNow!:TrendMovies[] ;
  constructor(private _playnowservice:PlayNowDataService){}

  ngOnInit(): void {

    this._playnowservice.getTrending().subscribe((res) =>{
        this.MoviesTrendNow = res.results
    })

    }
    
  }




