import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URL = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  getUsers(page: number): Observable<HttpResponse<any>> {
    return this.http.get(this.URL + "?page=" + page, {observe:"response"});
  }
  
  getUserDetails(id: any):Observable<HttpResponse<any>> {
    return this.http.get(this.URL + "/" + id, {observe:"response"});
  }
}
