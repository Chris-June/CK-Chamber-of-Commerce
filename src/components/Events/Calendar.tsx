import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface Event {
  id: string;
  title: string;
  date: Date;
  description?: string;
  location?: string;
  time?: string;
}

interface CalendarProps {
  events?: Event[];
  onEventSelect?: (event: Event) => void;
}

export const Calendar: React.FC<CalendarProps> = ({ 
  events = [], 
  onEventSelect 
}) => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 1));

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const daysInMonth = eachDayOfInterval({
    start: startDate,
    end: endDate
  });

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-4">
      <Button 
        variant="outline" 
        size="icon" 
        onClick={() => setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <h2 className="text-xl font-bold">
        {format(currentDate, 'MMMM yyyy')}
      </h2>
      <Button 
        variant="outline" 
        size="icon" 
        onClick={() => setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );

  const renderDaysHeader = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <div className="grid grid-cols-7 text-center text-muted-foreground mb-2">
        {days.map(day => (
          <div key={day} className="font-semibold">{day}</div>
        ))}
      </div>
    );
  };

  const renderCalendarGrid = () => (
    <div className="grid grid-cols-7 gap-2">
      {daysInMonth.map(day => {
        const dayEvents = events.filter(event => isSameDay(event.date, day));
        
        return (
          <div 
            key={day.toISOString()} 
            className={cn(
              "border rounded-md p-2 h-20 overflow-hidden relative",
              !isSameMonth(day, monthStart) && "bg-muted/50 text-muted-foreground",
              dayEvents.length > 0 && "cursor-pointer hover:bg-accent"
            )}
            onClick={() => dayEvents.length > 0 && onEventSelect?.(dayEvents[0])}
          >
            <div className="flex justify-between">
              <span className={cn(
                "text-sm",
                isSameDay(day, new Date()) && "bg-primary text-primary-foreground rounded-full px-2",
                dayEvents.length > 0 && "font-bold text-primary"
              )}>
                {format(day, 'd')}
              </span>
              {dayEvents.length > 0 && (
                <span 
                  className="absolute bottom-1 right-1 w-2 h-2 bg-primary rounded-full"
                  title={dayEvents.map(event => event.title).join(', ')}
                />
              )}
            </div>
            {dayEvents.length > 0 && (
              <div className="text-xs text-muted-foreground mt-1 truncate">
                {dayEvents.map(event => event.title).join(', ')}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="p-4 bg-background border rounded-lg shadow-sm">
      {renderHeader()}
      {renderDaysHeader()}
      {renderCalendarGrid()}
    </div>
  );
};
