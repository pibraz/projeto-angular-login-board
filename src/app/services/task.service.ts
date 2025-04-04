import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarefa } from '../interfaces/tarefa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }


  getTasks() : Observable <Tarefa []> {

    return this.http.get<Tarefa[]>(this.apiUrl);
    
  }

}
