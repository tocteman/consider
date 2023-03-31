import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Question } from '@consider/interfaces';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private endpoint = 'questions';

  constructor(private apiService: ApiService) {}

  getQuestions(): Observable<Question[]> {
    return this.apiService.get<Question[]>(this.endpoint);
  }

  getQuestion(id: number): Observable<Question> {
    return this.apiService.get<Question>(`${this.endpoint}/${id}`);
  }

  createQuestion(question: Question): Observable<Question> {
    return this.apiService.post<Question>(this.endpoint, question);
  }

  updateQuestion(id: number, question: Question): Observable<Question> {
    return this.apiService.put<Question>(`${this.endpoint}/${id}`, question);
  }

  deleteQuestion(id: number): Observable<Question> {
    return this.apiService.delete<Question>(`${this.endpoint}/${id}`);
  }
}


