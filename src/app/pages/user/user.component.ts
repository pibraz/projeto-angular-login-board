import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TasksComponent } from '../../components/tasks/tasks.component';
import { TaskItemComponent } from '../../components/task-item/task-item.component';

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

}
