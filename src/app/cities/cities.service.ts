import { Injectable } from '@angular/core';
import {POSTS} from './post/posts';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor() { }

  populateCityPosts(city): void{
    POSTS.forEach(post => {
      if (city.posts.includes(post)){
        console.log('post already included');
      }
      else if (post.cityId === city.id){
        city.posts.push(post);
      }
      this.sortDate(city.posts);
    });
  }

  sortDate(dateArr): any{
    let sortedArr = dateArr.sort((a, b) => {
      let da: any = new Date(a.date),
        db: any = new Date(b.date);
      return da - db;
    });
    return sortedArr.reverse();
  }
}
