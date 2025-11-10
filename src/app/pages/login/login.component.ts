import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInterface } from './login.interface';
import { LoginService } from './login.service';


@Component({
  selector: 'sm-login',
  imports: [MatButtonModule, MatCardModule,MatInputModule,MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {

  login!: LoginInterface;

  constructor(private router: Router,
     private loginService: LoginService,
      private snackBar: MatSnackBar) {} 

  loginForm = new FormGroup({
    username: new FormControl<string>('', { nonNullable: true }),
    password: new FormControl<string>('', { nonNullable: true }),
  });

  onSubmit() {
    console.log(this.loginForm.value);

    this.login = this.loginForm.value as LoginInterface;

    this.loginService.logar(this.login).subscribe({
      next: (response) => {
        this.router.navigate(['/home']);
      },
      error: (erro) => {
        let message;
        if(erro.error[0].message != undefined){
          message = erro.error[0].message;
        }else{
          message = erro.error;
        }

        console.log(`${message}`);
        this.snackBar.open(`${message}`, "Ok", {duration: 5000});
      }
    })

  }
}
