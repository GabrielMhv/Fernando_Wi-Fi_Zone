import React from 'react';
import { Wifi } from 'lucide-react';

const WifiLogo: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center mb-8">
      {/* Animated WiFi waves */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="wifi-wave wifi-wave-1"></div>
        <div className="wifi-wave wifi-wave-2"></div>
        <div className="wifi-wave wifi-wave-3"></div>
      </div>
      
      {/* Main WiFi icon */}
      <div className="relative z-10 bg-blue-600 p-4 rounded-full shadow-lg">
        <Wifi className="w-12 h-12 text-white" />
      </div>
      
      <style jsx>{`
        .wifi-wave {
          position: absolute;
          border: 2px solid #007BFF;
          border-radius: 50%;
          opacity: 0;
          animation: wifiPulse 2s infinite;
        }
        
        .wifi-wave-1 {
          width: 80px;
          height: 80px;
          animation-delay: 0s;
        }
        
        .wifi-wave-2 {
          width: 120px;
          height: 120px;
          animation-delay: 0.5s;
        }
        
        .wifi-wave-3 {
          width: 160px;
          height: 160px;
          animation-delay: 1s;
        }
        
        @keyframes wifiPulse {
          0% {
            transform: scale(0.5);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default WifiLogo;