# Keiths-Weather-Dashboard

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description
  I Developed a weather dashboard application that interfaces with the OpenWeather API to provide real-time and forecast weather data for multiple cities, enhancing travel planning capabilities for users. During the Backend Development I Built server-side functionality to handle API calls, manage data, and deployed the application on Render. 

  ## Table of Contents
  - [Usage](#usage)
  - [Learning Points](#learning-points)
  - [Author Information](#author-information)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)

  ## Usage
  With API Utilization I Use OpenWeather's 5-day forecast API to fetch weather data based on geographical coordinates derived from city names. Data Management I had trouble implementing a searchHistory.json file using Node.js fs module to store searched cities, allowing retrieval and deletion and have saved it for future Development. Users can input a city name to retrieve current and 5 day forecast with 7 hours a day weather conditions. 

  User Benefits: Easy access to weather conditions for planning trips or daily activities across different cities. Enhanced user experience with a visual and historically accessible search function. 

  ## Learning Points
  API Routes: GET /api/weather/history retrieves all. POST /api/weather accepts a new city, and returns corresponding weather data. The existing frontend will display data fetched and processed by the backend. Deployment: Deploy to Render, ensuring all necessary environment variables (like API keys) are securely set. 
  
  Challenges: API Key Management: Ensure the API key is activated and securely stored as an environment variable on Render. Used openweathermap API 5 Day/ 3h Forcast: Data Parsing & Sending: Server-side processing of API responses to streamline data sent to the client. 
  
  Deployment & Maintenance: Deploy using Render.com, ensuring scalability and continuous uptime, with future development to add save and delete functions along with regular updates to handle any changes in the OpenWeather API or to improve application performance. This project combines backend development, API interaction, and real-world application, making it a comprehensive exercise in modern web development practices.

  ## Author Information
  Keith Williams

  ## Contributing
  N/A
  
  ## Tests
  N/A
  
  ## License
        This project is licensed under the MIT license.
  https://opensource.org/licenses/MIT

  ## Questions
  If you have any questions, you can reach me at keith.amadeus.williams@gmail.com. 
  You can also visit my GitHub profile at [keithamadeus](https://github.com/keithamadeus).