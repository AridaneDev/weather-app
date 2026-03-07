import { useWeather } from "./hooks/useWeather";
import { SearchBar } from "./components/SearchBar";
import { WeatherCard } from "./components/WeatherCard";
import { getWeatherTheme } from "./utils/weatherTheme";
import { MapPin } from "lucide-react";

function App() {
  const { weather, loading, error, fetchWeather } = useWeather();

  const bgImage = weather
    ? getWeatherTheme(weather.weather[0].main).image
    : "/backgrounds/default.jpg";

  const now = new Date();
  const fecha = now.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  const hora = now.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center bg-transition -z-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="fixed inset-0 bg-black/50 -z-10" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="p-4 sm:p-6 flex items-center">
          <h1 className="text-white text-2xl font-bold drop-shadow tracking-wide">
            🌤️ Weather App
          </h1>
        </header>

        <main className="flex-1 flex flex-col justify-center p-4 sm:p-6 gap-4 sm:gap-6">
          <div className="flex justify-center">
            <SearchBar onSearch={fetchWeather} />
          </div>

          {weather && (
            <p className="text-white text-xl sm:text-3xl md:text-4xl font-semibold text-center drop-shadow mb-4 sm:mb-8 flex items-center justify-center gap-2">
              <MapPin className="w-8 h-8" />
              {weather.name}
            </p>
          )}

          {loading && (
            <p className="text-white text-xl text-center">Cargando...</p>
          )}
          {error && <p className="text-red-200 text-xl text-center">{error}</p>}

          {weather && !loading && (
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              {/* Izquierda: info sobre la imagen */}
              <div className="text-white drop-shadow-lg text-center md:text-left">
                <p className="text-5xl sm:text-7xl md:text-9xl font-bold leading-none mb-3">
                  {Math.round(weather.main.temp)}°
                </p>
                <p className="text-lg mb-1 capitalize">{fecha}</p>
                <p className="text-lg mb-4">{hora}</p>
                <p className="text-xl">
                  {weather.weather[0].description.charAt(0).toUpperCase() +
                    weather.weather[0].description.slice(1)}
                </p>
              </div>

              {/* Derecha: tarjeta de detalles */}
              <WeatherCard weather={weather} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
