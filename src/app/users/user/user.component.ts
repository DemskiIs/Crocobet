import { RouteService } from './../../route/route.service';
import { ApiService } from './../../api.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface user {
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
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  @Input() smallMode: boolean = false
  defaultImg = 'https://uxwing.com/wp-content/themes/uxwing/download/12-peoples-avatars/no-profile-picture.png'
  userId!: number;
  path!: string;
  user!: user

  constructor(
    private routes: ActivatedRoute,
    private api: ApiService,
    private pathes: RouteService,
  ) {
    routes.params.subscribe(
      (params) => {
        this.userId = params['id']
      });
  }

  ngOnInit() {
    this.api.getUser(this.userId).then((json: user) => {
      this.user = json
    })
    this.path = this.pathes.getUserPostsPath(this.userId)

  }
}

