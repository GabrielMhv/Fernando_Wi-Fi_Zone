import React from 'react';
import { 
  Printer, 
  FileText, 
  CreditCard, 
  BookOpen, 
  Wrench, 
  Wifi,
  Copy,
  Palette
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      category: 'Services de Bureau',
      icon: <Printer className="w-8 h-8" />,
      items: ['Photocopies', 'Impression noir et couleur', 'Saisie de documents', 'Reliure professionnelle', 'Plastification']
    },
    {
      category: 'Création Graphique',
      icon: <Palette className="w-8 h-8" />,
      items: ['Cartes de visite', 'Cartes d\'invitation', 'Cartes de mariage', 'Flyers et affiches', 'Design personnalisé']
    },
    {
      category: 'E-Services',
      icon: <FileText className="w-8 h-8" />,
      items: ['CIP (Carte d\'Identité)', 'Acte de naissance sécurisé', 'Casier judiciaire', 'Certificats divers', 'Démarches administratives']
    },
    {
      category: 'Fournitures',
      icon: <Copy className="w-8 h-8" />,
      items: ['Papeterie complète', 'Matériel de bureau', 'Accessoires informatiques', 'Consommables imprimante', 'Articles scolaires']
    },
    {
      category: 'Formation & Maintenance',
      icon: <BookOpen className="w-8 h-8" />,
      items: ['Formation informatique', 'Maintenance PC', 'Réparation matériel', 'Support technique', 'Cours personnalisés']
    },
    {
      category: 'Installation Réseau',
      icon: <Wifi className="w-8 h-8" />,
      items: ['Installation WiFi', 'Configuration réseau', 'Zones WiFi publiques', 'Sécurisation réseau', 'Optimisation débit']
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Prestations</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          FERNANDO WIFI ZONE vous propose une gamme complète de services pour répondre à tous vos besoins 
          numériques et administratifs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-blue-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-lg text-blue-600 mr-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{service.category}</h3>
            </div>
            
            <ul className="space-y-3">
              {service.items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Besoin d'un service personnalisé ?</h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Contactez-nous pour obtenir un devis gratuit et personnalisé selon vos besoins spécifiques.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
            <span className="mr-2">📞</span>
            <span className="font-medium">01 97 07 02 13</span>
          </div>
          <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
            <span className="mr-2">📞</span>
            <span className="font-medium">01 40 15 04 13</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;