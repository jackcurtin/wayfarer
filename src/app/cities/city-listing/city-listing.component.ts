import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CITIES} from '../cities';


@Component({
  selector: 'app-city-listing',
  templateUrl: './city-listing.component.html',
  styleUrls: ['./city-listing.component.css']
})
export class CityListingComponent implements OnInit {
  allCities = CITIES;
  city: any;
  filteredPosts = [];

  addFilteredPost(newPost: any){
    this.filteredPosts.push(newPost);
  }

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.city = CITIES.find(city => {
        return city.id === parseInt(params.get('cityId'), 10);
      });
    });
  }
}
