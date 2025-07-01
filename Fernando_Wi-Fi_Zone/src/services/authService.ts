import { User, LoginCredentials } from '../types/user';
import { mockUsers } from '../data/mockUsers';

export class AuthService {
  static authenticate(credentials: LoginCredentials): { success: boolean; user?: User; message?: string } {
    const user = mockUsers.find(
      u => u.username === credentials.username && 
           u.password === credentials.password && 
           u.type === credentials.type
    );

    if (!user) {
      return {
        success: false,
        message: 'Identifiants invalides. Vérifiez votre nom d\'utilisateur et mot de passe.'
      };
    }

    // Check if ticket/membership is expired
    if (new Date() > user.expiresAt) {
      return {
        success: false,
        message: `Votre ${user.type === 'ticket' ? 'ticket' : 'abonnement'} a expiré le ${user.expiresAt.toLocaleDateString('fr-FR')}. Veuillez acheter un nouveau ${user.type === 'ticket' ? 'ticket' : 'abonnement'}.`
      };
    }

    return {
      success: true,
      user,
      message: 'Connexion réussie!'
    };
  }

  static getRemainingTime(user: User): string {
    const now = new Date();
    const remaining = user.expiresAt.getTime() - now.getTime();
    
    if (remaining <= 0) return 'Expiré';
    
    const hours = Math.floor(remaining / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 24) {
      const days = Math.floor(hours / 24);
      return `${days} jour${days > 1 ? 's' : ''} restant${days > 1 ? 's' : ''}`;
    }
    
    return `${hours}h ${minutes}min restant${hours > 1 || minutes > 1 ? 's' : ''}`;
  }
}