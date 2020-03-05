import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()

export class CustomerService {
    constructor(private http: HttpClient){}
    private baseUrl = 'http://localhost:8080/customers';
    getListCustomers(): Observable<any>{
        return this.http.get(this.baseUrl);
    }
}