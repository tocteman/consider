export interface Project {
  id: number; 
  name: string;
  description: string;
  status: 'draft' | 'active' | 'archived'; 
  owner_id: number; 
  start_date: Date; 
  end_date: Date; 
  created_at: Date; 
  updated_at: Date; 
}


