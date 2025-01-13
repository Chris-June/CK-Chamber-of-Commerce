import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Info, Tractor, Gavel, BookOpen } from 'lucide-react';
import { Committee } from './committeesData';
import { Link } from 'react-router-dom';

interface CommitteesModalProps {
  isOpen: boolean;
  onClose: () => void;
  committee: Committee;
}

const getCommitteeIcon = (iconName?: string) => {
  switch (iconName) {
    case 'Tractor': return <Tractor className="w-12 h-12 text-primary" />;
    case 'Gavel': return <Gavel className="w-12 h-12 text-primary" />;
    case 'BookOpen': return <BookOpen className="w-12 h-12 text-primary" />;
    default: return <Info className="w-12 h-12 text-primary" />;
  }
};

export const CommitteesModal: React.FC<CommitteesModalProps> = ({
  isOpen,
  onClose,
  committee
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-white dark:bg-gray-800 rounded-lg shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <DialogHeader className="flex flex-col items-center space-y-4">
            {getCommitteeIcon(committee.icon)}
            <DialogTitle className="text-3xl font-bold text-primary text-center">
              {committee.name}
            </DialogTitle>
            <p className="text-muted-foreground text-center">{committee.shortDescription}</p>
          </DialogHeader>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-4">Mission</h3>
              <p className="text-muted-foreground">{committee.mission}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-secondary mb-4">Key Objectives</h3>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                {committee.keyObjectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-secondary mb-4">About the Committee</h3>
            <p className="text-muted-foreground">{committee.fullDescription}</p>
          </div>

          <div className="mt-8 flex flex-col items-center space-y-4">
            <p className="text-muted-foreground">
              <strong>Meeting Frequency:</strong> {committee.meetingFrequency}
            </p>

            {committee.ctaLink && committee.ctaText && (
              <Link to={committee.ctaLink}>
                <Button variant="default" size="lg" className="mt-4">
                  {committee.ctaText}
                </Button>
              </Link>
            )}
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

interface CommitteesCardProps {
  committee: Committee;
}

export const CommitteesCard: React.FC<CommitteesCardProps> = ({ committee }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="w-full max-w-sm hover:shadow-lg transition-shadow duration-300 group">
        <CardHeader className="flex flex-col items-center space-y-4 pb-0">
          {getCommitteeIcon(committee.icon)}
          <h3 className="text-lg font-semibold text-center">{committee.name}</h3>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-muted-foreground">{committee.shortDescription}</p>
        </CardContent>
        <CardFooter>
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={() => setIsModalOpen(true)}
          >
            <Info className="mr-2 h-4 w-4" />
            Learn More
          </Button>
        </CardFooter>
      </Card>

      <CommitteesModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        committee={committee}
      />
    </>
  );
};