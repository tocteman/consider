export interface Question {
  id: number; 
  question: string;
  response_type: 'numeric' | 'string';
  intended_for: 'clients' | 'teammates' | 'general';
  created_by: number; 
  created_at: Date; 
  updated_at: Date; 
}
