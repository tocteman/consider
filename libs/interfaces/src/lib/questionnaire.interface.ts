import {Question} from "./question.interface";

export interface Questionnaire {
  id: number; 
  name: string;
  project_id: number;
  created_by: number; 
  created_at: Date; 
  updated_at: Date; 
  questions?: Question[]
}
