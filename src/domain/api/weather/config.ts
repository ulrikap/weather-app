import { env } from "process";

export const apiKey = env.WEATHER_API_KEY;
export const baseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}`;
export const imageBaseUrl = `https://openweathermap.org/img/wn/`;
