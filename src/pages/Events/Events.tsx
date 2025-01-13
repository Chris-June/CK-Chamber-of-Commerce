import React, { useState } from 'react';
import { Calendar, Event } from '@/components/Events/Calendar';
import { EventCard } from '@/components/Events/EventCard';
import { motion, AnimatePresence } from 'framer-motion';

// Sample events - in a real-world scenario, these would come from a backend or CMS
const SAMPLE_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Chamber Networking Mixer',
    date: new Date(2025, 0, 15),  // January 15, 2025
    time: '6:00 PM - 8:00 PM',
    location: 'Community Center',
    description: 'Join us for an evening of networking and professional connections.'
  },
  {
    id: '2',
    title: 'Small Business Workshop',
    date: new Date(2025, 0, 22),  // January 22, 2025
    time: '9:00 AM - 12:00 PM',
    location: 'Chamber Conference Room',
    description: 'Learn strategies for growing your small business in the current market.'
  },
  {
    id: '3',
    title: 'Annual Chamber Gala',
    date: new Date(2025, 1, 5),   // February 5, 2025
    time: '7:00 PM - 11:00 PM',
    location: 'Grand Ballroom',
    description: 'Celebrate our community\'s achievements and honor local business leaders.'
  }
];

export const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(SAMPLE_EVENTS);

  const handleEventSelect = (event: Event) => {
    setSelectedEvent(event);
    setSelectedDate(event.date);
    const filtered = SAMPLE_EVENTS.filter(e => 
      e.date.toDateString() === event.date.toDateString()
    );
    setFilteredEvents(filtered);
  };

  const resetFilter = () => {
    setSelectedEvent(null);
    setSelectedDate(null);
    setFilteredEvents(SAMPLE_EVENTS);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200
      }
    }
  };

  // Check if there are any events today
  const eventsToday = SAMPLE_EVENTS.filter(event => event.date.toDateString() === new Date().toDateString());
  const hasEvents = eventsToday.length > 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        Chamber Events
      </motion.h1>

      {selectedDate && (
        <div className="mb-4 p-3 bg-blue-50 rounded-md">
          <p className="text-blue-700">
            Selected Date: {selectedDate.toLocaleDateString()}
          </p>
        </div>
      )}

      {!hasEvents && (
        <div className="text-gray-500 text-center py-4">
          No events scheduled for today.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Calendar 
            events={SAMPLE_EVENTS} 
            onEventSelect={handleEventSelect}
          />
        </div>
        <div>
          {selectedEvent ? (
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">{selectedEvent.title}</h2>
              <EventCard event={selectedEvent} />
            </div>
          ) : (
            <div className="text-gray-500">Select an event to view details</div>
          )}
        </div>
      </div>

      {selectedEvent && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mb-4 text-center"
        >
          <button 
            onClick={resetFilter} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Reset Filter
          </button>
        </motion.div>
      )}

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              onClick={() => handleEventSelect(event)}
              className="cursor-pointer bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all"
            >
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-1">{event.date.toLocaleDateString()}</p>
              <p className="text-gray-600 mb-1">{event.time}</p>
              <p className="text-gray-600">{event.location}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};