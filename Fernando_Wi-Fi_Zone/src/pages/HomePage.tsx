import React from 'react';
import { useNavigate } from 'react-router-dom';
import WifiLogo from '../components/WifiLogo';
import LoginForm from '../components/LoginForm';
import PricingTable from '../components/PricingTable';
import ServicesSection from '../components/ServicesSection';
import { User } from '../types/user';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (user: User) => {
    // Store user data in sessionStorage for the success page
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    navigate('/success');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-bold text-blue-900">FERNANDO WIFI ZONE</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Login Section */}
        <section className="mb-16">
          <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-8">
            <WifiLogo />
            
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                FERNANDO WIFI ZONE
              </h1>
              <p className="text-gray-600 leading-relaxed">
                WiFi disponible 24H/24<br />
                Haut débit en illimité à bas prix
              </p>
            </div>

            <LoginForm onLoginSuccess={handleLoginSuccess} />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <PricingTable />
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <ServicesSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">FERNANDO WIFI ZONE</h3>
              <p className="text-blue-200">Votre partenaire numérique de confiance</p>
            </div>
            
            <div className="border-t border-blue-800 pt-4">
              <p className="text-blue-300 text-sm">
                Copyright © 2025 Fernando WiFi Zone. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;