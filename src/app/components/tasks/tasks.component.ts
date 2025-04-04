import { Component } from '@angular/core';
import { Tarefa } from '../../interfaces/tarefa';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule, TaskItemComponent,

  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  tarefas: Tarefa[] = [];

  constructor(private taskService:TaskService){}

  ngOnInit(): void {
    
    this.taskService.getTasks().subscribe((dado) => {
      this.tarefas = dado;
      console.log(dado);
    });
    
  }

}

