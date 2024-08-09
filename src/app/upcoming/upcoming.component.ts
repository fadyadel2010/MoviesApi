import { Component, OnInit } from '@angular/core';
import { PlayNowDataService } from '../play-now-data.service';
import { UpComingMovies } from '../up-coming-interface';

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.css'
})
export class UpcomingComponent implements OnInit {

  imgpath:string = "https://image.tmdb.org/t/p/w500/";
  NewUpComing! : UpComingMovies[];

  constructor(private PlayNowDataService:PlayNowDataService){}


  ngOnInit(): void {
    this.PlayNowDataService.UpCooming().subscribe((res) => {
      this.NewUpComing = res.results;
      
    })
  }

}
