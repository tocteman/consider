export interface answer {
  id: string; 
  answer: number | string; 
  user_id: string;
  question_id: string;
  questionnaire_id?: string; 
  created_at: Date; 
}

