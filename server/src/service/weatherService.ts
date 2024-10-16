// import fs from 'node:fs/promises';
import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
// interface Coordinates {
//   lat: number;
//   lon: number;
// }

// Define a City class with name and id properties
// class city {
//   name: string;
//   id: string;

//   constructor(name: string, id: string) {
//     this.name = name;
//     this.id = id;
//   }
// }

// TODO: Define a class for the Weather object
class Weather {
  city: string;
  date: string;
  icon: string;
  iconDescription: string;
  tempF: number;
  windSpeed: number;
  humidity: number;

  constructor(city: string, date: string, icon: string, iconDescription: string, tempF: number, windSpeed: number, humidity: number) {
    this.city = city;
    this.date = date;
    this.icon = icon;
    this.iconDescription = iconDescription;
    this.tempF = tempF;
    this.windSpeed = windSpeed;
    this.humidity = humidity;
  }
}


// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  private baseURL: string;
  private apiKey: string;
  private city: string;
  
  constructor() {
    this.baseURL = process.env.API_BASE_URL || '';
    this.apiKey = process.env.API_KEY || '';
    this.city = '';
  }
  // TODO: Create fetchLocationData method
  private async fetchLocationData(query: string) {
    try {
      const response = await fetch(
        `${this.baseURL}weather?q=${query}&appid=${this.apiKey}`
      )
      return await response.json();
  } catch (err) {
    console.log(err);
  }
}
  // TODO: Create destructureLocationData method
  // private destructureLocationData(locationData: Coordinates): Coordinates {}
  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string): Promise<Weather[]> {
    this.city = city;
    console.log(await this.fetchLocationData(this.city));
    
    const dummyData = [
      { city: this.city, date: '10/16/24', icon: '11n', iconDescription: "Icon description", tempF: 0, windSpeed: 0, humidity: 0 },
      { city: this.city, date: '10/16/24', icon: '11n', iconDescription: "Icon description", tempF: 0, windSpeed: 0, humidity: 0 },
      { city: this.city, date: '10/16/24', icon: '11n', iconDescription: "Icon description", tempF: 0, windSpeed: 0, humidity: 0 },
      { city: this.city, date: '10/16/24', icon: '11n', iconDescription: "Icon description", tempF: 0, windSpeed: 0, humidity: 0 },
      { city: this.city, date: '10/16/24', icon: '11n', iconDescription: "Icon description", tempF: 0, windSpeed: 0, humidity: 0 },
      { city: this.city, date: '10/16/24', icon: '11n', iconDescription: "Icon description", tempF: 0, windSpeed: 0, humidity: 0 }
    ]
    return dummyData.map((data) => new Weather(data.city, data.date, data.icon, data.iconDescription, data.tempF, data.windSpeed, data.humidity));
  }
}

export default new WeatherService();
