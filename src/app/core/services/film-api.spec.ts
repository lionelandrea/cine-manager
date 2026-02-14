import { TestBed } from '@angular/core/testing';

import { FilmApi } from './film-api';

describe('FilmApi', () => {
  let service: FilmApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
