import React from 'react';

export default function PortfolioMetrics({ results = [] }) {
  if (!results || results.length === 0) {
    return null;
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="text-7xl lg:text-8xl text-secondary-500 mb-4 tracking-tight">
                {result.value}
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {result.metric}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 