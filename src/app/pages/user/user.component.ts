import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TasksComponent } from '../../components/tasks/tasks.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    HeaderComponent,
    TasksComponent,
    
    
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  constructor(private router: Router) {}

  logout() {
    // Redireciona para a página de login
    this.router.navigate(['/login']);
  }

}
