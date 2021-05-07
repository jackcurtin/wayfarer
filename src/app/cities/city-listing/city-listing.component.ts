import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CITIES} from '../cities';
import {Subject} from 'rxjs';
import {SearchService} from '../search/search.service';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {CitiesService} from '../cities.service';
import {POSTS} from './posts';


@Component({
  selector: 'app-city-listing',
  templateUrl: './city-listing.component.html',
  styleUrls: ['./city-listing.component.css']
})
export class CityListingComponent implements OnInit {
  allCities = CITIES;
  city: any;
  searchInput = '';
  filteredPosts: any = [];
  searchSubject = new Subject();
  submitForm: any;

  constructor(private route: ActivatedRoute, private searchService: SearchService, private citiesService: CitiesService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.city = CITIES.find(city => {
        return city.id === parseInt(params.get('cityId'), 10);
      });
      this.citiesService.populateCityPosts(this.city);
    });
    this.citiesService.populateCityPosts(this.city);
    this.searchSubject.pipe(distinctUntilChanged()).subscribe(searchCriteria => {
      this.filteredPosts = this.searchService.findPosts(searchCriteria, this.city.id);
      this.filteredPosts = this.citiesService.sortDate(this.filteredPosts);
      console.log(this.filteredPosts);
    });
  }

  pushSearch(searchInput): void{
    this.searchSubject.next(searchInput);
  }
}
