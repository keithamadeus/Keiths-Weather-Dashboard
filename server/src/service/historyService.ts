import { promises as fs } from 'fs';

// TODO: Define a City class with name and id properties
class City {
  // name: string;
  // id: string;
  constructor(public name: string, public id: string) {
    // this.name = name;
    // this.id = id;
  }
}

// TODO: Complete the HistoryService class
class HistoryService {
  private filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
  }
  // TODO: Define a read method that reads from the searchHistory.json file
  private async read(): Promise<City[]> {
    return JSON.parse(await fs.readFile(this.filePath, 'utf-8'));
  }
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]): Promise<void> {
    await fs.writeFile(this.filePath, JSON.stringify(cities), 'utf-8');
  }
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities(): Promise<City[]> {
    return await this.read();
  }
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(city: string) {
    const cities = await this.read();
    const newCity = new City(city, cities.length.toString());
    cities.push(newCity);
    await this.write(cities);
  }
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  async removeCity(id: string) {
    const cities = await this.read();
    const updatedCities = cities.filter((city) => city.id !== id);
    await this.write(updatedCities);
  }
}

export default HistoryService;
