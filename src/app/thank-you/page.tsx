import React from 'react';
import Link from 'next/link';
import { ShaderAnimation } from '@/components/shader-animation';
import { Check, ArrowLeft } from 'lucide-react';

const ThankYouPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Shader Background */}
      <div className="absolute inset-0 z-0">
        <ShaderAnimation />
      </div>
      
      {/* Thank You Content */}
      <div className="absolute inset-0 z-10 grid place-items-center px-4">

        {/* Main Content Card */}
        <div className="w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 shadow-2xl text-center">
            {/* Success Icon */}
            <div className="w-10 h-10 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check className="text-green-400 w-8 h-8 weight-bold" />
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold text-white mb-4">
              You&apos;re on the Waitlist!
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
