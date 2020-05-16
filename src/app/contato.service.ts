import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  contatosUrl='http://rpsys.com.br/Rotinas/Api/contato';
  
  
  constructor(private http: HttpClient) { }

  listar(){
  return this.http.get<any[]>(`${this.contatosUrl}`);
 
  }
}
