import { MapPin, Star, Phone, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import type { Business } from '../../types/business';

interface BusinessCardProps {
  business: Business;
}

export default function BusinessCard({ business }: BusinessCardProps) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/businesses/${business.slug}`);
  };

  return (
    <div 
      className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl cursor-pointer"
      onClick={handleViewDetails}
    >
      <div className="relative h-48">
        <img
          src={business.coverImage}
          alt={business.name}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute top-4 left-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full p-2 shadow-md">
          <img
            src={business.logo}
            alt={`${business.name} logo`}
            className="w-12 h-12 object-contain"
          />
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-blue-400">{business.name}</h3>
          <div className="flex items-center">
            {/* Ratings */}
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="ml-1 text-sm font-medium text-gray-300">
              {business.ratings?.average.toFixed(1) || 'N/A'}
            </span>
            <span className="text-sm text-gray-500 ml-2">
              ({business.ratings?.count || 0} reviews)
            </span>
          </div>
        </div>

        {/* Verified Badge */}
        {business.isVerified && (
          <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs px-2 py-1 rounded-md shadow-sm mb-2">
            Verified
          </span>
        )}

        {/* Promotion */}
        {business.promotion && (
          <div className="mb-4 p-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 text-sm rounded-lg shadow">
            {business.promotion.text}
            {business.promotion.url && (
              <Link 
                to={business.promotion.url} 
                className="ml-2 text-blue-800 hover:underline"
              >
                Learn More
              </Link>
            )}
          </div>
        )}

        {/* Description */}
        <p className="text-gray-400 mb-4 line-clamp-2">{business.description}</p>

        {/* Categories */}
        {business.categories && business.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {business.categories.map((category) => (
              <span
                key={category}
                className="text-xs bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full hover:bg-blue-500 hover:text-white transition-all"
              >
                {category}
              </span>
            ))}
          </div>
        )}

        {/* Location and Contact Info */}
        <div className="space-y-2 mt-4">
          <div className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-sm text-gray-300">{business.location.city}, {business.location.province}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Phone className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-sm text-gray-300">{business.contact.phone}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Globe className="w-4 h-4 mr-2 text-blue-400" />
            <a
              href={`mailto:${business.contact.email}`}
              className="text-sm text-blue-400 hover:text-blue-500 transition-colors"
            >
              {business.contact.email}
            </a>
          </div>
        </div>

        {/* Reviews Section */}
        {business.reviews && business.reviews.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-bold text-gray-200 mb-2">Recent Reviews</h4>
            <ul className="space-y-2">
              {business.reviews.slice(0, 3).map((review, index) => (
                <li key={index} className="text-sm text-gray-300">
                  <strong>{review.reviewer}:</strong> {review.comment}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="p-6 border-t border-gray-700 flex justify-center">
        <button 
          onClick={handleViewDetails} 
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
}