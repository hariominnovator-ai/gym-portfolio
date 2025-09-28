import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-green rounded-lg flex items-center justify-center">
                <span className="text-primary-white font-headline font-bold text-lg">O7</span>
              </div>
              <span className="font-headline font-bold text-xl">ONE7</span>
            </div>
            <p className="text-sm text-gray-400">
              Where dedication meets luxury. Personal coaching. Real results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-headline font-semibold text-primary-gold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-gray-400 hover:text-primary-white transition-colors">About Us</Link>
              <Link to="/plans" className="block text-sm text-gray-400 hover:text-primary-white transition-colors">Membership Plans</Link>
              <Link to="/trainers" className="block text-sm text-gray-400 hover:text-primary-white transition-colors">Our Trainers</Link>
              <Link to="/gallery" className="block text-sm text-gray-400 hover:text-primary-white transition-colors">Gallery</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-headline font-semibold text-primary-gold">Services</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Personal Training</p>
              <p className="text-sm text-gray-400">Group Classes</p>
              <p className="text-sm text-gray-400">Diet Planning</p>
              <p className="text-sm text-gray-400">Progress Tracking</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-headline font-semibold text-primary-gold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary-gold mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-400">
                  A1/115, New, near Fish Market, Yashwantrao Chavan Nagar, 
                  Ekta Nagar, Mandala, Mankhurd, Mumbai, Maharashtra 400043
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-gold" />
                <p className="text-sm text-gray-400">+91 9XXXXXXXXX</p>
              </div>
              <a 
                href="https://wa.me/919XXXXXXXXX?text=Hi%20ONE7%20Gym%20I%20want%20info" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-green hover:text-primary-gold transition-colors"
              >
                <MessageCircle size={16} />
                <span className="text-sm">Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 ONE7 Premium Gymnasium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
