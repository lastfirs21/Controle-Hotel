/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuartoService } from './quarto.service';

describe('Service: Quarto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuartoService]
    });
  });

  it('should ...', inject([QuartoService], (service: QuartoService) => {
    expect(service).toBeTruthy();
  }));
});
