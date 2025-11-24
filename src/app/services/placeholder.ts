import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  baseURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.baseURL + '/posts');
  }

  createPost(data: any) {
    return this.http.post(this.baseURL + '/posts', data);
  }
}
