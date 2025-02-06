export interface WeatherData {
  location: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

export interface Forecast {
  date: string;
  temperature: number;
  description: string;
  icon: string;
}
