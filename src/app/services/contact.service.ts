import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
private api = 'https://mailthis.to/christinenhamo@gmail.com';

  constructor(private http: HttpClient) { }

  PostMessage(input: any) {
    return this.http.post(this.api, input, { responseType: 'text'}).pipe(
      map(
        (response) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
