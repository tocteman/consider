export interface Participation {
  id: number;
  user_id: number;
  project_id: number;
  role: 'client' | 'teammate';
  created_at: Date;
  updated_at: Date;
}
