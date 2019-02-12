import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  constructor(private http: HttpClient) { }

  data_Service_function() {
    return console.log(' service clicked');
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }
  

}
