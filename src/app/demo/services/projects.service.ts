import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public allProjectsData : any = []
  public allTasksData : any = []


  constructor() { }

  addProjectsToArray(params : any): Observable<any>{
    this.allProjectsData.push(params)
    return of (this.allProjectsData)
  }

  addTasksToArray(params : any): Observable<any>{
    this.allTasksData.push(params)
    return of (this.allTasksData)
  }

  getAllProjects(): Observable<any> {
    return of (this.allProjectsData)
  }

  getAllTasks(): Observable<any> {
    return of (this.allTasksData)
  }
}
