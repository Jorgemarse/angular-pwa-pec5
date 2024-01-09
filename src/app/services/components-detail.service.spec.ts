import { TestBed } from '@angular/core/testing';

import { ComponentsDetailService } from './components-detail.service';

describe('ComponentsDetailService', () => {
  let service: ComponentsDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentsDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
