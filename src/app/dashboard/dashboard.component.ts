import { Component, OnInit } from '@angular/core';
import { PlayNowDataService } from '../play-now-data.service';
import { log } from 'console';
import { PlayMovie } from '../playnowinterface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  imgpath:string = "https://image.tmdb.org/t/p/w500/";
  playnowlis!:PlayMovie[];
  constructor(private _playnowdata:PlayNowDataService)
  {}

  ngOnInit(): void {
  this._playnowdata.getpost().subscribe((res) =>{
    this.playnowlis = res.results;
  })   
     
   
  
  }

}
