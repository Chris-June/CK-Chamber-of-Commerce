import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import { Clock, MapPin, CalendarDays, X } from 'lucide-react';
import { format } from 'date-fns';
import { Event } from './Calendar';
import { Button } from '@/components/ui/button';

interface EventCardProps {
  event: Event;
  onClose?: () => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onClose }) => {
  // If no specific event is provided, use a generic event template
  const displayEvent = event || {
    id: 'generic',
    title: 'Upcoming Chamber Event',
    date: new Date(), 
    time: 'TBD',
    location: 'Location TBA',
    description: 'Stay tuned for our next exciting community event! We are constantly working to bring valuable networking and learning opportunities to our local businesses.'
  };

  return (
    <Card className="w-full max-w-md mx-auto animate-fade-in">
      <CardHeader className="pb-2 relative">
        {onClose && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
        <CardTitle className="text-2xl">{displayEvent.title}</CardTitle>
        {displayEvent.description && (
          <CardDescription>{displayEvent.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="space-y-4 pt-4">
        <div className="flex items-center space-x-2">
          <CalendarDays className="h-5 w-5 text-muted-foreground" />
          <span>
            {displayEvent.date ? format(displayEvent.date, 'MMMM dd, yyyy') : 'Date TBA'}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <span>{displayEvent.time}</span>
        </div>
        {displayEvent.location && (
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <span>{displayEvent.location}</span>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Add to Calendar
        </Button>
      </CardFooter>
    </Card>
  );
};
