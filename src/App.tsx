import React, { useState } from 'react';
import { Cloud } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { getWeatherBackground } from './utils/weatherBackgrounds';
import type { WeatherData } from './types';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (location: string) => {
    setLoading(true);
    setError(null);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const conditions = [
        "Clear sky",
        "Partly cloudy",
        "Cloudy",
        "Light rain",
        "Thunderstorm",
        "Snow"
      ];
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
      
      const mockWeather: WeatherData = {
        location,
        temperature: Math.random() * 30,
        description: randomCondition,
        humidity: Math.floor(Math.random() * 100),
        windSpeed: Math.floor(Math.random() * 30),
        icon: "cloud"
      };
      
      setWeather(mockWeather);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const background = weather 
    ? getWeatherBackground(weather.description)
    : getWeatherBackground('default');

  return (
    <div className="min-h-screen relative">
      {/* Background with parallax effect */}
      <div 
        className="fixed inset-0 transition-all duration-1000 transform scale-105"
        style={{
          backgroundImage: `url('${background.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform'
        }}
      />
      
      {/* Gradient overlay with blur */}
      <div 
        className={`fixed inset-0 bg-gradient-to-br ${background.gradient.from} ${background.gradient.to} backdrop-blur-[2px] transition-all duration-1000`}
      />
      
      {/* Content */}
      <div className="relative min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center justify-center space-y-8">
            {/* Header */}
            <div className="text-center transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-full">
                  <Cloud className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-white mb-2 text-shadow-lg">
                Weather Dashboard
              </h1>
              <p className="text-blue-100 text-lg max-w-md mx-auto">
                Enter a city name to get the current weather conditions
              </p>
            </div>

            {/* Search */}
            <div className="w-full max-w-md transform hover:scale-[1.02] transition-transform duration-300">
              <SearchBar onSearch={handleSearch} />
            </div>

            {/* Loading State */}
            {loading && (
              <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500" />
                  <span className="text-gray-700">Fetching weather data...</span>
                </div>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="bg-red-100/90 backdrop-blur-sm text-red-700 px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            {/* Weather Card */}
            {weather && !loading && (
              <div className="transform hover:scale-[1.02] transition-transform duration-300 w-full max-w-md">
                <WeatherCard weather={weather} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
