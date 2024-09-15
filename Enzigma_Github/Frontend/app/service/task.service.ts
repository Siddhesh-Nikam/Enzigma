import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import Task from '../types/task';


@Injectable({
  providedIn: 'root'
})

export class TaskService {

  apiUrl = 'http://localhost:3000';
  httpClient = inject(HttpClient);

  constructor() { }

  getTasks() {
    return this.httpClient.get<Task[]>(this.apiUrl + '/tasks');
  };

  addTask(model: Task) {
    return this.httpClient.post<Task[]>(this.apiUrl + '/tasks', model);
  };

  getTaskById(id: string) {
    return this.httpClient.get<Task>(this.apiUrl + '/tasks/' + id);
  };

  updateTask(id: string, model: Task) {
    return this.httpClient.put<Task>(this.apiUrl + '/tasks/' + id, model);
  };

  deleteTask(id : string) {
    return this.httpClient.delete(this.apiUrl + '/tasks/' + id);
  }

}

