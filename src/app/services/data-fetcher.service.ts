import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFetcherService {

  constructor(private http: HttpClient) {

  }

  getDataList() {
    let queryURL = "https://fcasb-react.getsandbox.com/v1/policy/cList";
    return this.http.get<any>(queryURL);
  }
}
