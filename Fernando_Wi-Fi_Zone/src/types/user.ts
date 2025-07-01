export interface User {
  id: string;
  username: string;
  password: string;
  type: 'ticket' | 'membre';
  createdAt: Date;
  validityHours: number;
  expiresAt: Date;
}

export interface LoginCredentials {
  username: string;
  password: string;
  type: 'ticket' | 'membre';
}