import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Target, TrendingUp, Camera, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Track: React.FC = () => {
  const isAuthenticated = false; // This will be managed by auth context later

  if (!isAuthenticated) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070)',
          }}
        >
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="relative z-10 max-w-lg w-full mx-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 text-center"
          >
            <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-headline font-bold mb-4">Access Required</h1>
            <p className="text-gray-300 mb-8">
              The tracking app is available exclusively for ONE7 members. Sign in to access your personalized dashboard.
            </p>
            <Link to="/login" className="btn-primary mb-4 block">
              Sign In to Continue
            </Link>
            <Link to="/plans" className="text-primary-gold hover:text-primary-gold/80">
              View Membership Plans
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Member Dashboard Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-headline font-bold mb-4">
              Your Fitness <span className="text-primary-gold">Dashboard</span>
            </h1>
            <p className="text-xl text-gray-300">
              Track your progress, log your meals, and stay connected with your trainer
            </p>
          </motion.div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <Calendar className="w-8 h-8 text-primary-gold mx-auto mb-4" />
              <h3 className="font-headline font-semibold mb-2">Daily Log</h3>
              <p className="text-sm text-gray-400">Log today's meals and workouts</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <Camera className="w-8 h-8 text-primary-gold mx-auto mb-4" />
              <h3 className="font-headline font-semibold mb-2">Photo Log</h3>
              <p className="text-sm text-gray-400">Upload meal photos</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <Target className="w-8 h-8 text-primary-gold mx-auto mb-4" />
              <h3 className="font-headline font-semibold mb-2">Goals</h3>
              <p className="text-sm text-gray-400">View and update goals</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <TrendingUp className="w-8 h-8 text-primary-gold mx-auto mb-4" />
              <h3 className="font-headline font-semibold mb-2">Progress</h3>
              <p className="text-sm text-gray-400">View your analytics</p>
            </motion.div>
          </div>

          {/* Weekly Progress Chart Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="glass-card p-8 mb-12"
          >
            <h2 className="text-2xl font-headline font-semibold mb-6 text-primary-gold">Weekly Progress</h2>
            <div className="h-64 bg-black/20 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Chart will be implemented with real data</p>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-card p-8"
          >
            <h2 className="text-2xl font-headline font-semibold mb-6 text-primary-gold">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
                <div>
                  <p className="font-medium">Workout: Upper Body Strength</p>
                  <p className="text-sm text-gray-400">Yesterday, 6:30 PM</p>
                </div>
                <span className="text-primary-green">Verified ✓</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
                <div>
                  <p className="font-medium">Meal: Grilled Chicken Salad</p>
                  <p className="text-sm text-gray-400">Today, 1:15 PM</p>
                </div>
                <span className="text-yellow-400">Pending</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
                <div>
                  <p className="font-medium">Workout: Cardio Session</p>
                  <p className="text-sm text-gray-400">2 days ago, 7:00 AM</p>
                </div>
                <span className="text-primary-green">Verified ✓</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Track;
