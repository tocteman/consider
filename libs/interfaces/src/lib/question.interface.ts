export interface Question {
  id: string; 
  question: string;
  response_type: 'numeric' | 'string';
  intended_for: 'clients' | 'teammates' | 'general';
  order: number; 
  created_by: string; 
  created_at: Date; 
  updated_at: Date; 
}
