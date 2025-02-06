import React from 'react';
import { Cloud, Droplets, Wind } from 'lucide-react';
import type { WeatherData } from '../types';

interface WeatherCardProps {
  weather: WeatherData;
}

export function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 w-full max-w-md transform hover:scale-[1.02] transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{weather.location}</h2>
          <p className="text-gray-600 mt-1">{weather.description}</p>
        </div>
        <div className="text-4xl font-bold text-blue-600">
          {Math.round(weather.temperature)}°C
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="flex flex-col items-center p-3 bg-blue-50/80 rounded-lg hover:bg-blue-50 transition-colors duration-300">
          <Cloud className="h-6 w-6 text-blue-500 mb-2" />
          <span className="text-sm text-gray-600">Weather</span>
          <span className="font-medium">{weather.description}</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-blue-50/80 rounded-lg hover:bg-blue-50 transition-colors duration-300">
          <Droplets className="h-6 w-6 text-blue-500 mb-2" />
          <span className="text-sm text-gray-600">Humidity</span>
          <span className="font-medium">{weather.humidity}%</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-blue-50/80 rounded-lg hover:bg-blue-50 transition-colors duration-300">
          <Wind className="h-6 w-6 text-blue-500 mb-2" />
          <span className="text-sm text-gray-600">Wind</span>
          <span className="font-medium">{weather.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
}
