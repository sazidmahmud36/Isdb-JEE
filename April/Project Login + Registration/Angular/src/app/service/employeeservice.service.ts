import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private http:HttpClient) { }

  url:any="http://localhost:8080/";

  // -----------Registration ---------
  insert(s:Employee):Observable<Employee>{
    this.url="http://localhost:8080/insert";
    return this.http.post<Employee>(this.url,s);
  }

// -----------login ---------

  loginById(id:any,password:any):Observable<Employee>{
    this.url="http://localhost:8080/";
    return this.http.get<Employee>(this.url+id+"/"+password);
  }

  // -----------Employe Show (Read) ---------

  getAllEmployee():Observable<Employee>{
    this.url="http://localhost:8080/allemployee";
    return this.http.get<Employee>(this.url);
  }

  

}
