
import axios from "axios";
import "./App.css";
import { useState } from "react";
import HoloCard from "./component/HoloCard";
import MicroSlats from "./component/MicroSlats";

function App() {
  const [city, setcity] = useState("");
  const [weather, setweather] = useState("");

  function handleCity(event) {
    setcity(event.target.value);
  }

  function getWeather() {
    const data = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`,
    );

    data
      .then(function (response) {
        console.log(response.data);
        setweather(response.data);
      })
      .catch(function (errmsg) {
        console.log(errmsg);
        console.log("Failed to Get");
      });
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#080611] text-white">
      {/* Animated background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <MicroSlats
          preset="swell"
          color="#A855F7"
          glintColor="#E9D5FF"
          backgroundColor="#080611"
          slatWidth={10}
          slatHeight={25}
          gap={3}
          speed={0.5}
          interactive={true}
        />
      </div>

      {/* Main layout */}
      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center gap-4 px-4 py-4 sm:px-8 md:px-12">
        {/* Heading */}
        <header className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            the weather app
          </h1>

          <p className="mt-1 text-sm text-slate-300 sm:text-base">
            I can give you a weather report about your city!
          </p>
        </header>

        {/* City search */}
        <div className="flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="text"
            value={city}
            placeholder="Enter a city or a place"
            className="w-full min-w-0 flex-1 rounded-xl border border-slate-700 bg-white px-4 py-3 text-black placeholder:text-gray-500 outline-none transition focus:border-purple-500 "
            onChange={handleCity}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                getWeather();
              }
            }}
          />

          <button
            type="button"
            className="shrink-0 rounded-xl bg-black px-6 py-3 text-white transition hover:text-amber-300 hover:cursor-pointer"
            onClick={getWeather}
          >
            Get report
          </button>
        </div>

        {/* Weather report */}
        {weather && (
          <section className="flex w-full justify-center">
            <HoloCard
              preset="rainbow"
              width={480}
              radius={20}
              tiltMax={10}
              className="mt-2"
            >
              <div className="flex flex-col gap-5">
                {/* Current weather */}
                <div>
                  <h2 className="text-2xl font-bold">
                    {weather.name}, {weather.sys.country}
                  </h2>

                  <h3 className="text-5xl font-bold">
                    {Math.round(weather.main.temp)}°C
                  </h3>

                  <p className="capitalize">
                    {weather.weather[0].description}
                  </p>

                  <p>
                    Feels like {Math.round(weather.main.feels_like)}°C
                  </p>
                </div>

                {/* Weather details */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <div>
                    <h4 className="font-bold">Humidity</h4>
                    <p>{weather.main.humidity}%</p>
                  </div>

                  <div>
                    <h4 className="font-bold">Wind Speed</h4>
                    <p>{weather.wind.speed} m/s</p>
                  </div>

                  <div>
                    <h4 className="font-bold">Pressure</h4>
                    <p>{weather.main.pressure} hPa</p>
                  </div>

                  <div>
                    <h4 className="font-bold">Visibility</h4>
                    <p>{(weather.visibility / 1000).toFixed(1)} km</p>
                  </div>

                  <div>
                    <h4 className="font-bold">Minimum Temperature</h4>
                    <p>{Math.round(weather.main.temp_min)}°C</p>
                  </div>

                  <div>
                    <h4 className="font-bold">Maximum Temperature</h4>
                    <p>{Math.round(weather.main.temp_max)}°C</p>
                  </div>
                </div>
              </div>
            </HoloCard>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;

