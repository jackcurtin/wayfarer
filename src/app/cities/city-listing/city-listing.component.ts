import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CITIES} from '../cities';
import {Subject} from 'rxjs';
import {SearchService} from '../search/search.service';
import {distinctUntilChanged} from 'rxjs/operators';


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

  constructor(private route: ActivatedRoute, private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.city = CITIES.find(city => {
        return city.id === parseInt(params.get('cityId'), 10);
      });
    });
    this.searchSubject.pipe(distinctUntilChanged()).subscribe(searchCriteria => {
      console.log(searchCriteria);
      this.filteredPosts = this.searchService.findPosts(searchCriteria);
      console.log(this.filteredPosts);
    });
  }

  pushSearch(searchInput): void{
    this.searchSubject.next(searchInput);
  }
}
