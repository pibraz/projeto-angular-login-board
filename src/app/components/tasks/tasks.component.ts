import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../interfaces/tarefa';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { AddTaskComponent } from "../add-task/add-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule, TaskItemComponent,
    AddTaskComponent
],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit{

  tarefas: Tarefa[] = [];

  constructor(private taskService:TaskService){}

  ngOnInit(): void {
    
    this.taskService.getTasks().subscribe((dado) => {
      this.tarefas = dado;
      console.log(dado);
    });
    
  }

  AddTask(tarefa: Tarefa){
    this.taskService.addTask(tarefa).subscribe((tarefa) => {
      this.tarefas.push(tarefa);
    });
  }

  
  deleteTask(tarefa: Tarefa){
    this.taskService.deleteTask(tarefa).subscribe(() =>
      (this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id)));

  }  

  toggleConcluido(tarefa: Tarefa){
    tarefa.concluido = !tarefa.concluido;
    this.taskService.updateTask(tarefa).subscribe();
  }



}

