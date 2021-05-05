import { Injectable } from '@angular/core';
import {POSTS} from '../city-listing/posts';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  findPost(searchCriteria): any{
    return POSTS.filter(posts => {
      posts.title.includes(searchCriteria);
    });
  }
}
