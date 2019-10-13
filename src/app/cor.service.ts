import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorService {

  constructor(private http: HttpClient) { }

  getCores1() {
    const url = 'https://reqres.in/api/unknown/cores?page=1&per_page=12';
    return this.http.get(url);
  }
}
