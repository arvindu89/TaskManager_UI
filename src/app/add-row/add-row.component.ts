import { Component, OnInit } from '@angular/core';
import { TaskassignmentService } from '../service/taskassignment.service';
import { ParentTask } from '../model/parent-task';
import { Task } from '../model/task';

@Component({
  selector: 'app-add-row',
  templateUrl: './add-row.component.html',
  styleUrls: ['./add-row.component.css']
})
export class AddRowComponent implements OnInit {
  startDate: Date;
  endDate: Date;
  task: string;
  parentTask: string;
  parentTasks: any[];
  priority: number;
  status: boolean;
  showStatus: boolean;
  taskObject: Task = new Task();

  constructor(private taskassignmentService: TaskassignmentService) { }

  ngOnInit() {
    
    this.priority = 0;
    this.status = null;
    this.showStatus = false;

    this.taskassignmentService.getParentList().subscribe((data: ParentTask[]) => {
      console.log(data);
      this.parentTasks = data;
    });        
    
  }

  addTask() {
    this.showStatus = true;
      this.status = true;
      this.taskObject.TaskName = this.task;
      this.taskObject.ParentTaskName = this.parentTask;
      this.taskObject.Priority = this.priority;
      this.taskObject.StartDate = this.startDate;
      this.taskObject.EndDate = this.endDate;
      this.taskObject.IsCompleted = false;

      this.taskassignmentService.postNewTask(this.taskObject).subscribe(res=> console.log(res));
  }

  resetTask() {
    this.task = null;
    this.startDate = null;
    this.endDate = null;
    this.parentTask = '0';
    this.priority = 0;
    this.showStatus = false;
    this.status = null;
  }
}
