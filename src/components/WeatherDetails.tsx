interface Props {
  humidity: number;
  windSpeed: number;
  rain?: number;
  textColor: string;
}

export function WeatherDetails({
  humidity,
  windSpeed,
  rain,
  textColor,
}: Props) {
  return (
    <div className={`flex gap-6 mt-4 ${textColor}`}>
      <div className="flex flex-col items-center">
        <span className="text-2xl">💧</span>
        <span className="text-lg font-semibold">{humidity}%</span>
        <span className="text-sm opacity-80">Humedad</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl">💨</span>
        <span className="text-lg font-semibold">{windSpeed} m/s</span>
        <span className="text-sm opacity-80">Viento</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl">🌧️</span>
        <span className="text-lg font-semibold">{rain ?? 0} mm</span>
        <span className="text-sm opacity-80">Precipitaciones</span>
      </div>
    </div>
  );
}
