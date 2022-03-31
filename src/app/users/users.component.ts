import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { RouteService } from '../route/route.service';

interface users {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  },
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  defaultImg = 'https://uxwing.com/wp-content/themes/uxwing/download/12-peoples-avatars/no-profile-picture.png'
  path!: string
  users!: users[]
  
 constructor( 
   private api: ApiService,
   private pathes: RouteService) { }

  requestUser(id: number) {
    this.path = this.pathes.getUserPath(id)
  }

  ngOnInit(): void {
    this.api.getUsers().then((json: users[]) => {
      this.users = json
    })
  }
}
