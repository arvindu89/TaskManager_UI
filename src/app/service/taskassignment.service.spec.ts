import { TestBed } from '@angular/core/testing';
import { TaskassignmentService } from './taskassignment.service';
import {  HttpClientTestingModule } from '@angular/common/http/testing';
import { Task } from '../model/task';

describe('TaskassignmentService', () => {
  //let service: TaskassignmentService;
  //let httpMock: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [Task]
  }));
  //service = TestBed.get(TaskassignmentService);
  //httpMock = TestBed.get(HttpTestingController);

  it('should be created', () => {
    const service: TaskassignmentService = TestBed.get(TaskassignmentService);
    expect(service).toBeTruthy();
  });

  // it('be able to retrieve posts from the API via GET', () => {
  //   const dummyPosts: Task[] = [{
  //     "TaskID": 1,
  //     "TaskName": "Task1",
  //     "ParentTaskID": 1,
  //     "ParentTaskName": "ParentTask1",
  //     "StartDate": null,
  //     "EndDate": null,
  //     "Priority": 7,
  //     "IsCompleted": true
  //   },
  //   {
  //     "TaskID": 2,
  //     "TaskName": "Task2",
  //     "ParentTaskID": 2,
  //     "ParentTaskName": "ParentTask2",
  //     "StartDate": null,
  //     "EndDate": null,
  //     "Priority": 8,
  //     "IsCompleted": false
  //   },
  //   {
  //     "TaskID": 3,
  //     "TaskName": "Task3",
  //     "ParentTaskID": 3,
  //     "ParentTaskName": "ParentTask3",
  //     "StartDate": null,
  //     "EndDate": null,
  //     "Priority": 9,
  //     "IsCompleted": false
  //   },
  //   {
  //     "TaskID": 4,
  //     "TaskName": "Task4",
  //     "ParentTaskID": 3,
  //     "ParentTaskName": "ParentTask3",
  //     "StartDate": null,
  //     "EndDate": null,
  //     "Priority": 9,
  //     "IsCompleted": false
  //   },
  //   {
  //     "TaskID": 5,
  //     "TaskName": "Task5",
  //     "ParentTaskID": 3,
  //     "ParentTaskName": "ParentTask3",
  //     "StartDate": null,
  //     "EndDate": null,
  //     "Priority": 9,
  //     "IsCompleted": false
  //   },
  //   {
  //     "TaskID": 6,
  //     "TaskName": "Task6",
  //     "ParentTaskID": 3,
  //     "ParentTaskName": "ParentTask3",
  //     "StartDate": null,
  //     "EndDate": null,
  //     "Priority": 9,
  //     "IsCompleted": false
  //   },
  //   {
  //     "TaskID": 7,
  //     "TaskName": "Task7",
  //     "ParentTaskID": 3,
  //     "ParentTaskName": "ParentTask3",
  //     "StartDate": null,
  //     "EndDate": null,
  //     "Priority": 9,
  //     "IsCompleted": false
  //   },
  //   {
  //     "TaskID": 8,
  //     "TaskName": "Task8",
  //     "ParentTaskID": 3,
  //     "ParentTaskName": "ParentTask3",
  //     "StartDate": null,
  //     "EndDate": null,
  //     "Priority": 9,
  //     "IsCompleted": false
  //   },
  //   {
  //     "TaskID": 9,
  //     "TaskName": "Task9",
  //     "ParentTaskID": 3,
  //     "ParentTaskName": "ParentTask3",
  //     "StartDate": null,
  //     "EndDate": null,
  //     "Priority": 9,
  //     "IsCompleted": false
  //   },
  //   {
  //     "TaskID": 10,
  //     "TaskName": "Task10",
  //     "ParentTaskID": 3,
  //     "ParentTaskName": "ParentTask3",
  //     "StartDate": null,
  //     "EndDate": null,
  //     "Priority": 9,
  //     "IsCompleted": false
  //   },
  //   {
  //     "TaskID": 11,
  //     "TaskName": "Task11",
  //     "ParentTaskID": 3,
  //     "ParentTaskName": "ParentTask3",
  //     "StartDate": null,
  //     "EndDate": null,
  //     "Priority": 9,
  //     "IsCompleted": false
  //   },
  //   {
  //     "TaskID": 12,
  //     "TaskName": "Task12",
  //     "ParentTaskID": 3,
  //     "ParentTaskName": "ParentTask3",
  //     "StartDate": null,
  //     "EndDate": null,
  //     "Priority": 9,
  //     "IsCompleted": false
  //   },
  //   {
  //     "TaskID": 13,
  //     "TaskName": "Task13",
  //     "ParentTaskID": 3,
  //     "ParentTaskName": "ParentTask3",
  //     "StartDate": null,
  //     "EndDate": null,
  //     "Priority": 9,
  //     "IsCompleted": false
  //   }];
  //   // service.getTask().subscribe(data => {
  //   //   expect(data.length).toBe(13);
  //   //   expect(data).toEqual(dummyPosts);
  //   // });
  //   // const request = httpMock.expectOne('assets/data/tasklist.json');
  //   // expect(request.request.method).toBe('GET');
  //   // request.flush(dummyPosts);
  // });

//   afterEach(() => {
//     httpMock.verify();
// });
});
