import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor() { }

  sortDate(dateArr): any{
    let sortedArr = dateArr.sort((a, b) => {
      let da: any = new Date(a.date),
        db: any = new Date(b.date);
      return da - db;
    });
    return sortedArr.reverse();
  }
}
