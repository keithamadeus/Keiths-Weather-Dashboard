// import fs from 'node:fs/promises';
import dotenv from 'dotenv';
dotenv.config();

// Define a class for the Weather object
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


// Complete the WeatherService class
class WeatherService {
  // Define the baseURL, API key, and city name properties
  private baseURL: string;
  private apiKey: string;
  private city: string;
  
  constructor() {
    this.baseURL = process.env.API_BASE_URL || '';
    this.apiKey = process.env.API_KEY || '';
    this.city = '';
  }
  // Create fetchLocationData method
  private async fetchLocationData(query: string) {
    try {
      const response = await fetch(
        `${this.baseURL}forecast?q=${query}&appid=${this.apiKey}&units=imperial`
      )
      return await response.json();
  } catch (err) {
    console.log(err);
  }
}

// Have respons data, need to clean it and send it back to the client
// Filter the respons array into 6 itesm
  filterWeatherData (weatherList: any[]) {
    return weatherList
  }

  // transform data into Weather objects
  
  async getWeatherForCity(city: string): Promise<Weather[]> {
    this.city = city;
    const response = await this.fetchLocationData(this.city);
    const filteredDataResponse =  this.filterWeatherData(response.list);
    console.table(filteredDataResponse);

    return filteredDataResponse.map((data) => new Weather(this.city, data.dt_txt, data.weather[0].icon, data.weather[0].description, data.main.temp, data.wind.speed, data.main.humidity));
    
  }
}

export default new WeatherService();
