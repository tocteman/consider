export interface User {
  id: number; 
  type: 'client' | 'teammate' | 'manager';
  name: string;
  password: string;
  email: string; 
  phone: string; 
  created_at: Date; 
  updated_at: Date; 
}
