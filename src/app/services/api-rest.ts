import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  apiURL = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  // Ver usuario (GET)
  getUsers(): Observable<any> {
    return this.http.get(this.apiURL + '/usuarios');
  }

  // Crear usuario (POST)
  createUser(data: any): Observable<any> {
    return this.http.post(this.apiURL + '/usuarios', data, this.httpOptions);
  }

  // Eliminar (DELETE)
  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.apiURL + '/usuarios/' + id, this.httpOptions);
  }
}
