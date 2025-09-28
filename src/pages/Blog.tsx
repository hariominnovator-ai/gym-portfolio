import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { faker } from '@faker-js/faker';

const Blog: React.FC = () => {
  // Generate blog posts
  const blogPosts = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    title: faker.helpers.arrayElement([
      'The Ultimate Guide to Weight Loss',
      'Building Muscle: Science-Based Approach',
      'Nutrition Timing for Optimal Performance',
      'Home Workout Essentials',
      'Recovery and Rest: Why They Matter',
      'Setting Realistic Fitness Goals',
      'The Psychology of Fitness',
      'Supplements: What You Need to Know',
      'Cardio vs Strength Training'
    ]),
    excerpt: faker.lorem.sentences(2),
    author: faker.person.fullName(),
    date: faker.date.recent({ days: 30 }).toLocaleDateString(),
    category: faker.helpers.arrayElement(['Nutrition', 'Training', 'Wellness', 'Tips']),
    image: `https://images.unsplash.com/photo-${faker.helpers.arrayElement([
      '1571019613454-1cb2f99b2d8b',
      '1534438327276-14e5300c3a48',
      '1540497077202-7c8a3999166f',
      '1583454110551-21f2fa2afe61',
      '1594381898411-03f4ac64f4c0',
      '1549060279-7e168fcee0c2'
    ])}?q=80&w=600&h=400&fit=crop`,
    readTime: faker.number.int({ min: 3, max: 10 })
  }));

  const categories = ['All', 'Nutrition', 'Training', 'Wellness', 'Tips'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

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
              Fitness <span className="text-primary-gold">Blog</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
              Insider tips, diet plans, workout design and success stories from our trainers
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

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-full">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-gold text-primary-black px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Tag className="w-4 h-4" />
                    <span>{blogPosts[0].category}</span>
                  </div>
                </div>
                <h2 className="text-3xl font-headline font-bold mb-4 text-primary-gold">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-300 mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <button className="btn-primary self-start flex items-center space-x-2">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-green text-white px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {post.readTime} min read
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-headline font-semibold mb-3 text-primary-gold line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <button className="text-primary-gold hover:text-primary-gold/80 text-sm font-medium flex items-center space-x-1">
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h2 className="text-3xl font-headline font-bold mb-4 text-primary-gold">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest fitness tips, nutrition advice, 
              and success stories delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-gold"
              />
              <button className="btn-primary">Subscribe</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
