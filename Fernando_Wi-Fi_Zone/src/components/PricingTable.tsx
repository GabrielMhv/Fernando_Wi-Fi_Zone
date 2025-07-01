import React from 'react';
import { Clock, Calendar, Zap } from 'lucide-react';

const PricingTable: React.FC = () => {
  const packages = [
    {
      name: '3 Heures',
      price: '100 FCFA',
      validity: '24 Heures',
      icon: <Clock className="w-6 h-6" />,
      popular: false,
      features: ['Accès illimité', 'Haut débit', 'Support 24h/24']
    },
    {
      name: '24 Heures',
      price: '200 FCFA',
      validity: '24 Heures',
      icon: <Calendar className="w-6 h-6" />,
      popular: true,
      features: ['Accès illimité', 'Haut débit', 'Support 24h/24', 'Priorité réseau']
    },
    {
      name: '3 Jours',
      price: '500 FCFA',
      validity: '72 Heures',
      icon: <Zap className="w-6 h-6" />,
      popular: false,
      features: ['Accès illimité', 'Haut débit', 'Support 24h/24', 'Priorité réseau']
    },
    {
      name: '7 Jours',
      price: '1000 FCFA',
      validity: '1 Semaine',
      icon: <Calendar className="w-6 h-6" />,
      popular: false,
      features: ['Accès illimité', 'Haut débit', 'Support 24h/24', 'Priorité réseau', 'Sauvegarde automatique']
    },
    {
      name: '1 Mois',
      price: '3000 FCFA',
      validity: '30 Jours',
      icon: <Zap className="w-6 h-6" />,
      popular: false,
      features: ['Accès illimité', 'Haut débit', 'Support 24h/24', 'Priorité réseau', 'Sauvegarde automatique', 'Accès membre VIP']
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Forfaits WiFi</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choisissez le forfait qui correspond le mieux à vos besoins. 
          Connexion haut débit garantie 24h/24 et 7j/7.
        </p>
      </div>

      {/* Mobile view - Cards */}
      <div className="block md:hidden space-y-4">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-xl shadow-lg border-2 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
              pkg.popular ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Le plus populaire
                </span>
              </div>
            )}
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  {pkg.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{pkg.name}</h3>
                  <p className="text-sm text-gray-500">Valide {pkg.validity}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">{pkg.price}</p>
              </div>
            </div>
            
            <ul className="space-y-2">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Desktop view - Table */}
      <div className="hidden md:block bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                  Forfait
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                  Prix
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                  Validité
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                  Avantages
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {packages.map((pkg, index) => (
                <tr
                  key={index}
                  className={`transition-all duration-200 hover:bg-blue-50 ${
                    pkg.popular ? 'bg-blue-25 border-l-4 border-blue-500' : ''
                  }`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3">
                        {pkg.icon}
                      </div>
                      <div>
                        <div className="text-lg font-medium text-gray-900 flex items-center">
                          {pkg.name}
                          {pkg.popular && (
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              Populaire
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-2xl font-bold text-blue-600">{pkg.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-medium">{pkg.validity}</div>
                  </td>
                  <td className="px-6 py-4">
                    <ul className="space-y-1">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;