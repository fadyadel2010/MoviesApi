import { Routes } from '@angular/router';
import { TrendingComponent } from './trending/trending.component';
import { TopratedComponent } from './toprated/toprated.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path: "" , redirectTo: "/dashboard" , pathMatch:"full" } ,
   {path:"trending" , component:TrendingComponent , title:"TRENDING"} ,
   {path:"toprated" , component:TopratedComponent , title:"TOP RATED"} ,
   {path:"upcoming" , component:UpcomingComponent , title:"UPCOMING"} ,
   {path:"dashboard" , component:DashboardComponent , title:"DASHEBOARD"}

];
