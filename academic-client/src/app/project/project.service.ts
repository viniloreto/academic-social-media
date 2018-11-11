import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { environment } from '../../environments/environment';
import { Project } from './project.model';


@Injectable()
export class ProjectService {

  project: Project

  API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }
  
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.API_URL}/projects`);
  }

  getTopRatedProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.API_URL}/rated-projects`);
  }

  getProject(project: Project): Observable<Project> {
    return this.http.get<Project>(`${this.API_URL}/projects/${project._id}`);
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.API_URL}/projects`, project);
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.API_URL}/projects/${project._id}`, project);
  }

  deleteProject(project: Project): Observable<Project> {
    return this.http.delete<Project>(`${this.API_URL}/projects/${project._id}`);
  }

}
