import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DopeService {
  baseUrl = 'https://lldppexternaldata.s3-eu-west-1.amazonaws.com/apac/au/nsw/planning/fsr.json';

  constructor(
    private http: HttpClient
  ) { }

  getDataSource() {
    return this.http.get(this.baseUrl);
  }
}
