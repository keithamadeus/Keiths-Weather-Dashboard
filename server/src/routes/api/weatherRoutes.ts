import { Router, type Request, type Response } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', async (req: Request, res: Response) => {
  // TODO: GET weather data from city name
  try {
    const weatherService = new WeatherService(
      process.env.WEATHER_API_KEY || '',
      req.body.cityName
    );

    // Fetch weather data
    const weatherData = await weatherService.fetchWeatherData();

    // save city to search history
    const historyService = new HistoryService(
      process.env.SEARCH_HISTORY_FILE || './searchHistory.json'
    );
    await historyService.addCity(req.body.cityName);

    // Send weather data as response
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ message: (error as any).message });
  }
});

// TODO: GET search history
router.get('/history', async (_req: Request, res: Response) => {
  try {
    const historyService = new HistoryService(
      process.env.SEARCH_HISTORY_FILE || './searchHistory.json'
    );
    const history = await historyService.getCities();
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: (error as any).message });
  }
});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {
  try {
    const historyService = new HistoryService(
      process.env.SEARCH_HISTORY_FILE || './searchHistory.json'
    );
    await historyService.removeCity(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: (error as any).message });
  }
});

export default router;
