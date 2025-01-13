import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Clock,
  Star,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ChevronDown,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { mockBusinesses } from './mockData';
import { Business } from '../../types/business';

// Modular Components
const HeroSection = ({ business }: { business: Business }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [
    business.coverImage,
    ...(business.additionalImages || [])
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="relative h-96 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImageIndex}
          src={heroImages[currentImageIndex]}
          alt={`${business.name} hero image ${currentImageIndex + 1}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/80" />
      
      {heroImages.length > 1 && (
        <>
          <button 
            onClick={prevImage} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full transition"
          >
            <ChevronLeft className="text-white" />
          </button>
          <button 
            onClick={nextImage} 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full transition"
          >
            <ChevronRight className="text-white" />
          </button>
        </>
      )}

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center space-x-6">
            <img
              src={business.logo}
              alt={`${business.name} logo`}
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
            />
            <div>
              <h1 className="text-4xl font-bold text-blue-400 mb-2">{business.name}</h1>
              
              {business.isVerified && (
                <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs px-2 py-1 rounded-md shadow-sm">
                  Verified
                </span>
              )}
              
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-blue-200 font-medium">
                  {business.ratings?.average.toFixed(1) || 'N/A'}
                </span>
                <span className="text-blue-200">•</span>
                <span className="text-blue-200">{business.ratings?.count || 0} Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutSection = ({ business }: { business: Business }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold text-gray-100 mb-4">About</h2>
    <p className="text-gray-400">{business.description}</p>
  </section>
);

const PromotionSection = ({ business }: { business: Business }) => (
  business.promotion && (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-100 mb-4">Current Promotion</h2>
      <motion.div 
        className="p-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-lg shadow"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {business.promotion.text} {business.promotion.url && (
          <a 
            href={business.promotion.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-700 hover:underline ml-2"
          >
            Learn More
          </a>
        )}
      </motion.div>
    </section>
  )
);

const FeaturesSection = ({ business }: { business: Business }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold text-gray-100 mb-4">Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {business.features.map((feature) => (
        <motion.div
          key={feature.id}
          className="bg-gray-800 p-6 rounded-lg shadow hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transition-all"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h3 className="text-lg font-semibold text-blue-300 mb-2">{feature.title}</h3>
          <p className="text-gray-400">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const CategoriesSection = ({ business }: { business: Business }) => (
  business.categories && business.categories.length > 0 && (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-100 mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        {business.categories.map((category) => (
          <span
            key={category}
            className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm"
          >
            {category}
          </span>
        ))}
      </div>
    </section>
  )
);

const ReviewsSection = ({ business }: { business: Business }) => (
  business.reviews && business.reviews.length > 0 && (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-100 mb-4">Reviews</h2>
      <ul className="space-y-4">
        {business.reviews.map((review, index) => (
          <li key={index} className="bg-gray-800 p-4 rounded-lg shadow">
            <p className="text-sm text-blue-200 font-bold">{review.reviewer}</p>
            <p className="text-gray-400">{review.comment}</p>
          </li>
        ))}
      </ul>
    </section>
  )
);

const FAQSection = ({ business }: { business: Business }) => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  // If no FAQs, return null
  if (!business.faq || business.faq.length === 0) {
    return null;
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-100 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {business.faq.map((faq, index) => (
          <motion.div 
            key={index} 
            className="border border-gray-700 rounded-lg overflow-hidden"
            initial={false}
          >
            <motion.button
              onClick={() => toggleQuestion(index)}
              className="w-full flex justify-between items-center p-4 text-left bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <span className="font-semibold text-gray-200">{faq.question}</span>
              <motion.div
                animate={{ rotate: openQuestion === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </motion.div>
            </motion.button>
            <AnimatePresence>
              {openQuestion === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 bg-gray-700 text-gray-300">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const LocationSection = ({ business }: { business: Business }) => (
  <section>
    <h2 className="text-2xl font-bold text-gray-100 mb-4">Location</h2>
    <p className="text-gray-400">
      {business.location.address}, {business.location.city}, {business.location.province}{' '}
      {business.location.postalCode}
    </p>
  </section>
);

const Sidebar = ({ business }: { business: Business }) => (
  <div className="bg-gray-800 p-6 rounded-lg sticky top-6 shadow-lg">
    <h3 className="text-lg font-semibold text-gray-100 mb-4">Business Information</h3>
    <div className="space-y-4">
      <div className="flex items-center text-gray-400">
        <Clock className="w-5 h-5 mr-3" />
        <div>
          <p className="font-medium">Hours</p>
          <p className="text-sm">Mon-Fri: 9AM-6PM</p>
          <p className="text-sm">Sat-Sun: 10AM-4PM</p>
        </div>
      </div>
      <div className="flex items-center text-gray-400">
        <Phone className="w-5 h-5 mr-3" />
        <div>
          <p className="font-medium">Phone</p>
          <a href={`tel:${business.contact.phone}`} className="text-blue-400 hover:text-blue-600">
            {business.contact.phone}
          </a>
        </div>
      </div>
      <div className="flex items-center text-gray-400">
        <Mail className="w-5 h-5 mr-3" />
        <div>
          <p className="font-medium">Email</p>
          <a href={`mailto:${business.contact.email}`} className="text-blue-400 hover:text-blue-600">
            {business.contact.email}
          </a>
        </div>
      </div>
      <div className="flex items-center text-gray-400">
        <Globe className="w-5 h-5 mr-3" />
        <div>
          <p className="font-medium">Social Media</p>
          <div className="flex space-x-3 mt-2">
            {business.socialMedia.facebook && (
              <a
                href={business.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <Facebook className="w-5 h-5" />
              </a>
            )}
            {business.socialMedia.twitter && (
              <a
                href={business.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {business.socialMedia.instagram && (
              <a
                href={business.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <Instagram className="w-5 h-5" />
              </a>
            )}
            {business.socialMedia.linkedin && (
              <a
                href={business.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
    <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-4 rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all">
      Contact Business
    </button>
  </div>
);

const BusinessDetails = () => {
  const { businessId } = useParams();
  const [activeTab, setActiveTab] = useState('about');
  const [isVisible, setIsVisible] = useState(false);
  const business = mockBusinesses.find((b) => b.id === businessId || b.slug === businessId);

  // Back to top functionality
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!business) return <div>Business not found</div>;

  const tabs = [
    { id: 'about', label: 'About', content: <AboutSection business={business} /> },
    { id: 'features', label: 'Features', content: <FeaturesSection business={business} /> },
    { id: 'reviews', label: 'Reviews', content: <ReviewsSection business={business} /> },
    { id: 'faq', label: 'FAQ', content: <FAQSection business={business} /> },
    { id: 'location', label: 'Location', content: <LocationSection business={business} /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 text-white relative"
    >
      <Helmet>
        <title>{business.name} | CK Chamber of Commerce</title>
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <HeroSection business={business} />
        
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-700 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.id 
                  ? 'border-b-2 border-blue-500 text-blue-500' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div>
          {tabs.find(tab => tab.id === activeTab)?.content}
        </div>

        <PromotionSection business={business} />
        <CategoriesSection business={business} />
        <LocationSection business={business} />
        <Sidebar business={business} />
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </motion.div>
  );
};

export default BusinessDetails;