import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from './login.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent implements OnInit {

  email:string = "";
  password:string = "";
  showForm:boolean = false;
  typeLogin:any;

  loginForm: FormGroup = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]],
  })

  emptyEmail:boolean=false;
  emptyPassword:boolean=false;

  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private fb: FormBuilder,
    private loginService:LoginService, private router:Router
    ) { }

  ngOnInit():void {
    // this.cleanToken();
  }

  logar(email:any, password:any){
    this.email = email;
    this.password = password;

    if(!this.email){
      this.emptyEmail=true;
    }

    if(!this.password){
      this.emptyPassword=true;
    }

    if(this.email && this.password){
      this.emptyEmail=false;
      this.emptyPassword=false;
    }
  }

  // async onSubmit() {
  //   const crendentials = this.loginForm.value;

  //   this.loginService
  //     .login(crendentials)
  //     .subscribe(response => {
  //       const token:any = response.headers.get("authorization");
  //       const tokenString = JSON.stringify(token);
  //       const access_token:any = tokenString.slice(7);

  //       localStorage.setItem('access_token', access_token);
  //       this.router.navigateByUrl('/initializing');
  //     })
  // }

  changeShowLogin(changeShowForm:boolean){
    this.showForm = changeShowForm;
  }

  // cleanToken(){
  //   this.loginService.endSession();
  // }

  logartest(test?:any){
    this.loginService.logarTesteS('http://localhost:8080/api/membros/1');
  }
}

