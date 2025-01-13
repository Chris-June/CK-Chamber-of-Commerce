import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { BoardDirector } from './boardDirectorsData';

export interface TeamMember {
  name: string;
  role: string;
  headshot: string;
  whatIsGreatAboutCK: string;
  keyMessage: string;
  roleDetails: string[];
  id?: string;
  organization?: string;
  personalMessage?: string;
  chamberImportance?: string;
}

export interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: TeamMember;
}

export function convertTeamMemberToBoardDirector(member: TeamMember): BoardDirector {
  return {
    id: member.id || crypto.randomUUID(), // Generate a UUID if no id exists
    name: member.name,
    role: member.role,
    organization: member.organization || 'Chatham-Kent Chamber of Commerce',
    personalMessage: member.personalMessage || member.keyMessage,
    chamberImportance: member.chamberImportance || 'Supporting local businesses',
    imageUrl: member.headshot,
  };
}

export const TeamModal: React.FC<TeamModalProps> = ({
  isOpen,
  onClose,
  member
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <DialogHeader className="flex flex-col items-center space-y-4 mb-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg">
              <img 
                src={member.headshot} 
                alt={`${member.name} headshot`} 
                className="object-cover w-full h-full"
              />
            </div>
            <DialogTitle className="text-3xl font-bold text-primary text-center">
              {member.name}
            </DialogTitle>
            <p className="text-xl text-muted-foreground">{member.role}</p>
          </DialogHeader>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-4">Role Details</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {member.roleDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-4">What is Great About Chatham-Kent</h3>
              <p className="text-muted-foreground">{member.whatIsGreatAboutCK}</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-secondary mb-4">Key Message</h3>
            <p className="text-muted-foreground italic">{member.keyMessage}</p>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export const TeamMemberCard: React.FC<{ 
  member: TeamMember; 
  onLearnMore: () => void; 
}> = ({ member, onLearnMore }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="w-full h-64 overflow-hidden relative">
        <img 
          src={member.headshot} 
          alt={`${member.name} headshot`} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col">
        <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
        <p className="text-muted-foreground mb-4">{member.role}</p>
        <button 
          onClick={onLearnMore}
          className="mt-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300"
        >
          Learn More
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 5l7 7-7 7M5 5l7 7-7 7" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
};