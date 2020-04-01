import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { Location } from './location';

const customerALocations = [
  new Location('Pittsburgh', 10),
  new Location('Dallas', 20),
  new Location('Chicago', 3000)
];
const customerBLocations = [
  new Location('Philadelphia', 100),
  new Location('Dallas', 2000),
  new Location('Rochester', 30)
];
const customerCLocations = [
  new Location('Boston', 1000),
  new Location('Minsk', 2000),
  new Location('Delhi', 30)
];

const customerLocations: Map<string, Location[]> = new Map<
  string,
  Location[]
>();

describe(CustomerService.name, () => {
  let service: CustomerService<Map<string, Location[]>>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerService);

    customerLocations.set('customerA', customerALocations);
    customerLocations.set('customerB', customerBLocations);
    customerLocations.set('customerC', customerCLocations);
  });

  describe(CustomerService.prototype.filterByEmployees.name, () => {
    it('should return the correct results', () => {
      expect(service.filterByEmployees(customerLocations, 1500)).toEqual([
        'customerA, Chicago',
        'customerB, Dallas',
        'customerC, Minsk'
      ]);
    });
  });
});
