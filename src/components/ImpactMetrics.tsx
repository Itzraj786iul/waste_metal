import React, { useState } from 'react';

const ImpactMetrics: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('metrics');

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Real-World Impact
        </h2>
        <p className="text-lg text-gray-300">
          Measurable results from our AI-powered recycling technology
        </p>
      </div>

      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
        <div className="flex border-b border-gray-700">
          <button 
            className={`flex-1 py-4 text-center transition-colors ${
              selectedTab === 'metrics' 
                ? 'bg-gray-700/50 text-white font-medium' 
                : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/30'
            }`}
            onClick={() => setSelectedTab('metrics')}
          >
            Impact Metrics
          </button>
          <button 
            className={`flex-1 py-4 text-center transition-colors ${
              selectedTab === 'case-studies' 
                ? 'bg-gray-700/50 text-white font-medium' 
                : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/30'
            }`}
            onClick={() => setSelectedTab('case-studies')}
          >
            Case Studies
          </button>
          <button 
            className={`flex-1 py-4 text-center transition-colors ${
              selectedTab === 'dashboard' 
                ? 'bg-gray-700/50 text-white font-medium' 
                : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/30'
            }`}
            onClick={() => setSelectedTab('dashboard')}
          >
            Interactive Dashboard
          </button>
        </div>

        <div className="p-8">
          {selectedTab === 'metrics' && (
            <div>
              <h3 className="text-xl font-bold mb-8 text-center">Before & After Comparison</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-900/50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4 text-red-400">Traditional Recycling</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Sorting Speed</span>
                        <span className="text-sm text-gray-400">100%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Recycling Efficiency</span>
                        <span className="text-sm text-gray-400">65%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Hazardous Waste Detection</span>
                        <span className="text-sm text-gray-400">40%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Energy Consumption</span>
                        <span className="text-sm text-gray-400">100%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4 text-green-400">AI-Powered Recycling</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Sorting Speed</span>
                        <span className="text-sm text-gray-400">+30%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '130%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Recycling Efficiency</span>
                        <span className="text-sm text-gray-400">+25%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Hazardous Waste Detection</span>
                        <span className="text-sm text-gray-400">+50%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Energy Consumption</span>
                        <span className="text-sm text-gray-400">-40%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">30%</div>
                  <p className="text-sm text-gray-400">Faster Metal Sorting</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">25%</div>
                  <p className="text-sm text-gray-400">Increased Recycling Efficiency</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
                  <p className="text-sm text-gray-400">Improved Hazardous Waste Detection</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                  <p className="text-sm text-gray-400">Reduced Energy Consumption</p>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'case-studies' && (
            <div>
              <h3 className="text-xl font-bold mb-8 text-center">Success Stories</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-900/50 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Industrial Recycling Plant"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-2">Global Metals Corporation</h4>
                    <p className="text-sm text-gray-400 mb-4">
                      Implemented our AI-powered sorting system across 5 recycling facilities, resulting in a 35% increase in metal recovery rates and $2.4M annual savings.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Industrial Metals Recycling</span>
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">35% Improvement</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Electronics Recycling"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-2">TechRecycle Solutions</h4>
                    <p className="text-sm text-gray-400 mb-4">
                      Specialized in e-waste recycling, our AI system helped recover 28% more precious metals from electronic components while reducing processing time by 40%.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">E-Waste Recycling</span>
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">28% More Recovery</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-800/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4">Expert Testimonials</h4>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gray-700 mr-4 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm text-gray-300 italic mb-2">
                        "The AI-powered sorting technology has transformed our recycling operations. We're processing more material with fewer resources while meeting stringent environmental standards."
                      </p>
                      <div className="flex items-center">
                        <span className="text-xs font-medium">Dr. Sarah Chen</span>
                        <span className="mx-2 text-gray-500">•</span>
                        <span className="text-xs text-gray-500">Chief Sustainability Officer, Global Metals Corp</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gray-700 mr-4 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm text-gray-300 italic mb-2">
                        "The blockchain tracking component provides unprecedented transparency in our supply chain. Our customers can verify the sustainability of our recycled materials with complete confidence."
                      </p>
                      <div className="flex items-center">
                        <span className="text-xs font-medium">Michael Rodriguez</span>
                        <span className="mx-2 text-gray-500">•</span>
                        <span className="text-xs text-gray-500">Director of Innovation, TechRecycle Solutions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'dashboard' && (
            <div>
              <h3 className="text-xl font-bold mb-8 text-center">Interactive Impact Dashboard</h3>
              
              <div className="bg-gray-900/50 rounded-xl p-6 mb-8">
                <p className="text-sm text-gray-400 mb-6 text-center">
                  Adjust the parameters below to see how AI-based recycling impacts various sustainability metrics
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium mb-2">Processing Volume</label>
                    <input 
                      type="range" 
                      min="1000" 
                      max="10000" 
                      defaultValue="5000"
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>1,000 tons</span>
                      <span>10,000 tons</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">AI Efficiency Level</label>
                    <input 
                      type="range" 
                      min="80" 
                      max="99" 
                      defaultValue="95"
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>80%</span>
                      <span>99%</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Metal Mix Complexity</label>
                    <input 
                      type="range" 
                      min="1" 
                      max="5" 
                      defaultValue="3"
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Simple</span>
                      <span>Complex</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <h5 className="text-sm font-medium mb-2">CO₂ Reduction</h5>
                    <div className="text-2xl font-bold text-green-400">1,250 tons</div>
                    <p className="text-xs text-gray-500 mt-1">Equivalent to 270 cars off the road</p>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <h5 className="text-sm font-medium mb-2">Cost Savings</h5>
                    <div className="text-2xl font-bold text-green-400">$425,000</div>
                    <p className="text-xs text-gray-500 mt-1">Annual operational savings</p>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <h5 className="text-sm font-medium mb-2">Metal Recovery Rate</h5>
                    <div className="text-2xl font-bold text-green-400">92.5%</div>
                    <p className="text-xs text-gray-500 mt-1">+27.5% vs. traditional methods</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4">Projected Impact Over Time</h4>
                
                <div className="h-64 relative">
                  {/* Simulated chart - in a real app, use a charting library */}
                  <div className="absolute inset-0">
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-700"></div>
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-700"></div>
                    
                    {/* Chart lines */}
                    <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path 
                        d="M0,100 L10,90 L20,85 L30,75 L40,65 L50,55 L60,45 L70,40 L80,30 L90,25 L100,20" 
                        fill="none" 
                        stroke="#4ade80" 
                        strokeWidth="2"
                      />
                      <path 
                        d="M0,100 L10,95 L20,92 L30,90 L40,85 L50,82 L60,80 L70,78 L80,75 L90,73 L100,70" 
                        fill="none" 
                        stroke="#60a5fa" 
                        strokeWidth="2"
                      />
                    </svg>
                    
                    {/* Labels */}
                    <div className="absolute bottom-2 left-0 text-xs text-gray-500">Year 1</div>
                    <div className="absolute bottom-2 right-0 text-xs text-gray-500">Year 5</div>
                    
                    <div className="absolute top-2 right-4 flex items-center space-x-4 text-xs">
                      <div className="flex items-center">
                        <div className="w-3 h-1 bg-green-500 mr-1"></div>
                        <span className="text-gray-400">CO₂ Reduction</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-1 bg-blue-500 mr-1"></div>
                        <span className="text-gray-400">Cost Savings</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImpactMetrics;