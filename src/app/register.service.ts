import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:3000/registered';  //LOCAL SERVER CRUD

  private apiUrl2 = "http://localhost:3003/chartdata"; //untuk chart


  private registrations: Register[] = [];

  constructor(private httpClient: HttpClient) {
    this.loadInitialData();
  }

  private loadInitialData() {   //to get some initial data
    this.getAll().subscribe(
      data => this.registrations = data,
      error => console.error('Failed to load initial registration data:', error)
    );
  }

  //CREATE NEW ORDER
  create(data: Register): Observable<Register> {    //observable : send data to Register db one by one
    if (!this.registrations.length) {
      // Load and then create  //pipe function in RxJS , pipe method is used on an Observable to link multiple operators into a pipeline.
      return this.getAll().pipe(  //
        switchMap(regs => {                  //switchMap : handle effect from changing data
          this.registrations = regs;
          return this.assignIdAndPost(data);
        }),
        catchError(error => throwError(error))
      );
    } else {
      // Assign ID and post immediately
      return this.assignIdAndPost(data);
    }
  }

  //GENERATE ID
  private assignIdAndPost(data: Register): Observable<Register> {
    data.id = this.registrations.length > 0 ? 
              (Math.max(...this.registrations.map(r => parseInt(r.id))) + 1).toString() : 
              '1';
    this.registrations.push(data); // Update local store
    return this.httpClient.post<Register>(this.apiUrl, data);
  }


  //DISPLAY DATA IN LIST
  getAll(): Observable<Register[]> {
    return this.httpClient.get<Register[]>(this.apiUrl);
  }


  //EDIT DATA
  edit(id: string): Observable<Register> {
    return this.httpClient.get<Register>(`${this.apiUrl}/${id}`);
  }


  //UPDATE DATA
  update(data: Register): Observable<Register> {
    return this.httpClient.put<Register>(`${this.apiUrl}/${data.id}`, data);
  }


  //DELETE DATA
  delete(id: string): Observable<Register> {
    return this.httpClient.delete<Register>(`${this.apiUrl}/${id}`);
  }


  //BAHAGIAN SHOW CHART
  showdata (){
    return this.httpClient.get(this.apiUrl2);
  }
  


}
