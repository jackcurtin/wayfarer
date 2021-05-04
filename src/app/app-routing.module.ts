import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CitiesComponent} from './cities/cities.component';
import {HomepageComponent} from './homepage/homepage.component';
import {SanFranComponent} from './cities/san-fran/san-fran.component';

const routes: Routes = [
  {
    path: 'cities',
    component: CitiesComponent,
    children: [
      {
        path: '1',
        component: SanFranComponent
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
