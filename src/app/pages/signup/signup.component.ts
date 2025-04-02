import { Component } from '@angular/core';
import { DefautLoginLayoutComponent } from '../../components/defaut-login-layout/defaut-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputsComponent } from '../../components/primary-inputs/primary-inputs.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface SignupForm {
  name: FormControl,
  email :FormControl,
  password: FormControl,
  passwordConfirm: FormControl

}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    DefautLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputsComponent
  ],
  providers:[
      LoginService

  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm!: FormGroup<SignupForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService

  ){
    this.signupForm = new FormGroup({
      name: new FormControl ('',[Validators.required,Validators.minLength(4)]),
      email: new FormControl ('',[Validators.required, Validators.email]),
      password: new FormControl ('',[Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl ('',[Validators.required, Validators.minLength(6)])
    })

  }

  submit(){
    this.loginService.login(this.signupForm.value.email, this.signupForm.value.password).subscribe({
      next: () => this.toastService.success("Login efetetuado com sucesso!"),
      error: () => this.toastService.error("Opss! Erro inesperado! Tente novamente.")
    })
      

  }

  navigate(){
    this.router.navigate(["login"])
  }

  }
