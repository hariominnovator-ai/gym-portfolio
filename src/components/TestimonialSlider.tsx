import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5e1?q=80&w=200",
    rating: 5,
    text: "ONE7 transformed my fitness journey completely. The trainers are incredibly knowledgeable and the facility is world-class."
  },
  {
    name: "Rahul Mehta",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    rating: 5,
    text: "The personalized diet and tracking system helped me lose 20kg in 6 months. Best investment I've made for my health."
  },
  {
    name: "Anjali Patel",
    role: "Doctor",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200",
    rating: 5,
    text: "As a busy professional, I appreciate the flexible timing and expert guidance. The results speak for themselves."
  }
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 text-center"
        >
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
          />
          
          <div className="flex justify-center mb-4">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-primary-gold fill-current" />
            ))}
          </div>
          
          <blockquote className="text-lg text-gray-300 mb-6 italic">
            "{testimonials[currentIndex].text}"
          </blockquote>
          
          <div>
            <p className="font-semibold text-primary-gold">{testimonials[currentIndex].name}</p>
            <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary-gold' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
