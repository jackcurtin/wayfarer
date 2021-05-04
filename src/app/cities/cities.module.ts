import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CitiesModule {
  id: number;
  name: string;
  country: string;
  posts = new Array();
}

let sanFran = new CitiesModule()
