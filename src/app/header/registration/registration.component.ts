import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  email= '';
  password= '';
  @Output () onAutorization = new EventEmitter<{email: string, password: string}>();

  constructor() { }

  autorization() {
    this.onAutorization.emit({
      email: this.email,
      password: this.password,
    });

    this.email= '';
    this.password= '';
  }

  ngOnInit(): void {
  }

}
