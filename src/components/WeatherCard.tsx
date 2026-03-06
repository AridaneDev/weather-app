import type { WeatherData } from "../types/weather";
import { getWeatherTheme } from "../utils/weatherTheme";
import { WeatherDetails } from "./WeatherDetails";

interface Props {
  weather: WeatherData;
}

export function WeatherCard({ weather }: Props) {
  const theme = getWeatherTheme(weather.weather[0].main);
  const now = new Date();
  const fecha = now.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 w-full max-w-md shadow-2xl flex flex-col items-center gap-2">
      <h2 className={`text-3xl font-bold ${theme.text}`}>{weather.name}</h2>
      <p className={`text-sm ${theme.text} opacity-70`}>{fecha}</p>
      <span className="text-7xl">{theme.icon}</span>
      <p className={`text-6xl font-bold ${theme.text}`}>
        {Math.round(weather.main.temp)}°C
      </p>
      <p className={`text-sm ${theme.text} opacity-70`}>
        Sensación térmica {Math.round(weather.main.feels_like)}°C
      </p>

      <p className={`text-lg ${theme.text} opacity-90`}>
        {weather.weather[0].description.charAt(0).toUpperCase() +
          weather.weather[0].description.slice(1)}
      </p>
      <WeatherDetails
        humidity={weather.main.humidity}
        windSpeed={weather.wind.speed}
        textColor={theme.text}
      />
    </div>
  );
}
