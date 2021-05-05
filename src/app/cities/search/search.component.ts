import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';
import {SearchService} from './search.service';
import { Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchInput: string;
  @Output() posts = new EventEmitter<any>();
  searchSubject = new Subject();

  addNewPost(value: string){
    this.posts.emit(value);
  }

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchSubject.pipe(distinctUntilChanged()).subscribe(searchCriteria => {
      console.log(searchCriteria);
      this.posts = this.searchService.findPosts(searchCriteria);
      console.log(this.posts);
    });
  }

  pushSearch(searchInput): void{
    this.searchSubject.next(searchInput);
  }
}
