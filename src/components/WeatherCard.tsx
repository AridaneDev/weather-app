import type { WeatherData } from "../types/weather";
import { getWeatherTheme } from "../utils/weatherTheme";
import { WeatherDetails } from "./WeatherDetails";

interface Props {
  weather: WeatherData;
}

export function WeatherCard({ weather }: Props) {
  const theme = getWeatherTheme(weather.weather[0].main);

  return (
    <div
      className={`bg-gradient-to-br ${theme.bg} rounded-3xl p-8 w-full max-w-md shadow-2xl flex flex-col items-center gap-2`}
    >
      <h2 className={`text-3xl font-bold ${theme.text}`}>{weather.name}</h2>
      <span className="text-7xl">{theme.icon}</span>
      <p className={`text-6xl font-bold ${theme.text}`}>
        {Math.round(weather.main.temp)}°C
      </p>
      <p className={`text-lg capitalize ${theme.text} opacity-90`}>
        {weather.weather[0].description}
      </p>
      <WeatherDetails
        humidity={weather.main.humidity}
        windSpeed={weather.wind.speed}
        textColor={theme.text}
      />
    </div>
  );
}
