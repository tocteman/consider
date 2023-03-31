export interface Submission {
  id: number;
  user_id: number;
  questionnaire_id: number;
  completed: boolean;
  created_at: Date;
  updated_at: Date;
}

