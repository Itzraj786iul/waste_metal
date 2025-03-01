import React, { useState, useEffect } from 'react';
import { Recycle, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  handleScroll: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, handleScroll }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', section: 'home' },
    { name: 'How It Works', section: 'how-it-works' },
    { name: 'Features', section: 'features' },
    { name: 'Impact', section: 'impact' },
    { name: 'Research', section: 'research' },
    { name: 'AI Demo', section: 'demo' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Recycle className="h-8 w-8 text-green-400" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              MetalAI Recycle
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => handleScroll(link.section)}
                className={`text-sm font-medium transition-colors hover:text-green-400 ${
                  activeSection === link.section ? 'text-green-400' : 'text-gray-300'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <button className="hidden md:block bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => {
                  handleScroll(link.section);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-sm font-medium transition-colors hover:text-green-400 ${
                  activeSection === link.section ? 'text-green-400' : 'text-gray-300'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 w-full">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;