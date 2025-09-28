import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Users, Award, Target } from 'lucide-react';
import PlanCard from '../components/PlanCard';
import TestimonialSlider from '../components/TestimonialSlider';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Certified Trainers",
      description: "Expert guidance from certified fitness professionals"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Advanced Equipment",
      description: "State-of-the-art machines and tools for optimal training"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalized Diet & Tracking",
      description: "Custom nutrition plans with progress monitoring"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070)',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Logo and text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="mb-8">
                <div className="w-24 h-24 bg-primary-green rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                  <span className="text-primary-white font-headline font-bold text-3xl">O7</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-headline font-bold mb-4">
                  ONE7 — <span className="text-primary-gold">Premium</span> Gymnasium
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                  Where dedication meets luxury. Personal coaching. Real results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/login" className="btn-primary text-lg px-8 py-4">
                    Join ONE7 — Free Trial
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/plans" className="btn-secondary text-lg px-8 py-4">
                    Explore Plans
                  </Link>
                </motion.div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-green" />
                  <span>Certified Trainers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-green" />
                  <span>Advanced Equipment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-green" />
                  <span>Personalized Diet & Tracking</span>
                </div>
              </div>
            </motion.div>

            {/* Right side - CTA cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass-card p-6">
                <h3 className="font-headline font-semibold text-xl mb-4 text-primary-gold">Start Your Journey</h3>
                <p className="text-gray-300 mb-4">Get a free consultation with our expert trainers</p>
                <Link to="/contact" className="btn-primary w-full text-center block">
                  Book Free Consultation
                </Link>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="font-headline font-semibold text-xl mb-4 text-primary-gold">Track Progress</h3>
                <p className="text-gray-300 mb-4">Monitor your fitness journey with our advanced tracking</p>
                <Link to="/track" className="btn-secondary w-full text-center block">
                  View Tracking App
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-headline font-bold mb-4">Why Choose ONE7?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the perfect blend of luxury and performance in our state-of-the-art facility
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-green rounded-full mb-6 text-primary-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-headline font-semibold mb-4 text-primary-gold">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-headline font-bold mb-4">Membership Plans</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your fitness journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <PlanCard
              name="Starter"
              price="₹1,299"
              period="month"
              features={[
                "Access to gym",
                "4 group classes / month",
                "Basic equipment usage",
                "Locker facility"
              ]}
              highlighted={false}
            />
            <PlanCard
              name="Pro"
              price="₹2,499"
              period="month"
              features={[
                "All gym access",
                "8 PT sessions / month",
                "Nutrition guidance",
                "Progress tracking",
                "Premium locker"
              ]}
              highlighted={true}
            />
            <PlanCard
              name="Elite"
              price="₹4,999"
              period="month"
              features={[
                "Unlimited access",
                "1:1 personal trainer",
                "Custom nutrition plan",
                "24/7 support",
                "VIP amenities"
              ]}
              highlighted={false}
            />
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-400 mb-4">Sample prices for showcase only.</p>
            <Link to="/plans" className="btn-primary">
              View All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Trainer CTA */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-headline font-bold mb-4">Meet Our Expert Trainers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Work with certified professionals who are passionate about helping you achieve your goals
            </p>
            <Link to="/trainers" className="btn-primary">
              Meet Our Team
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-headline font-bold mb-4">What Our Members Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real stories from real people who transformed their lives at ONE7
            </p>
          </motion.div>
          <TestimonialSlider />
        </div>
      </section>
    </div>
  );
};

export default Home;
