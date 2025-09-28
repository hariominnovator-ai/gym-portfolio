import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To provide world-class fitness coaching in a curated, hygienic environment where every member achieves measurable progress."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Certified trainers with years of experience in personal training, nutrition, and sports science."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "State-of-the-art equipment and facilities that match international standards for a luxury fitness experience."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personal Care",
      description: "Individual attention to every member with customized workout and nutrition plans for optimal results."
    }
  ];

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
              About <span className="text-primary-gold">ONE7</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
              Where dedication meets luxury in the heart of Mumbai
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-headline font-bold mb-6 text-primary-gold">Our Story</h2>
              <p className="text-lg text-gray-300 mb-6">
                One7 is a premium training facility located in Mankhurd, Mumbai. Our goal is to provide 
                world-class fitness coaching in a curated, hygienic environment. We combine evidence-based 
                training with personalized diet plans — monitored by certified trainers — so members see 
                measurable progress week after week.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Founded with the vision of creating a space where fitness meets luxury, ONE7 has become 
                a destination for individuals who demand the best for their health and wellness journey. 
                Our commitment to excellence is reflected in every aspect of our facility and service.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-gold mb-2">500+</div>
                  <div className="text-sm text-gray-400">Happy Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-gold mb-2">15+</div>
                  <div className="text-sm text-gray-400">Expert Trainers</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070"
                alt="ONE7 Gym Interior"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-headline font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that drive everything we do at ONE7
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-green rounded-full mb-4 text-primary-white">
                  {value.icon}
                </div>
                <h3 className="text-lg font-headline font-semibold mb-3 text-primary-gold">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-headline font-bold mb-4">Our Facility</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience luxury fitness with our premium equipment and amenities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500"
                alt="Cardio Equipment"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-headline font-semibold mb-2 text-primary-gold">Cardio Zone</h3>
                <p className="text-gray-300">Latest treadmills, ellipticals, and bikes with entertainment systems</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=500"
                alt="Weight Training"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-headline font-semibold mb-2 text-primary-gold">Strength Training</h3>
                <p className="text-gray-300">Professional-grade weights and resistance machines</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=500"
                alt="Group Classes"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-headline font-semibold mb-2 text-primary-gold">Group Classes</h3>
                <p className="text-gray-300">Spacious studios for yoga, HIIT, and specialty classes</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Owner Note */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200"
              alt="Gym Owner"
              className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
            />
            <blockquote className="text-lg text-gray-300 mb-6 italic">
              "At ONE7, we believe that fitness is not just about physical transformation, but about building 
              confidence, discipline, and a lifestyle that extends beyond the gym walls. Every member is part 
              of our family, and their success is our greatest achievement."
            </blockquote>
            <div>
              <p className="font-semibold text-primary-gold text-lg">Founder & Owner</p>
              <p className="text-gray-400">ONE7 Premium Gymnasium</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
