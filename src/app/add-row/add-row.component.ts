import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    
    this.priority = 0;
    this.status = null;
    this.showStatus = false;
    this.parentTasks = [
      { label: '-- Select --', value: '0' },
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

  addTask() {
    this.showStatus = true;
      this.status = true;
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
