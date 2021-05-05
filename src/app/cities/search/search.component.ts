import { Component, OnInit } from '@angular/core';
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
  post: any;
  searchSubject = new Subject();

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchSubject.pipe(distinctUntilChanged()).subscribe(searchCriteria => {
      this.searchService.findPost(searchCriteria)
        .subscribe(response => this.post = response);
    });
  }

  pushSearch(searchInput): void{
    this.searchSubject.next(searchInput);
  }
}
