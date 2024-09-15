import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import Task from '../../types/task';
import { TaskService } from '../../service/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: 
  [
    MatInputModule, 
    MatButtonModule, 
    ReactiveFormsModule
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})

export class CreateComponent {
  formBuilder = inject(FormBuilder);

  taskForm: FormGroup = this.formBuilder.group({
    AssignedTo: ['', [Validators.required]],
    Status: ['', [Validators.required]],
    DueDate: ['', [Validators.required]],
    Priority: ['', [Validators.required]],
    Comments: ['', [Validators.required]],
  });

  taskService = inject(TaskService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  editUserId!: string;

  ngOnInit():void {
    this.editUserId = this.route.snapshot.params['id'];
    if (this.editUserId) {
      this.taskService.getTaskById(this.editUserId).subscribe(result => {
        this.taskForm.patchValue(result);
      });
    }
  }

  // addTask() {

  //   if (this.taskForm.invalid) {
  //     alert("Please provide all fields");
  //   }

  //   const model: Task = this.taskForm.value;
  //   this.taskService.addTask(model).subscribe(result => {
  //     alert("Task added sucessfully");
  //     this.router.navigateByUrl("/");
  //   })
  // }

  // updateTask() {
  //   if (this.taskForm.invalid) {
  //     alert("Please provide all fields");
  //     return;
  //   }

  //   const model: Task = this.taskForm.value;

  //   this.taskService.updateTask(this.editUserId, model).subscribe(result => {
  //     alert('User updated sucessfully');
  //     this.router.navigateByUrl('/');
  //   })
  // }

  // ___________________________________________________________________________

  addTask() {
    if (this.taskForm.invalid) {
      alert("Please provide all fields");
      return;
    }
  
    const model: Task = this.taskForm.value;
    this.taskService.addTask(model).subscribe(result => {
      alert("Task added successfully");
      this.router.navigateByUrl("/");
    });
  }
  
  updateTask() {
    if (this.taskForm.invalid) {
      alert("Please provide all fields");
      return;
    }
  
    const model: Task = this.taskForm.value;
    this.taskService.updateTask(this.editUserId, model).subscribe(result => {
      alert('Task updated successfully');
      this.router.navigateByUrl('/');
    });
  }
  



}

