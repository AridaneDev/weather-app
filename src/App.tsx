import { useWeather } from "./hooks/useWeather";
import { SearchBar } from "./components/SearchBar";
import { WeatherCard } from "./components/WeatherCard";
import { getWeatherTheme } from "./utils/weatherTheme";

function App() {
  const { weather, loading, error, fetchWeather } = useWeather();

  const bgTheme = weather
    ? getWeatherTheme(weather.weather[0].main).bg
    : "from-sky-400 to-blue-600";

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${bgTheme} flex flex-col items-center justify-center p-6 transition-all duration-700`}
    >
      <h1 className="text-white text-4xl font-bold mb-8 drop-shadow">
        Weather App
      </h1>
      <SearchBar onSearch={fetchWeather} />
      <div className="mt-8 w-full flex flex-col items-center">
        {loading && <p className="text-white text-xl">Cargando...</p>}
        {error && <p className="text-red-200 text-xl">{error}</p>}
        {weather && !loading && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;
