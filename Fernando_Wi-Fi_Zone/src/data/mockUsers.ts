import { User } from '../types/user';

// Mock database with sample users
export const mockUsers: User[] = [
  {
    id: '1',
    username: 'ticket001',
    password: 'pass123',
    type: 'ticket',
    createdAt: new Date(),
    validityHours: 3,
    expiresAt: new Date(Date.now() + 3 * 60 * 60 * 1000), // 3 hours from now
  },
  {
    id: '2',
    username: 'ticket002',
    password: 'pass456',
    type: 'ticket',
    createdAt: new Date(Date.now() - 25 * 60 * 60 * 1000), // 25 hours ago
    validityHours: 24,
    expiresAt: new Date(Date.now() - 1 * 60 * 60 * 1000), // expired 1 hour ago
  },
  {
    id: '3',
    username: 'membre001',
    password: 'membre123',
    type: 'membre',
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
    validityHours: 720, // 30 days
    expiresAt: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000), // 20 days from now
  },
  {
    id: '4',
    username: 'ticket003',
    password: 'temp789',
    type: 'ticket',
    createdAt: new Date(),
    validityHours: 24,
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
  }
];