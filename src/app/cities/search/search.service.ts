import { Injectable } from '@angular/core';
import {POSTS} from '../city-listing/posts';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  findPosts(searchCriteria): any{
    let filteredPosts = [];
    POSTS.forEach(post => {
      if (post.title.toLowerCase().includes(searchCriteria.toLowerCase())){
        filteredPosts.push(post);
      }
    });
    return filteredPosts;
  }
}
