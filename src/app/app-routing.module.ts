import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CitiesComponent} from './cities/cities.component';
import {HomepageComponent} from './homepage/homepage.component';
import {CityListingComponent} from './cities/city-listing/city-listing.component';
import {PostComponent} from './cities/post/post.component';
const routes: Routes = [
  {
    path: 'cities',
    component: CitiesComponent,
    children: [
      {
        path: ':cityId',
        component: CityListingComponent
      },
      {
        path: ':cityId/:postId',
        component: PostComponent
      }
    ]
  },
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
