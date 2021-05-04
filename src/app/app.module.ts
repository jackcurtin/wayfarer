import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TopicsComponent } from './homepage/topics/topics.component';
import { SanFranComponent } from './cities/san-fran/san-fran.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    HomepageComponent,
    TopicsComponent,
    SanFranComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
