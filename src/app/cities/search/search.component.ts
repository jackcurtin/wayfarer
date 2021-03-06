import {Component, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';
import {SearchService} from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchInput: string;
  filteredPosts: any;
  searchSubject = new Subject();

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchSubject.pipe(distinctUntilChanged()).subscribe(searchCriteria => {
      console.log(searchCriteria);
      // this.filteredPosts = this.searchService.findPosts(searchCriteria);
      console.log(this.filteredPosts);
    });
  }

  pushSearch(searchInput): void{
    this.searchSubject.next(searchInput);
  }
}
