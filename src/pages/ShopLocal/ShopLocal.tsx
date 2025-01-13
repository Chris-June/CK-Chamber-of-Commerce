import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ShoppingBag, MapPin, Globe } from 'lucide-react';

interface LocalBusiness {
  id: string;
  name: string;
  description: string;
  address: string;
  website?: string;
  category: string;
}

const ShopLocal: React.FC = () => {
  const [businesses, setBusinesses] = useState<LocalBusiness[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Mock data - in a real app, this would come from a backend or Supabase
  const mockBusinesses: LocalBusiness[] = [
    {
      id: '1',
      name: 'Main Street Bakery',
      description: 'Artisan bread and pastries made fresh daily',
      address: '123 Main St, Chagrin Falls, OH 44022',
      website: 'https://mainstreetbakery.com',
      category: 'Food & Dining'
    },
    {
      id: '2',
      name: 'Chagrin Falls Hardware',
      description: 'Local hardware store serving the community since 1965',
      address: '45 N Main St, Chagrin Falls, OH 44022',
      category: 'Retail'
    }
  ];

  useEffect(() => {
    // Simulate data fetching
    setBusinesses(mockBusinesses);
  }, []);

  const categories = [...new Set(mockBusinesses.map(b => b.category))];

  const filteredBusinesses = selectedCategory
    ? businesses.filter(b => b.category === selectedCategory)
    : businesses;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold mb-6 text-primary">Shop Local</h1>
      
      <div className="mb-6 flex flex-wrap gap-2">
        <Button 
          variant={selectedCategory === null ? 'default' : 'outline'}
          onClick={() => setSelectedCategory(null)}
        >
          All Businesses
        </Button>
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBusinesses.map(business => (
          <Card key={business.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShoppingBag className="mr-2 text-primary" />
                {business.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">{business.description}</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-primary" />
                  <span>{business.address}</span>
                </div>
                {business.website && (
                  <div className="flex items-center">
                    <Globe className="mr-2 h-4 w-4 text-primary" />
                    <a 
                      href={business.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredBusinesses.length === 0 && (
        <div className="text-center text-muted-foreground py-8">
          No businesses found in this category.
        </div>
      )}
    </motion.div>
  );
};

export default ShopLocal;