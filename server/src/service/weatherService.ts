import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  lat: number;
  lon: number;
}

// TODO: Define a class for the Weather object
class Weather {
  city: string;
  country: string;
  date: string;
  description: string;
  humidity: number;
  icon: string;
  temperature: number;
  wind: number;
  constructor(
    city: string,
    country: string,
    date: string,
    description: string,
    humidity: number,
    icon: string,
    temperature: number,
    wind: number
  ) {
    this.city = city;
    this.country = country;
    this.date = date;
    this.description = description;
    this.humidity = humidity;
    this.icon = icon;
    this.temperature = temperature;
    this.wind = wind;
  }
}

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  private baseURL: string;
  private apiKey: string;
  private cityName: string;

  constructor(apiKey: string, cityName: string) {
    this.baseURL = 'https://api.openweathermap.org/data/2.5/';
    this.apiKey = apiKey;
    if (!this.apiKey) {
      throw new Error('No API key found');
    }
    this.cityName = cityName;
  }
  // TODO: Create fetchLocationData method
  private async fetchLocationData(query: string) {
    const response = await fetch(query);
    const data = await response.json();
    return data;
  }
  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: any): { lat: number; lon: number} {
    const { coord: { lat, lon } } = locationData;
    return { lat, lon };
  }
  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {
    return `${this.baseURL}weather?q=${this.cityName}&appid=${this.apiKey}`;
  }
  // TODO: Create buildWeatherQuery method
  private buildWeatherQuery(coordinates: { lat: number; lon: number }): string {
    const { lat, lon } = coordinates;
    return `${this.baseURL}onecall?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
  }
  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData() {
    const query = this.buildGeocodeQuery();
    const locationData = await this.fetchLocationData(query);
    return this.destructureLocationData(locationData);
  }
  // TODO: Create fetchWeatherData method
  public async fetchWeatherData() {
    const query = this.buildGeocodeQuery();
    const locationData = await this.fetchLocationData(query);
    const coordinates = this.destructureLocationData(locationData);
    const weatherQuery = this.buildWeatherQuery(coordinates);
    const weatherData = await this.fetchLocationData(weatherQuery);
    return weatherData;
  }


  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any) {
    const { name, sys, dt, weather, main, wind } = response;
    const { country } = sys;
    const { description, icon } = weather[0];
    const { humidity, temp } = main;
    const { speed } = wind;
    const date = new Date(dt * 1000).toLocaleDateString('en-US');
    return new Weather(name, country, date, description, humidity, icon, temp, speed);
  }
  // TODO: Complete buildForecastArray method
  private buildForecastArray(currentWeather: Weather, weatherData: any[]) {
    const forecast = weatherData.map((data) => {
      const { dt, weather, main } = data;
      const { description, icon } = weather[0];
      const { humidity, temp } = main;
      const date = new Date(dt * 1000).toLocaleDateString('en-US');
      return new Weather(currentWeather.city, currentWeather.country, date, description, humidity, icon, temp, 0);
    });
    return forecast;
  }
  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {
    this.cityName = city;
    const coordinates = await this.fetchAndDestructureLocationData();
    const weatherData = await this.fetchWeatherData(coordinates);
    const currentWeather = this.parseCurrentWeather(weatherData.current);
    const forecast = this.buildForecastArray(currentWeather, weatherData.daily);
    return [currentWeather, ...forecast];
  }
}

export default WeatherService;
