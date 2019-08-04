import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskassignmentService {

  constructor(private http: HttpClient) {}

    getTask() {   

        return this.http.get<Task[]>('assets/data/tasklist.json');       
                    // .toPromise()
                    // .then(res => <Task[]> res.Data)
                    // .then(data => {console.log("Writing Service Data");console.log(data); return data; });
        }
    }