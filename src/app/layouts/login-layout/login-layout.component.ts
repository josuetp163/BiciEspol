import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit {

  constructor(
    private AuthService: AuthService
    ) { }

  LogIn(LogInForm: NgForm){
    this.AuthService.loginEmailUser();
  }
  ngOnInit(): void {
  }

}
