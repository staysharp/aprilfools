import { TestBed } from '@angular/core/testing';

import { SortService } from './sort.service';
import { SortableThing } from './sortable.thing';

const water = new SortableThing('water', 'transparent', 997, 'kg/m³');
const quartz = new SortableThing('quartz', 'white', 2320, 'kg/m³');
const steel = new SortableThing('steel', 'gray', 7865, 'kg/m³');

describe(SortService.name, () => {
  let service: SortService<SortableThing>;
  let thingsToSort: SortableThing[];

  beforeEach(() => {
    // currently this data is seeded in the correct order for the test to pass.
    // re-order this seed data to see the test fail...
    thingsToSort = [
      quartz,
      water,
      steel];
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortService);
  });

  describe(SortService.prototype.sortByDensity.name, () => {
    it('should return the correct result', () => {
      expect(service.sortByDensity(thingsToSort)).toEqual([water, quartz, steel])
    });
  });
});
