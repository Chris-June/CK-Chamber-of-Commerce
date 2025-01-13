import React from 'react';
import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';

// Define interface for manual YouTube video
interface YouTubeVideo {
  id: string;
  title: string;
  description?: string;
}

const CKCCTV: React.FC = () => {
  // Hardcoded list of YouTube videos to embed
  const videos: YouTubeVideo[] = [
    {
      id: 'dQw4w9WgXcQ', // Example video ID - replace with actual YouTube video IDs
      title: 'Chatham-Kent Chamber of Commerce Annual Highlights',
      description: 'A comprehensive overview of our achievements and community impact this year.'
    },
    {
      id: 'actual_video_id_2', // Replace with actual video ID
      title: 'Community Business Spotlight',
      description: 'Featuring local businesses making a difference in Chatham-Kent.'
    },
    // Add more videos as needed
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center justify-center">
          <Youtube className="mr-3 text-red-600" size={36} />
          Chatham-Kent Chamber TV
        </h1>
        <p className="text-gray-600 mt-2">
          Discover our latest videos and community highlights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <motion.div
            key={video.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {video.title}
              </h2>
              {video.description && (
                <p className="text-gray-600 text-sm">
                  {video.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CKCCTV;
