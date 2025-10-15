import { TestBed } from '@angular/core/testing';

import { ApiClientService } from './api-client.service';
import {HttpClient} from "@angular/common/http";

describe('ApiClientService', () => {
  let service: ApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [{provide: HttpClient, useValue: {}}]});
    service = TestBed.inject(ApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
