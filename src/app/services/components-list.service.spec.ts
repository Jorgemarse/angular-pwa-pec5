import { TestBed } from '@angular/core/testing';

import { ComponentsListService } from './components-list.service';

describe('ComponentsListService', () => {
  let service: ComponentsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
