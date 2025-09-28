import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800',
      category: 'Equipment',
      title: 'Cardio Zone'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800',
      category: 'Training',
      title: 'Weight Training Area'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800',
      category: 'Classes',
      title: 'Group Training Session'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800',
      category: 'Equipment',
      title: 'Free Weights Section'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800',
      category: 'Training',
      title: 'Personal Training'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1594381898411-03f4ac64f4c0?q=80&w=800',
      category: 'Facility',
      title: 'Locker Room'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=800',
      category: 'Equipment',
      title: 'Cable Machines'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800',
      category: 'Classes',
      title: 'Yoga Studio'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=800',
      category: 'Training',
      title: 'Functional Training'
    }
  ];

  const categories = ['All', 'Equipment', 'Training', 'Classes', 'Facility'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

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
              Gym <span className="text-primary-gold">Gallery</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
              Explore our premium facilities, equipment, and training spaces
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-gold text-primary-black'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="glass-card overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative group">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-primary-gold text-primary-black px-2 py-1 rounded text-xs font-medium">
                      {image.category}
                    </span>
                    <h3 className="text-white font-medium mt-2">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 bg-black/70 text-white p-4 rounded-lg">
                <span className="bg-primary-gold text-primary-black px-2 py-1 rounded text-xs font-medium">
                  {filteredImages[selectedImage].category}
                </span>
                <h3 className="font-medium mt-2">{filteredImages[selectedImage].title}</h3>
                <p className="text-sm text-gray-300 mt-1">
                  {selectedImage + 1} of {filteredImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-headline font-bold mb-4">Ready to Experience ONE7?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Visit our facility and see for yourself why ONE7 is Mumbai's premier fitness destination
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Book a Tour</button>
              <button className="btn-secondary">Start Free Trial</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
