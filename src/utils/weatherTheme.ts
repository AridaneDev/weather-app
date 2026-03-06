export function getWeatherTheme(weatherMain: string) {
  switch (weatherMain) {
    case "Clear":
      return {
        bg: "from-yellow-400 to-orange-300",
        text: "text-yellow-900",
        icon: "☀️",
        image: "/backgrounds/clear.jpg",
      };
    case "Clouds":
      return {
        bg: "from-gray-400 to-gray-600",
        text: "text-gray-100",
        icon: "☁️",
        image: "/backgrounds/clouds.jpg",
      };
    case "Rain":
    case "Drizzle":
      return {
        bg: "from-blue-400 to-blue-700",
        text: "text-blue-100",
        icon: "🌧️",
        image: "/backgrounds/rain.jpg",
      };
    case "Thunderstorm":
      return {
        bg: "from-gray-700 to-gray-900",
        text: "text-gray-100",
        icon: "⛈️",
        image: "/backgrounds/thunderstorm.jpg",
      };
    case "Snow":
      return {
        bg: "from-blue-100 to-white",
        text: "text-blue-900",
        icon: "❄️",
        image: "/backgrounds/snow.jpg",
      };
    default:
      return {
        bg: "from-sky-400 to-blue-500",
        text: "text-white",
        icon: "🌤️",
        image: "/backgrounds/default.jpg",
      };
  }
}
