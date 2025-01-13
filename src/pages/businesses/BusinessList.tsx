
import { Search, SlidersHorizontal } from 'lucide-react';
import BusinessCard from './BusinessCard';
import { mockBusinesses } from './mockData';

export default function BusinessList() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-400 mb-4">
            Discover Local Businesses
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find and connect with the best local businesses in your area.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search businesses..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
              />
            </div>
            <button className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-700 rounded-lg text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transition-all">
              <SlidersHorizontal className="w-5 h-5 mr-2 text-blue-400" />
              Filters
            </button>
          </div>
        </div>

        {/* Business Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockBusinesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      </div>
    </div>
  );
}