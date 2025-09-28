import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PlanCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({ name, price, period, features, highlighted = false }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`glass-card p-8 relative ${highlighted ? 'border-primary-gold' : ''}`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary-gold text-primary-black px-4 py-2 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-headline font-bold mb-2 text-primary-gold">{name}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-400">/{period}</span>
        </div>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <Check className="w-5 h-5 text-primary-green flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full ${highlighted ? 'btn-primary' : 'btn-secondary'}`}>
        Choose Plan
      </button>
    </motion.div>
  );
};

export default PlanCard;
