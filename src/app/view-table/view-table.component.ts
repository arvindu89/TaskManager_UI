import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { ParentTask } from '../model/parent-task';
import { TaskassignmentService } from '../service/taskassignment.service';
import { HttpParams } from '@angular/common/http';


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
    this.taskassignmentService.getTask(null).subscribe((data: Task[]) => {
      console.log(data);
      this.tasks = data;      
    });

    this.taskassignmentService.getParentList().subscribe((data: ParentTask[]) => {
      console.log(data);
      this.parentTasks = data;
    });
        
    this.cols = [
      { field: 'TaskName', header: 'Task Name' },
      { field: 'ParentTaskName', header: 'ParentTaskName' },
      { field: 'StartDate', header: 'StartDate' },
      { field: 'EndDate', header: 'EndDate' },
      { field: 'Priority', header: 'Priority' },
      { field: 'IsCompleted', header: '' }
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

      this.taskassignmentService.UpdateTask(task).subscribe(res=> console.log(res));

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
     let fromPriority : string = null;
     let toPriority : string = null;
     let startdate : string = null;
     let endate :string = null;
    if(this.priorityFromSearchTxt)
    {
      fromPriority = this.priorityFromSearchTxt.toString();
    }

    if(this.priorityToSearchTxt)
    {
      toPriority = this.priorityToSearchTxt.toString();
    }

    if(this.searchStartDate)
    {
      startdate = this.searchStartDate.toString();
    }

    if(this.searchEndDate)
    {
      endate = this.searchEndDate.toString();
    }

    let params = new HttpParams();
       params = params.append('taskName', this.taskSearchTxt);
       params = params.append('priorityFrom', fromPriority);
       params = params.append('priorityTo', toPriority);
       params = params.append('parentTaskName', this.parentTaskSearchTxt);
       params = params.append('startDate', startdate);
       params = params.append('endDate', endate);       

    this.taskassignmentService.getTask(params).subscribe((data: Task[]) => {
      console.log(data);
      this.tasks = data;      
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
