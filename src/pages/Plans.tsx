import React from 'react';
import { motion } from 'framer-motion';
import PlanCard from '../components/PlanCard';
import { HelpCircle } from 'lucide-react';

const Plans: React.FC = () => {
  const faqs = [
    {
      question: "Can I freeze my membership?",
      answer: "Yes, memberships can be frozen for up to 3 months per year with advance notice."
    },
    {
      question: "Are there any joining fees?",
      answer: "Currently, we're waiving joining fees for new members. Limited time offer."
    },
    {
      question: "Can I switch between plans?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect from the next billing cycle."
    },
    {
      question: "What's included in the nutrition plan?",
      answer: "Our nutrition plans include personalized meal recommendations, macro tracking, and weekly consultations with our nutritionist."
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
              Membership <span className="text-primary-gold">Plans</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
              Choose the perfect plan for your fitness journey and unlock your potential
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <PlanCard
                name="Starter"
                price="₹1,299"
                period="month"
                features={[
                  "Access to gym",
                  "4 group classes / month",
                  "Basic equipment usage",
                  "Locker facility",
                  "Shower access",
                  "Basic nutrition guidance"
                ]}
                highlighted={false}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <PlanCard
                name="Pro"
                price="₹2,499"
                period="month"
                features={[
                  "All gym access",
                  "8 PT sessions / month",
                  "Nutrition guidance",
                  "Progress tracking",
                  "Premium locker",
                  "Supplement consultation",
                  "Guest passes (2/month)"
                ]}
                highlighted={true}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <PlanCard
                name="Elite"
                price="₹4,999"
                period="month"
                features={[
                  "Unlimited access",
                  "1:1 personal trainer",
                  "Custom nutrition plan",
                  "24/7 support",
                  "VIP amenities",
                  "Body composition analysis",
                  "Unlimited guest passes",
                  "Priority booking"
                ]}
                highlighted={false}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-gray-400 mb-8">
              Sample prices for showcase only — subject to confirmation
            </p>
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-headline font-bold mb-4 text-primary-gold">
                Need a Custom Plan?
              </h3>
              <p className="text-gray-300 mb-6">
                Our team can create a personalized membership package that fits your specific needs and goals.
              </p>
              <button className="btn-primary">
                Contact for Custom Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-headline font-bold mb-4">What's Included</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compare features across all membership tiers
            </p>
          </motion.div>

          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 font-headline font-semibold text-primary-gold">Features</th>
                    <th className="text-center p-6 font-headline font-semibold">Starter</th>
                    <th className="text-center p-6 font-headline font-semibold text-primary-gold">Pro</th>
                    <th className="text-center p-6 font-headline font-semibold">Elite</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Gym Access', '✓', '✓', '✓'],
                    ['Group Classes', '4/month', 'Unlimited', 'Unlimited'],
                    ['Personal Training', '—', '8 sessions/month', 'Unlimited'],
                    ['Nutrition Plan', 'Basic', 'Standard', 'Premium'],
                    ['Progress Tracking', '—', '✓', '✓'],
                    ['Guest Passes', '—', '2/month', 'Unlimited'],
                    ['24/7 Support', '—', '—', '✓'],
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-white/5">
                      <td className="p-4 font-medium">{row[0]}</td>
                      <td className="p-4 text-center text-gray-300">{row[1]}</td>
                      <td className="p-4 text-center text-primary-gold">{row[2]}</td>
                      <td className="p-4 text-center text-gray-300">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-headline font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Get answers to common questions about our membership plans
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <div className="flex items-start space-x-4">
                  <HelpCircle className="w-6 h-6 text-primary-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-headline font-semibold text-lg mb-2 text-primary-gold">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
