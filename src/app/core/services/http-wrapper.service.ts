import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_ENDPOINT = environment.api_endpoint;
@Injectable({
  providedIn: 'root',
})
export class HttpWrapperService {
  constructor(private http: HttpClient) {}

  get(requestUrl: string): Observable<any> {
    const url = API_ENDPOINT + requestUrl;
    return this.http.get(url);
  }

  post(requestUrl: string, body: any): Observable<any> {
    const url = API_ENDPOINT + requestUrl;
    return this.http.post(url, body);
  }

  update(requestUrl: string, body: any): Observable<any> {
    const url = API_ENDPOINT + requestUrl;
    return this.http.put(url, body);
  }

  delete(requestUrl: string): Observable<void> {
    const url = API_ENDPOINT + requestUrl;
    return this.http.delete<void>(url);
  }
}
