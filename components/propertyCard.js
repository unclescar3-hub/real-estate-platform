import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 m-4">
      {/* 1. Property Image & Owner Badge */}
      <div className="relative">
        <img 
          className="w-full h-48 object-cover" 
          src={property.image_url || "https://via.placeholder.com/400x250"} 
          alt={property.title} 
        />
        <div className="absolute top-2 left-2 flex gap-2">
          <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded shadow-md">
            {property.owner_type === 'company' ? '🏢 Company' : '👤 Individual'}
          </span>
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow-md">
            {property.category}
          </span>
        </div>
      </div>

      {/* 2. Property Details */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-1 text-gray-800">{property.title}</div>
        <p className="text-gray-600 text-sm mb-2">{property.location}</p>
        <div className="text-2xl font-bold text-blue-700 mb-2">${property.price}</div>
        
        {/* Verification Status */}
        {property.is_verified && (
          <div className="flex items-center text-green-600 text-xs font-semibold mb-4">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
            Verified Listing
          </div>
        )}
      </div>

      {/* 3. Agent Info & Contact Section */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gray-300 mr-3 overflow-hidden border-2 border-blue-400">
             <img src={property.agent.avatar} alt="Agent" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-800">{property.agent.name}</p>
            <p className="text-xs text-green-500 font-medium animate-pulse">● Live Nearby</p>
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm transition-colors">
          Contact
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
