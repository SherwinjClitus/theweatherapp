# The Weather App

A responsive React + Vite weather report application with a dark, neon-purple, holographic UI. Search for a city and get real-time weather information from the OpenWeatherMap API. The project uses a Micro Slats animated background and an interactive HoloCard to present weather details.

Built with React, Vite, Tailwind CSS, Axios, and custom WebGL-based UI components.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-API-2C7BE5)](https://openweathermap.org/)

## Overview

This project allows users to search for a city and retrieve the current weather report using the OpenWeatherMap API. It is designed as a modern, futuristic weather app with a glassmorphism-inspired weather card, animated purple slats background, and clean data presentation.

## Features

- Search for weather by city name.
- Fetch weather data dynamically from OpenWeatherMap using Axios.
- Display the city name and country.
- Show the current temperature in Celsius.
- Display weather conditions and the feels-like temperature.
- Show humidity, wind speed, atmospheric pressure, visibility, minimum temperature, and maximum temperature.
- Responsive layout for mobile and desktop screens.
- Enter-key support for submitting a city search.
- Animated Micro Slats background.
- Interactive holographic weather card.
- API key configuration through an environment variable.

## Screenshots

Add screenshots to the `public/` folder and replace the placeholders below with real images for your portfolio.

- Search view and weather results:
  ![Weather app search](./public/screenshot-1.png)

- Mobile layout:
  ![Weather app mobile](./public/screenshot-2.png)

> Replace the placeholder image paths above with actual screenshots stored in `public/` before publishing the project.

## Tech Stack

- React
- Vite
- JavaScript
- Axios
- Tailwind CSS
- OpenWeatherMap API
- `HoloCard` and `MicroSlats` custom UI components
- CSS for custom styling and visual effects

## Prerequisites

Before running the app, make sure you have:

- Node.js 18+ recommended
- npm 9+ recommended
- An OpenWeatherMap API key

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SherwinjClitus/theweatherapp.git
   cd theweatherapp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add your OpenWeatherMap API key.

## Environment Variables

Create a `.env` file at the root of the project with the following content:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

You can also create a `.env.example` file with the same contents:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

Important:
- Vite environment variables prefixed with `VITE_` are exposed in the client bundle and are not private secrets.
- Do not treat the API key as a secure server-side secret in a Vite React app.

## Getting an OpenWeatherMap API Key

1. Go to https://openweathermap.org/
2. Create a free account.
3. Open your account dashboard.
4. Generate a new API key.
5. Copy the key into your `.env` file as `VITE_OPENWEATHER_API_KEY`.

## Running the App

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment on Vercel

To deploy this app on Vercel:

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Add the environment variable:
   - `VITE_OPENWEATHER_API_KEY`
4. Use the default build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Deploy.

> Vercel deployment is straightforward for this Vite app. Since this is a client-side app, the API key will still be visible in the browser bundle, so it should be treated as a public API key.

## Project Structure

```text
theweatherapp/
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public/
│   └── Neon Sun Cloud Rain Icon.svg
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── component/
│       ├── HoloCard.css
│       ├── HoloCard.jsx
│       ├── MicroSlats.css
│       └── MicroSlats.jsx
├── vite.config.js
└── dist/   (generated after build)
```

## API Usage and Behavior

The app uses Axios to call the OpenWeatherMap current-weather endpoint:

```javascript
https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric
```

From the response, the app displays:

- city name
- country
- current temperature in °C
- weather description
- feels like temperature
- humidity
- wind speed
- pressure
- visibility converted to kilometers
- minimum temperature
- maximum temperature

### Error handling

The current implementation catches request errors and logs them to the console. In `src/App.jsx`, failed requests do the following:

```javascript
.catch(function (errmsg) {
  console.log(errmsg);
  console.log("Failed to Get");
});
```

There is no visible user-facing error message or loading spinner currently implemented in the UI. If the request fails, the error is logged in the browser console.

## Design and Theme

The application uses a dark, futuristic, neon-purple aesthetic inspired by the Micro Slats visual effect. The background uses dark `#080611` shades with glowing purple and magenta slats. Weather details are shown inside a holographic-style card with a glowing glass-like presentation, gold-toned accent elements, and rounded controls.

## Future Improvements

The following features are not yet implemented in the current codebase, but would make good next steps:

- User-friendly error messages when the city is not found or the API fails.
- Loading states while fetching weather data.
- Forecast views for the next several days.
- Temperature unit switching (Celsius / Fahrenheit).
- Recent search history or saved cities.
- Better accessibility and keyboard support improvements.
- Server-side API proxy to hide the OpenWeatherMap key from the client.

## Notes

- The app uses custom animated components created for the holographic card and background effect.
- The search field supports pressing Enter to submit.
- The app is intended as a portfolio project and is already suitable for GitHub presentation when screenshots and environment details are added.

**Made with ❤️ by Sherwin**
