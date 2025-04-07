import { Component, EventEmitter, Output } from '@angular/core';
import { Tarefa } from '../../interfaces/tarefa';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule, 
    ButtonComponent
  ],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  @Output() onAddTask = new EventEmitter<Tarefa>(); // Emite a nova tarefa para o componente pai

  tarefa: string = ''; // Nome da tarefa
  categoria: string = ''; // Categoria associada à tarefa
  concluido: boolean = false; // Define se a tarefa está concluída
  mostrarAddTarefa: boolean = false; // Controla a exibição do formulário

  constructor(private toastr: ToastrService) {} // Serviço para exibir notificações

  // Altera a exibição do formulário
  AlteraVisualizacao(valor: boolean): void {
    this.mostrarAddTarefa = valor;
  }

  // Método chamado ao enviar o formulário
  onSubmit(): void {
    // Valida se o campo de tarefa está vazio
    if (!this.tarefa.trim()) {
      this.toastr.error('Opss! Adicione uma tarefa válida!', 'ERRO!'); // Notificação de erro
      return;
    }

    // Cria uma nova tarefa com os dados preenchidos
    const novaTarefa: Tarefa = {
      tarefa: this.tarefa.trim(), // Remove espaços desnecessários
      categoria: this.categoria.trim(), // Garante limpeza na string
      concluido: this.concluido
    };

    // Emite a nova tarefa para o componente pai
    this.onAddTask.emit(novaTarefa);

    // Exibe notificação de sucesso
    this.toastr.success('Boa! Tarefa adicionada com sucesso!', 'Sucesso!');

    // Reseta os campos do formulário
    this.resetForm();
  }

  // Método para resetar os campos do formulário
  private resetForm(): void {
    this.tarefa = '';
    this.categoria = '';
    this.concluido = false;
  }
}
