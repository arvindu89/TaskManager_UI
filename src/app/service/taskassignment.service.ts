import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../model/task';
import { ParentTask } from '../model/parent-task';
import { HttpParams } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TaskassignmentService {
URL = "http://localhost:56393/api/TaskManagement/";


  constructor(private http: HttpClient) {}

    getTask(parameters) {  
       let searchParameters = new HttpParams();
       searchParameters = parameters

        return this.http.get<Task[]>(this.URL + "search",{params: searchParameters});       
                    // .toPromise()
                    // .then(res => <Task[]> res.Data)
                    // .then(data => {console.log("Writing Service Data");console.log(data); return data; });
        }

        getParentList() {   

          return this.http.get<ParentTask[]>(this.URL + "GetParentList");       
                      // .toPromise()
                      // .then(res => <Task[]> res.Data)
                      // .then(data => {console.log("Writing Service Data");console.log(data); return data; });
          }

          postNewTask(task) {   

            return this.http.post<ParentTask[]>(this.URL + "AddTask", task);       
                        // .toPromise()
                        // .then(res => <Task[]> res.Data)
                        // .then(data => {console.log("Writing Service Data");console.log(data); return data; });
            }

            UpdateTask(task) {   

              return this.http.post<ParentTask[]>(this.URL + "UpdateTask", task);       
                          // .toPromise()
                          // .then(res => <Task[]> res.Data)
                          // .then(data => {console.log("Writing Service Data");console.log(data); return data; });
              }
    }