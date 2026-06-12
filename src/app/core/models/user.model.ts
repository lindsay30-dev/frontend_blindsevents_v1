/**
 * Modèle utilisateur basé sur l'API Django
 */
export interface Profile {
  id: number;
  role: 'organizer' | 'participant';
  phone?: string;
  avatar?: string;
  bio?: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  profile?: Profile;
}

export interface RegisterData {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  password2: string;
  role: 'organizer' | 'participant';
}

export interface LoginData {
  username?: string;
  email?: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  access: string;
  refresh: string;
}
