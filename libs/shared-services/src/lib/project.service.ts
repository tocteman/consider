import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Project } from '@consider/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private endpoint = 'projects';

  constructor(private apiService: ApiService) {}

  getProjects(): Observable<Project[]> {
    return this.apiService.get<Project[]>(this.endpoint);
  }

  getProject(id: number): Observable<Project> {
    return this.apiService.get<Project>(`${this.endpoint}/${id}`);
  }

  createProject(project: Project): Observable<Project> {
    return this.apiService.post<Project>(this.endpoint, project);
  }

  updateProject(id: number, project: Project): Observable<Project> {
    return this.apiService.put<Project>(`${this.endpoint}/${id}`, project);
  }

  deleteProject(id: number): Observable<Project> {
    return this.apiService.delete<Project>(`${this.endpoint}/${id}`);
  }
}

