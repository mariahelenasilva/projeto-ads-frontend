import { Injectable } from '@angular/core';
//import { Lancamento, LancamentoInput, LancamentoRequest, LancamentoResponse } from '../../models/lancamento.model';
import { LancamentoRequest, LancamentoResponse } from '../../models/lancamento.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LancamentoService {
  //private readonly baseUrl = `http://localhost:8080/api/usuarios`;
  private readonly baseUrl = `${environment.apiUrl}/usuarios`;

  constructor(private http:HttpClient){}

  // listar(): Observable<Lancamento[]>{
  //   return this.http.get<Lancamento[]>(this.baseUrl);
  // }

  listar(usuarioId: number): Observable<LancamentoResponse[]> {
    return this.http.get<LancamentoResponse[]>(
      `${this.baseUrl}/${usuarioId}/lancamentos`);
  }

  // buscarPorId(id: number): Observable<Lancamento> {
  //   return this.http.get<Lancamento>(`${this.API}/${id}`);
  // }
  
  cadastrar(usuarioId: number, dados: LancamentoRequest):
      Observable<LancamentoResponse> {
    return this.http.post<LancamentoResponse>(
      `${this.baseUrl}/${usuarioId}/lancamentos`, dados);
  }

  atualizar(usuarioId: number, id: number, dados: LancamentoRequest):
      Observable<LancamentoResponse> {
    return this.http.put<LancamentoResponse>(
      `${this.baseUrl}/${usuarioId}/lancamentos/${id}`, dados);
  }


}
