import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URL = "https://reqres.in/api/users?page=";

  constructor(private http: HttpClient) { }

  getUsers(page: number): Observable<HttpResponse<any>> {
    return this.http.get(this.URL + page, {observe:"response"});
  }
  
}
