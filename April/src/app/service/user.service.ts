import { Injectable } from '@angular/core';
import { UserTable } from '../models/user-table';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url:any ="http://localhost:8080/";

  save(s: UserTable):Observable<UserTable>{
    this.url= "http://localhost:8080/insertUser";
    return this.http.post<UserTable>(this.url, s);  
  }


  loginById(user_id:any,user_password:any):Observable<UserTable>{ //data ese joma hoise, je subscribe korbe take data dibe
    this.url="http://localhost:8080/";
    return this.http.get<UserTable>(this.url+user_id+"/"+user_password);
  }

}
