import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'assets/server_response.json';

  constructor(private http: HttpClient) { }
  
  getDataFromGoogleDrive(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
}
