import { ResponseCreate, RequestCreate, RequestUpdate, RequestUser } from './user.model';
 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://rpsys.com.br/Rotinas/Api/user';

  private url2 = 'http://rpsys.com.br/Rotinas/Api/CriarUser'; 

  constructor( private http: HttpClient) { }

  getUsers(){
    return this.http.get<any[]>(`${this.url}`);
  }

  createUser(request: RequestCreate): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(this.url2,request);
  }

  getUser(id : string): Observable<RequestUser> {

    const _url = `${this.url}/${id}`; 
    return this.http.get<RequestUser>(_url);

  } 

  updateUser(id: string,request: any){

    const _url_up = `${this.url2}/${id}`;
    return this.http.put<ResponseCreate>(_url_up,request);

  }
}
