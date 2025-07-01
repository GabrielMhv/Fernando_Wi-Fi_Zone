import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Wifi, Clock, User, LogOut } from 'lucide-react';
import { User as UserType } from '../types/user';
import { AuthService } from '../services/authService';

const SuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserType | null>(null);
  const [remainingTime, setRemainingTime] = useState<string>('');

  useEffect(() => {
    const storedUser = sessionStorage.getItem('currentUser');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setRemainingTime(AuthService.getRemainingTime(userData));
      
      // Update remaining time every minute
      const interval = setInterval(() => {
        setRemainingTime(AuthService.getRemainingTime(userData));
      }, 60000);
      
      return () => clearInterval(interval);
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('currentUser');
    navigate('/');
  };

  if (!user) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="relative mx-auto w-20 h-20 mb-4">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto animate-pulse" />
            <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-25"></div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Connexion Réussie !
          </h1>
          <p className="text-gray-600">
            Bienvenue sur le réseau FERNANDO WIFI ZONE
          </p>
        </div>

        {/* User Info Card */}
        <div className="bg-blue-50 rounded-xl p-6 mb-6">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-blue-100 rounded-lg mr-3">
              {user.type === 'ticket' ? (
                <Wifi className="w-5 h-5 text-blue-600" />
              ) : (
                <User className="w-5 h-5 text-blue-600" />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                {user.type === 'ticket' ? 'Ticket de connexion' : 'Compte membre'}
              </h3>
              <p className="text-sm text-gray-600">{user.username}</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Type de compte :</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                user.type === 'ticket' 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-purple-100 text-purple-800'
              }`}>
                {user.type === 'ticket' ? 'Ticket' : 'Membre'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Temps restant :</span>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm font-medium text-green-600">
                  {remainingTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Connection Status */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
            <div>
              <p className="text-green-800 font-medium text-sm">Connexion active</p>
              <p className="text-green-600 text-xs">Internet haut débit disponible</p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => navigate('/')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Retour à l'accueil
          </button>
          
          <button
            onClick={handleLogout}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Se déconnecter
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            En cas de problème de connexion, contactez le support au<br />
            📞 01 97 07 02 13 / 01 40 15 04 13
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;