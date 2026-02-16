
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acessorio } from '../models/acessorio.models';

@Injectable({
  providedIn: 'root'
})
export class AcessorioService {
  private baseUrl = 'http://localhost:8080/Acessorio';

  constructor(private httpClient: HttpClient) { }

  getAcessorios(): Observable<Acessorio[]> {
   

    return this.httpClient.get<Acessorio[]>(this.baseUrl, {});

  }

}
