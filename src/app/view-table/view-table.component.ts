import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { TaskassignmentService } from '../service/taskassignment.service';


@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css']
})
export class ViewTableComponent implements OnInit {
  searchStartDate: Date = null;
  searchEndDate: Date = null;
  taskSearchTxt: string = null;
  parentTaskSearchTxt : string = '0';
  priorityFromSearchTxt:number = null;
  priorityToSearchTxt:number = null;

  task: Task = new Task();
  selectedTask: Task;
  tasks: Task[];
  cols: any[];
  parentTasks: any[];
  clonedTask: { [s: number]: Task; } = {};

  constructor(private taskassignmentService: TaskassignmentService) { }
  
  ngOnInit() {
    this.taskassignmentService.getTask().subscribe((data: Task[]) => {
      this.tasks = data;
    });


    this.cols = [
      { field: 'TaskName', header: 'Task Name' },
      { field: 'ParentTaskName', header: 'ParentTaskName' },
      { field: 'StartDate', header: 'StartDate' },
      { field: 'EndDate', header: 'EndDate' },
      { field: 'Priority', header: 'Priority' },
      { field: 'IsCompleted', header: '' }
    ];

    this.parentTasks = [
      { label: '--- Select ---', value: '0' },
      { label: 'Parent Task 1', value: 'ParentTask1' },
      { label: 'Parent Task 2', value: 'ParentTask2' },
      { label: 'Parent Task 3', value: 'ParentTask3' },
      { label: 'Parent Task 4', value: 'ParentTask4' },
      { label: 'Parent Task 5', value: 'ParentTask5' },
      { label: 'Parent Task 6', value: 'ParentTask6' },
      { label: 'Parent Task 7', value: 'ParentTask7' },
      { label: 'Parent Task 8', value: 'ParentTask8' },
      { label: 'Parent Task 9', value: 'ParentTask9' },
      { label: 'Parent Task 10', value: 'ParentTask10' }
    ];

  }

  onRowEditInit(task: Task) {
    this.clonedTask[task.TaskID] = { ...task };
  }


  findSelectedCarIndex(): number {
    return this.tasks.indexOf(this.selectedTask);
  }

  onRowEditSave(task: Task) {
    if (task.TaskName != "") {
      delete this.clonedTask[task.TaskID];
      console.log({ severity: 'success', summary: 'Success', detail: 'Car is updated' });
      console.log(task);
    }
    else {
      console.log({ severity: 'error', summary: 'Error', detail: 'Year is required' });
    }
  }

  onEndTask(task: Task, index: number) {
    task.IsCompleted = true;
    this.tasks[index] = task;
    this.onRowEditSave(task);
  }

  onRowEditCancel(task: Task, index: number) {
    this.tasks[index] = this.clonedTask[task.TaskID];
    delete this.clonedTask[task.TaskID];
  }
  taskSearch() {
    this.taskassignmentService.getTask().subscribe((data: any) => {
      this.tasks = data.data;
    });
  }

  clearSearch() {
    this.searchStartDate = null;
    this.searchEndDate = null;
    this.parentTaskSearchTxt = '0';
    this.priorityFromSearchTxt = null;
    this.priorityToSearchTxt = null;
  }

}
