import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/demo/services/users-service.service';
import { availableUsers } from 'src/app/demo/services/users-service.service';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss']
})
export class NavRightComponent implements OnInit {

  public loggedinUserData : any
  // public loggedinUserData =
  //   {
  //     "id": 3,
  //     "firstName": "Sample",
  //     "lastName": "User",
  //     "email": "test@gmail.com",
  //     "password": "test@2014",
  //     "createdAt": "2024-08-17T08:48:17.000Z",
  //     "updatedAt": "2024-08-17T08:48:17.000Z"
  //   }

  constructor(
    private userService: UsersService,
    private activatedRoute : ActivatedRoute
  ) { }


  ngOnInit() {
  //   this.activatedRoute.queryParams.subscribe(params => {
  //     const userEmail = params['userEmail'];
  //    this.loggedinUserData = availableUsers.filter((userData : any) => {
  //       return userData.email == userEmail
  //     })
  // });
  this.loggedinUserData = JSON.parse(localStorage.getItem('userDetails') || '{}');
  }
}
