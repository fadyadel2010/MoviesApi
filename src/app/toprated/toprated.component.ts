import { TopRatedMovies } from './../top-rated-inter-face';
import { Component, OnInit } from '@angular/core';
import { PlayNowDataService } from '../play-now-data.service';

@Component({
  selector: 'app-toprated',
  standalone: true,
  imports: [],
  templateUrl: './toprated.component.html',
  styleUrl: './toprated.component.css'
})
export class TopratedComponent implements OnInit {

  imgpath:string = "https://image.tmdb.org/t/p/w500/";
  TopRratedMovie!: TopRatedMovies[];

  constructor(private _playnowdataservice:PlayNowDataService){}

  ngOnInit(): void {

    this._playnowdataservice.TopRated().subscribe((res) => {
      this.TopRratedMovie = res.results;
    })


    
  }

}
