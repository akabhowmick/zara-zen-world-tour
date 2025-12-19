export interface BookUser {
  id: string;                    
  name: string;                  
  phone_number: string | null;   
  email: string;                 
  games_played: number;          
  high_score: number;            
  current_tier: string;          
  created_at?: string;           
  updated_at?: string;           
}