import { useWeather } from "./hooks/useWeather";
import { SearchBar } from "./components/SearchBar";
import { WeatherCard } from "./components/WeatherCard";
import { getWeatherTheme } from "./utils/weatherTheme";

function App() {
  const { weather, loading, error, fetchWeather } = useWeather();

  const bgImage = weather
    ? getWeatherTheme(weather.weather[0].main).image
    : "/backgrounds/default.jpg";

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center bg-transition"
      style={{ backgroundImage: `url(${bgImage})` }}
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
