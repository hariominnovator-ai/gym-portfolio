import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
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
              Contact <span className="text-primary-gold">Us</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
              Get in touch with us to start your fitness journey or ask any questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-headline font-bold mb-6 text-primary-gold">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  We're here to help you achieve your fitness goals. Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="glass-card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-headline font-semibold text-primary-gold mb-2">Address</h3>
                      <p className="text-gray-300">
                        A1/115, New, near Fish Market, Yashwantrao Chavan Nagar, 
                        Ekta Nagar, Mandala, Mankhurd, Mumbai, Maharashtra 400043
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-headline font-semibold text-primary-gold mb-2">Phone</h3>
                      <p className="text-gray-300">+91 9XXXXXXXXX</p>
                      <p className="text-sm text-gray-400 mt-1">Call us for immediate assistance</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-headline font-semibold text-primary-gold mb-2">WhatsApp</h3>
                      <a 
                        href="https://wa.me/919XXXXXXXXX?text=Hi%20ONE7%20Gym%20I%20want%20info" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-green hover:text-primary-gold transition-colors"
                      >
                        Chat with us on WhatsApp
                      </a>
                      <p className="text-sm text-gray-400 mt-1">Quick responses guaranteed</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-headline font-semibold text-primary-gold mb-2">Hours</h3>
                      <div className="text-gray-300 space-y-1">
                        <p>Monday - Sunday: 6:00 AM - 10:00 PM</p>
                        <p className="text-sm text-primary-green">Open all days of the week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8">
                <h2 className="text-2xl font-headline font-bold mb-6 text-primary-gold">
                  Send us a Message
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-gold"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-gold"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-gold"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-gold"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-gold">
                      <option value="" className="bg-gray-800">Select a subject</option>
                      <option value="membership" className="bg-gray-800">Membership Inquiry</option>
                      <option value="training" className="bg-gray-800">Personal Training</option>
                      <option value="tour" className="bg-gray-800">Facility Tour</option>
                      <option value="other" className="bg-gray-800">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-gold resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full btn-primary flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-headline font-bold mb-4">Find Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Located in the heart of Mankhurd, Mumbai - easy to reach by public transport
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden"
          >
            <iframe 
              src="https://www.google.com/maps?q=A1/115,+New,+near+Fish+Market,+Yashwantrao+Chavan+Nagar,+Ekta+Nagar,+Mandala,+Mankhurd,+Mumbai&output=embed" 
              width="100%" 
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h2 className="text-3xl font-headline font-bold mb-4 text-primary-gold">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied members who have transformed their lives at ONE7. 
              Book your free consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Book Free Consultation</button>
              <a 
                href="https://wa.me/919XXXXXXXXX?text=Hi%20ONE7%20Gym%20I%20want%20to%20book%20a%20consultation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
