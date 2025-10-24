import React from 'react';
import Link from 'next/link';
import { ShaderAnimation } from '@/components/shader-animation';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const ThankYouPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Shader Background */}
      <div className="absolute inset-0 z-0">
        <ShaderAnimation />
      </div>
      
      {/* Thank You Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Success Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-400 text-sm">
            <CheckCircle size={16} className="mr-2" />
            Success
          </div>
        </div>

        {/* Main Content Card */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 shadow-2xl text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle size={40} className="text-green-400" />
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold text-white mb-4">
              You're on the Waitlist!
            </h1>
            
            {/* Description */}
            <p className="text-white/70 leading-relaxed mb-8">
              Thank you for your interest! You will be notified by email once you are accepted. 
              We appreciate your patience as we prepare something amazing.
            </p>

            {/* Back to Home Button */}
            <Link 
              href="/" 
              className="inline-flex items-center justify-center w-full bg-white text-black font-medium py-3 px-6 rounded-lg hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 mb-6"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Home
            </Link>

            {/* Footer */}
            <div className="mt-12 text-center">
              <p className="text-white/40 text-sm">
                2025 Quild
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm">
            2025 Quild
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
