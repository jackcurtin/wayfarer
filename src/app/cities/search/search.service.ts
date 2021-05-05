import { Injectable } from '@angular/core';
import {POSTS} from '../city-listing/posts';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  findPosts(searchCriteria, cityId): any{
    let filteredPosts = [];
    console.log(cityId);
    POSTS.forEach(post => {
      if (post.title.toLowerCase().includes(searchCriteria.toLowerCase())
      && cityId === post.cityId){
        filteredPosts.push(post);
      }
    });
    return filteredPosts;
  }
}
