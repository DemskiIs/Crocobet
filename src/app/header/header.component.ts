import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuth = false
  email = ''
  password = ''
  constructor() { }

  requestAutorization(userAuthData: {email: string, password: string}) {
    if (userAuthData.password && userAuthData.email) {
      this.isAuth = true
      this.email = userAuthData.email
      this.password = userAuthData.password
    }
  }

  logOut() {
    this.isAuth = false
    this.email = ''
    this.password =  ''
  }

  ngOnInit(): void {
  }

}
