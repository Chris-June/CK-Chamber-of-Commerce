import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { ExecutiveDirector } from './executiveDirectorsData';

interface ExecutiveDirectorsModalProps {
  isOpen: boolean;
  onClose: () => void;
  director: ExecutiveDirector;
}

export const ExecutiveDirectorsModal: React.FC<ExecutiveDirectorsModalProps> = ({
  isOpen,
  onClose,
  director
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">
              {director.name} - {director.role}
            </DialogTitle>
            <p className="text-muted-foreground">{director.organization}</p>
          </DialogHeader>

          <div className="grid md:grid-cols-[200px_1fr] gap-6 mt-6">
            {director.imageUrl && (
              <div className="flex justify-center items-center">
                <img 
                  src={director.imageUrl} 
                  alt={director.name} 
                  className="w-48 h-48 object-cover rounded-full shadow-lg"
                />
              </div>
            )}

            <div>
              <DialogDescription>
                <section className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">Personal Message</h3>
                    <p className="text-muted-foreground">{director.personalMessage}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-secondary">Chamber Importance</h3>
                    <p className="text-muted-foreground">{director.chamberImportance}</p>
                  </div>
                </section>
              </DialogDescription>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

interface ExecutiveDirectorsCardProps {
  director: ExecutiveDirector;
  onClick?: () => void;
}

export const ExecutiveDirectorsCard: React.FC<ExecutiveDirectorsCardProps> = ({ director, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="w-full max-w-sm hover:shadow-lg transition-shadow duration-300 group">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            {director.imageUrl ? (
              <img 
                src={director.imageUrl} 
                alt={director.name} 
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500">No Image</span>
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold">{director.name}</h3>
              <p className="text-sm text-muted-foreground">{director.role}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={() => {
              setIsModalOpen(true);
              onClick?.();
            }}
          >
            <Info className="mr-2 h-4 w-4" />
            Learn More
          </Button>
        </CardFooter>
      </Card>

      <ExecutiveDirectorsModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        director={director}
      />
    </>
  );
};