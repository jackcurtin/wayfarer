import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CitiesComponent} from './cities/cities.component';
import {HomepageComponent} from './homepage/homepage.component';
import {CityListingComponent} from './cities/city-listing/city-listing.component';
const routes: Routes = [
  {
    path: 'cities',
    component: CitiesComponent,
    // children: [
  },
  {
    path: 'cities/:id',
    component: CityListingComponent
  },
    // ]
  {
    path: '',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
