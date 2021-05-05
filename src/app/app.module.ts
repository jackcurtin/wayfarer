import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TopicsComponent } from './homepage/topics/topics.component';
import { CityListingComponent } from './cities/city-listing/city-listing.component';
import { PostComponent } from './cities/post/post.component';
import { SearchComponent } from './cities/search/search.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    HomepageComponent,
    TopicsComponent,
    CityListingComponent,
    PostComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
