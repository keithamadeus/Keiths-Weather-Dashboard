import fs from 'fs';

// TODO: Define a City class with name and id properties
class City {
  name: string;
  id: string;
  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }
}

// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file
  private async read() {
    try {
      const data = await fs.promises.readFile('searchHistory.json', 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error reading search history:', error);
      return [];
    }
  }
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]) {
    try {
      await fs.promises.writeFile('searchHistory.json', JSON.stringify(cities, null, 2));
    } catch (error) {
      console.error('Error writing search history:', error);
    }
  }
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities( ): Promise<City[]> {
    const cities = await this.read();
    return cities.map((city: { name: string; id: string }) => new City(city.name, city.id));
  }
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(city: string) {
    const cities = await this.getCities();
    const id = cities.length ? String(Number(cities[cities.length - 1].id) + 1) : '1';
    cities.push(new City(city, id));
    await this.write(cities);
  }
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  async removeCity(id: string) {
    const cities = await this.getCities();
    const updatedCities = cities.filter((city) => city.id !== id);
    await this.write(updatedCities);
  }
}

export default new HistoryService();
