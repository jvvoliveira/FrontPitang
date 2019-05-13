import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BaseService {

  public URL = "http://localhost:8080/";

  constructor(public httpClient: HttpClient) { }
}
