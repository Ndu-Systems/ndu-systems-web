import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SENDEMAIL } from '../_shared';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }
  sendEmail(data): Observable<any> {
    return this.http.post<any>(
      SENDEMAIL, data
    );
  }
}
