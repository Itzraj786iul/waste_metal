import React from 'react';
import { Recycle, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  handleScroll: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ handleScroll }) => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Recycle className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                MetalAI Recycle
              </span>
            </div>
            
            <p className="text-gray-400 mb-6">
              Revolutionizing metal waste management with AI-powered solutions for a sustainable future.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleScroll('home')}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScroll('how-it-works')}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScroll('features')}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScroll('impact')}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Impact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScroll('research')}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Research
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Whitepapers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-3" />
                <a href="mailto:info@metalai-recycle.com" className="text-gray-400 hover:text-green-400 transition-colors">
                  raziullahansari483@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-3" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-green-400 transition-colors">
                  +90 7233829678
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-3 mt-0.5" />
                <span className="text-gray-400">
                  HOSTEL H 318<br />
                  NIT RAIPUR<br />
                  CHHATISGARH
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 MetalAI Recycle. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;