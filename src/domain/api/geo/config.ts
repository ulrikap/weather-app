import { env } from "process";

export const apiKey = env.WEATHER_API_KEY;
export const baseUrl = `https://api.openweathermap.org/geo/1.0/?appid=${apiKey}`;
