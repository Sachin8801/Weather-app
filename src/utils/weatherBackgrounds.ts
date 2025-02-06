interface WeatherBackground {
  image: string;
  gradient: {
    from: string;
    to: string;
  };
}

const weatherBackgrounds: Record<string, WeatherBackground> = {
  'clear': {
    image: 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?auto=format&fit=crop&w=2000&q=80',
    gradient: {
      from: 'from-blue-400/70',
      to: 'to-blue-600/70'
    }
  },
  'partly cloudy': {
    image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=2000&q=80',
    gradient: {
      from: 'from-blue-500/70',
      to: 'to-purple-600/70'
    }
  },
  'cloudy': {
    image: 'https://images.unsplash.com/photo-1483977399921-6cf94f6fdc3a?auto=format&fit=crop&w=2000&q=80',
    gradient: {
      from: 'from-gray-500/70',
      to: 'to-gray-700/70'
    }
  },
  'rain': {
    image: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=2000&q=80',
    gradient: {
      from: 'from-blue-700/70',
      to: 'to-gray-800/70'
    }
  },
  'thunderstorm': {
    image: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&w=2000&q=80',
    gradient: {
      from: 'from-gray-800/70',
      to: 'to-blue-900/70'
    }
  },
  'snow': {
    image: 'https://images.unsplash.com/photo-1478265409131-1f65c88f965c?auto=format&fit=crop&w=2000&q=80',
    gradient: {
      from: 'from-blue-100/70',
      to: 'to-blue-300/70'
    }
  },
  'default': {
    image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=2000&q=80',
    gradient: {
      from: 'from-blue-500/70',
      to: 'to-purple-600/70'
    }
  }
};

export function getWeatherBackground(description: string): WeatherBackground {
  const normalizedDescription = description.toLowerCase();
  
  if (normalizedDescription.includes('clear') || normalizedDescription.includes('sunny')) {
    return weatherBackgrounds.clear;
  }
  if (normalizedDescription.includes('partly cloudy')) {
    return weatherBackgrounds['partly cloudy'];
  }
  if (normalizedDescription.includes('cloud')) {
    return weatherBackgrounds.cloudy;
  }
  if (normalizedDescription.includes('rain')) {
    return weatherBackgrounds.rain;
  }
  if (normalizedDescription.includes('thunder') || normalizedDescription.includes('storm')) {
    return weatherBackgrounds.thunderstorm;
  }
  if (normalizedDescription.includes('snow')) {
    return weatherBackgrounds.snow;
  }
  
  return weatherBackgrounds.default;
}
