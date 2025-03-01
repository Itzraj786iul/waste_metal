import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  handleScroll: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ handleScroll }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-800/80 to-gray-900/90 z-10"></div>
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-industrial-robot-moving-parts-on-a-production-line-32640-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-teal-400">
            Revolutionizing Metal Waste Management with AI & Automation
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Our AI-powered platform transforms metal waste recycling through smart sorting, 
            blockchain tracking, and circular economy integration.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => handleScroll('how-it-works')}
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/20"
            >
              Explore The Future
            </button>
            
            <button className="bg-gray-800/80 hover:bg-gray-700/80 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 border border-gray-700 hover:border-gray-600">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => handleScroll('how-it-works')}
          className="flex flex-col items-center text-gray-400 hover:text-green-400 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} />
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default HeroSection;