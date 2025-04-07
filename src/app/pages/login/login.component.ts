import { Component } from '@angular/core';
import { DefautLoginLayoutComponent } from '../../components/defaut-login-layout/defaut-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputsComponent } from '../../components/primary-inputs/primary-inputs.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface LoginForm {
  email: FormControl;
  password: FormControl;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefautLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputsComponent,
  ],
  providers: [
    LoginService,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], // Corrigido 'styleUrl' para 'styleUrls' (plural).
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  submit() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => {
        this.toastService.success("Login efetuado com sucesso!");
        this.router.navigate(["user"]); // Redireciona para a rota 'user'.
      },
      error: () => {
        this.toastService.error("Opss! Erro inesperado! Tente novamente.");
      }
    });
  }

  navigate() {
    this.router.navigate(["signup"]);
  }
}
