import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Questionnaire } from '@consider/interfaces';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  private endpoint = 'questionnaires';

  constructor(private apiService: ApiService) {}

  getQuestionnaires(): Observable<Questionnaire[]> {
    console.log(this.endpoint)
    return this.apiService.get<Questionnaire[]>(this.endpoint);
  }

  getQuestionnaire(id: number): Observable<Questionnaire> {
    return this.apiService.get<Questionnaire>(`${this.endpoint}/${id}`);
  }

  createQuestionnaire(project: Omit<Questionnaire, 'id' | 'created_at' | 'updated_at'>): Observable<Questionnaire> {
    return this.apiService.post<Questionnaire>(this.endpoint, project);
  }

  updateQuestionnaire(id: number, project: Questionnaire): Observable<Questionnaire> {
    return this.apiService.put<Questionnaire>(`${this.endpoint}/${id}`, project);
  }

  deleteQuestionnaire(id: number): Observable<Questionnaire> {
    return this.apiService.delete<Questionnaire>(`${this.endpoint}/${id}`);
  }
}


