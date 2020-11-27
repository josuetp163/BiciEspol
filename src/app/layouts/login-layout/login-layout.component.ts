import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit {
  focusA:boolean;
  focusB:boolean;

  constructor(
    public AuthService: AuthService,
    private Router: Router,
    private ToastrService: ToastrService,
    ) { }

  async LogIn(LogInForm: NgForm){
    this.AuthService.loginEmailUser()
    .then((res)=>{
      this.Router.navigate(['/admin-layout/inicio-admin']);
    })
    .catch((err) => this.showNotification())
    
  }
  showNotification(){
    this.ToastrService.success(
      '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Usuario o contraseña incorrecta</span>',
      "",
      {
        timeOut: 4000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: "toast-top-center"
      }
    );
  }
  resetForm(LogInForm: NgForm){
    if(LogInForm != null){
      LogInForm.reset();
      this.AuthService.email = "";
      this.AuthService.pass = "";
    }
  }
  ngOnInit(): void {
  }

}
