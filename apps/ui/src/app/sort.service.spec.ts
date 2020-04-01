import { TestBed } from '@angular/core/testing';

import { SortService } from './sort.service';
import { SortableThing } from './sortable.thing';
import { Location } from './location';

const water = new SortableThing('water', 'transparent', 997, 'kg/m³');
const quartz = new SortableThing('quartz', 'white', 2320, 'kg/m³');
const steel = new SortableThing('steel', 'gray', 7865, 'kg/m³');

const customerLocations: Map<string, Location[]> = new Map<
  string,
  Location[]
>();
const customerALocations = [
  new Location('Pittsburgh', 10),
  new Location('Dallas', 20),
  new Location('Chicago', 30)
];
const customerBLocations = [
  new Location('Philadelphia', 100),
  new Location('Dallas', 200),
  new Location('Rochester', 30)
];
const customerCLocations = [
  new Location('Boston', 1000),
  new Location('Minsk', 2000),
  new Location('Delhi', 3000)
];

customerLocations.set('customerA', customerALocations);
customerLocations.set('customerB', customerBLocations);
customerLocations.set('customerC', customerCLocations);

describe(SortService.name, () => {
  let service: SortService<SortableThing>;
  let thingsToSort: SortableThing[];

  beforeEach(() => {
    // currently this data is seeded in the correct order for the test to pass.
    // re-order this seed data to see the test fail...
    thingsToSort = [water, quartz, steel];
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortService);
  });

  describe(SortService.prototype.sortByDensity.name, () => {
    it('should return the correct result', () => {
      expect(service.sortByDensity(thingsToSort)).toEqual([
        water,
        quartz,
        steel
      ]);
    });
  });
});
