import { Router, type Request, type Response } from 'express';
const router = Router();

// import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// POST Request with city name to retrieve weather data
router.post('/', async (req: Request, res: Response) => {
  // GET weather data from city name
  try {
    console.log(req.body);
    
    const weatherData = await WeatherService.getWeatherForCity(req.body.cityName);
    res.json(weatherData);
  }
  // save city to search history
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET search history
router.get('/history', async (_req: Request, res: Response) => {
  try {
    const dummyData = [
      {
        name: 'New York',
        id: '1',
      },
      {
        name: 'Los Angeles',
        id: '2',
      },
    ];
    res.json(dummyData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// * BONUS DELETE city from search history
router.delete('/history/:id', async (_req: Request, res: Response) => {
  try {
   res.json('History Deleted');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default router;
