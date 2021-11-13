import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username : new FormControl('',[Validators.required]),
    clave : new FormControl('',[Validators.required])
  });

  constructor(protected loginService: LoginService) { }

  ngOnInit(): void {
  }
  
  ingresar()
  {
    //console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value).subscribe(
      (res:any) =>{
        console.log(res);
      },
      (error:any)=>{
        console.log(error);
      }
    );

   /* this.loginService.lista_usuarios().subscribe(
      (res:any) => {
        console.log(res);        
      },
      (error:any)=>{
        console.log(error);
      }
    );*/

  }

}
