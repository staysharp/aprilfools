import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService<T> {
  sortByDensity(thingsToSort: T[]): T[] {
    // put logic here and delete the next line
    return thingsToSort;
  }

  constructor() {}
}
