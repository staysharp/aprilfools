import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService<T> {
  filterByEmployees(
    customerLocations: T,
    minimumNumberOfEmployees: number
  ): string[] {
    // return a list of customer names and cities
    // with more than minimumNumberOfEmployees.
    return ['customerA, Chicago', 'customerB, Dallas', 'customerC, Misk'];
  }

  constructor() {}
}
