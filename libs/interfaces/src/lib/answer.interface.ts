export interface Answer {
  id: number;
  numeric_answer: number | null;
  string_answer: string | null;
  user_id: number;
  question_id: number;
  questionnaire_id?: number;
  created_at: Date;
}

