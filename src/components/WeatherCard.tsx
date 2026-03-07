import type { WeatherData } from "../types/weather";
import { getWeatherTheme } from "../utils/weatherTheme";

interface Props {
  weather: WeatherData;
}

export function WeatherCard({ weather }: Props) {
  const theme = getWeatherTheme(weather.weather[0].main);

  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-5 min-w-[200px]">
      <span className="text-6xl">{theme.icon}</span>

      <div className="flex flex-col items-center gap-1">
        <p className="text-white/60 text-sm">Sensación térmica</p>
        <p className="text-white text-3xl font-bold">
          {Math.round(weather.main.feels_like)}°C
        </p>
      </div>

      <div className="w-full border-t border-white/20" />

      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center gap-3">
          <span className="text-2xl">💧</span>
          <div>
            <p className="text-white/60 text-xs">Humedad</p>
            <p className="text-white font-semibold">{weather.main.humidity}%</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl">💨</span>
          <div>
            <p className="text-white/60 text-xs">Viento</p>
            <p className="text-white font-semibold">{weather.wind.speed} m/s</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl">🌧️</span>
          <div>
            <p className="text-white/60 text-xs">Precipitaciones</p>
            <p className="text-white font-semibold">
              {weather.rain?.["1h"] ?? 0} mm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
