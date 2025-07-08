import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  http = inject(HttpClient);

  LoginCustomer() : Observable<Customer>{
    const url = `https://jsonplaceholder.typicode.com/todos`
    return this.http.get<Customer>(url)
  }

  RegisterCustomer() : Observable<Customer>{
    const url = ``
    return this.http.get<Customer>(url)
  }

  RegisterSeller() : Observable<Customer>{
    const url = ``
    return this.http.get<Customer>(url)
  }

  LoginSeller() : Observable<Customer>{
    const url = ``
    return this.http.get<Customer>(url)
  }

}
