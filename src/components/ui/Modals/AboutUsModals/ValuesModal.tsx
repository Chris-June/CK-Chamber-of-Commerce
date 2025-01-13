import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { Value } from './valuesData';

export interface ValuesModalProps {
  isOpen: boolean;
  onClose: () => void;
  value: Value;
}

export const ValuesModal: React.FC<ValuesModalProps> = ({
  isOpen,
  onClose,
  value
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <DialogHeader className="flex flex-col items-center space-y-4">
            {value.icon && React.createElement(value.icon, { className: 'w-12 h-12 text-primary' })}
            <DialogTitle className="text-3xl font-bold text-primary text-center">
              {value.name}
            </DialogTitle>
            <p className="text-muted-foreground text-center">{value.shortDescription}</p>
          </DialogHeader>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-4">Importance to Members</h3>
              <p className="text-muted-foreground">{value.detailedDescription.memberImportance}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-4">Community Impact</h3>
              <p className="text-muted-foreground">{value.detailedDescription.communityImpact}</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-secondary mb-4">Key Benefits</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {value.detailedDescription.keyBenefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export const ValuesCard: React.FC<{ value: Value; onLearnMore: () => void }> = ({ 
  value, 
  onLearnMore 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      {value.icon && React.createElement(value.icon, { className: 'w-12 h-12 text-primary' })}
      <h3 className="mt-4 text-xl font-semibold text-primary">{value.name}</h3>
      <p className="mt-2 text-muted-foreground">{value.shortDescription}</p>
      <button 
        onClick={onLearnMore}
        className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
      >
        Learn More
      </button>
    </div>
  );
};