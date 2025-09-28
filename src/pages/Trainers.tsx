import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Calendar, Users } from 'lucide-react';
import { faker } from '@faker-js/faker';

const Trainers: React.FC = () => {
  // Generate trainer data
  const trainers = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    specialty: faker.helpers.arrayElement(['Weight Training', 'Yoga', 'Cardio', 'CrossFit', 'Nutrition', 'HIIT']),
    experience: faker.number.int({ min: 2, max: 12 }),
    rating: faker.number.float({ min: 4.2, max: 5.0, fractionDigits: 1 }),
    clients: faker.number.int({ min: 15, max: 50 }),
    image: `https://images.unsplash.com/photo-${faker.helpers.arrayElement([
      '1570295999919-56ceb5eca553',
      '1571019613454-1cb2f99b2d8b',
      '1584735175315-9d5df23860e6',
      '1571019614242-c5c5dee9f50b',
      '1594381898411-03f4ac64f4c0',
      '1607990281513-2c110a25bd8c'
    ])}?q=80&w=400&h=400&fit=crop&crop=face`,
    bio: faker.lorem.paragraph(),
    certifications: faker.helpers.arrayElements(['NASM-CPT', 'ACSM', 'ACE', 'NSCA-CSCS', 'Yoga Alliance'], { min: 1, max: 3 })
  }));

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070)',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-headline font-bold mb-6">
              Our Expert <span className="text-primary-gold">Trainers</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
              Meet the certified professionals who will guide your fitness journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-green px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">{trainer.specialty}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-headline font-bold mb-2 text-primary-gold">
                    {trainer.name}
                  </h3>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>{trainer.experience} years</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-primary-gold fill-current" />
                      <span>{trainer.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{trainer.clients}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {trainer.bio}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-primary-gold mb-2">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.certifications.map((cert, certIndex) => (
                        <span
                          key={certIndex}
                          className="bg-primary-green/20 text-primary-green px-2 py-1 rounded text-xs"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="btn-primary flex-1 text-sm py-2">
                      Book Session
                    </button>
                    <button className="btn-secondary flex-1 text-sm py-2">
                      View Profile
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply to be Trainer Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 text-center"
          >
            <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-headline font-bold mb-4 text-primary-gold">
              Join Our Team
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Own a trainer code? Sign up using the code your gym manager provides. 
              If you're applying to be a trainer, click 'Apply' and the owner will review your application.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Have a Trainer Code? Sign Up
              </button>
              <button className="btn-secondary">
                Apply to be a Trainer
              </button>
            </div>
            
            <div className="mt-8 p-4 bg-primary-green/10 border border-primary-green/20 rounded-lg">
              <h3 className="font-headline font-semibold text-primary-green mb-2">Requirements:</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Certified fitness professional (NASM, ACSM, ACE, etc.)</li>
                <li>• Minimum 2 years of training experience</li>
                <li>• Passion for helping others achieve their fitness goals</li>
                <li>• Excellent communication and motivational skills</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-headline font-bold mb-4">Why Our Trainers Excel</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team combines expertise, passion, and proven results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Members Trained' },
              { number: '15+', label: 'Certified Trainers' },
              { number: '4.8', label: 'Average Rating' },
              { number: '95%', label: 'Goal Achievement Rate' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-gold mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
