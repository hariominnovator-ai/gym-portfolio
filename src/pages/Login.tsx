import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Code } from 'lucide-react';

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<'guest' | 'member' | 'trainer'>('guest');
  const [showTrainerCode, setShowTrainerCode] = useState(false);

  const handleGoogleSignIn = () => {
    // Firebase Google Sign-in logic will be implemented here
    console.log('Google Sign-in clicked');
  };

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

      <div className="relative z-10 max-w-md w-full mx-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8"
        >
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary-green rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-white font-headline font-bold text-2xl">O7</span>
            </div>
            <h1 className="text-2xl font-headline font-bold mb-2">
              {isLogin ? 'Welcome Back' : 'Join ONE7'}
            </h1>
            <p className="text-gray-300">
              {isLogin ? 'Sign in to your account' : 'Create your account to get started'}
            </p>
          </div>

          {/* Google Sign In Button */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-white text-gray-900 font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors mb-6 flex items-center justify-center space-x-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Continue with Google</span>
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black text-gray-400">Or continue with email</span>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-gold"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-gold"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2">Role</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['guest', 'member', 'trainer'] as const).map((roleOption) => (
                      <button
                        key={roleOption}
                        type="button"
                        onClick={() => {
                          setRole(roleOption);
                          setShowTrainerCode(roleOption === 'trainer');
                        }}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                          role === roleOption
                            ? 'bg-primary-green text-white'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                      >
                        {roleOption.charAt(0).toUpperCase() + roleOption.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {showTrainerCode && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Trainer Code</label>
                    <div className="relative">
                      <Code className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-gold"
                        placeholder="Enter trainer code"
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      Get your trainer code from the gym manager
                    </p>
                  </div>
                )}
              </>
            )}

            <button type="submit" className="w-full btn-primary">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Toggle Login/Register */}
          <div className="text-center mt-6">
            <p className="text-gray-400">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary-gold hover:text-primary-gold/80 font-medium"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          {/* Additional Info for Non-Members */}
          {!isLogin && role === 'trainer' && (
            <div className="mt-6 p-4 bg-primary-green/10 border border-primary-green/20 rounded-lg">
              <p className="text-sm text-primary-green">
                <strong>Applying to be a trainer?</strong> Contact the gym owner if you don't have a trainer code.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
