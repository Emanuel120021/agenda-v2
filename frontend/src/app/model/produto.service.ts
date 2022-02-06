import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  url?: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000';
  }

  listar(): Observable<any> {
    return this.http.get<any>(`${this.url}/produtos`);
  }
}
