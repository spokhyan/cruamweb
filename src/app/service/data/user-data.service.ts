import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private http:HttpClient
  ) { }

  activateUser(){
    // console.log("userData activateUser() called");
    return this.http.get('http://localhost:8080/uamapi/Test12345');
    
    
  }
}
