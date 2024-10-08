import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public userDetails : any

  constructor(private http: HttpClient) { }

  getUserDetails() {
    return this.userDetails;
  }

  clearUserDetails() {
    this.userDetails = null;
  }
}

export const availableUsers = [
  { name:'Sample User', email:'test@gmail.com', password:'test@2024', role:'Admin'},
  { name:'Raji Bujji', email:'rajiBujji@gmail.com', password:'rajibujji@0828', role:'Admin'}
]
