import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const AIDemo: React.FC = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [result, setResult] = useState<null | {
    metalType: string;
    confidence: number;
    properties: { name: string; value: string }[];
    recyclability: number;
  }>(null);

  const handleDragEnter = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      analyzeFile(file);
    }
  };

  const analyzeFile = async (file: File) => {
    setIsAnalyzing(true);
    // Simulate AI analysis with a timeout
    setTimeout(() => {
      setResult({
        metalType: 'Aluminum',
        confidence: 95,
        properties: [
          { name: 'Density', value: '2.7 g/cm³' },
          { name: 'Melting Point', value: '660°C' }
        ],
        recyclability: 85
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div
      className={`border-2 border-dashed p-6 rounded-lg text-center ${isDragging ? 'bg-gray-200' : 'bg-white'}`}
      onDragEnter={handleDragEnter}
      onDragOver={(e) => e.preventDefault()}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Upload className="mx-auto mb-2" size={32} />
      <p>Drag and drop a metal image here or click to upload</p>
      {isAnalyzing && <p>Analyzing...</p>}
      {result && (
        <div className="mt-4">
          <h3 className="font-bold">Metal Type: {result.metalType}</h3>
          <p>Confidence: {result.confidence}%</p>
          <h4 className="font-semibold">Properties:</h4>
          <ul>
            {result.properties.map((prop, index) => (
              <li key={index}>{prop.name}: {prop.value}</li>
            ))}
          </ul>
          <p>Recyclability: {result.recyclability}%</p>
        </div>
      )}
    </div>
  );
};

export default AIDemo;
