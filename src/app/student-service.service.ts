import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
 
  
 private url="http://localhost:8080/api/v1/employees"
   constructor(private httpClient:HttpClient) { }
      getEmployeesList() : Observable<Employee[]>{
     return this.httpClient.get<Employee[]>(`${this.url}`);
   }

createEmployee(employee:Employee):Observable<Object>{
  return this.httpClient.post(`${this.url}`,employee);
}

getEmployeeId(id:number ):Observable<Employee>{
  return this.httpClient.get<Employee>(`${this.url}/${id}`);
}


updateEmployee(id: number, employee: Employee): Observable<any> {
  
  return this.httpClient.put<Employee>(`${this.url}/${id}`,employee);
}

deleteEmployee(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.url}/${id}`);

}

}
