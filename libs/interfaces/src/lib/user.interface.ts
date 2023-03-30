export interface User {
  id: string; 
  type: 'client' | 'teammate' | 'manager';
  name: string;
  password: string;
  email: string; 
  phone: string; 
  created_at: Date; 
  updated_at: Date; 
}
