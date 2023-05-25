export type Coordinate = {
  lon: number;
  lat: number;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type MainData = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};

export type Wind = {
  speed: number;
  deg: number;
};

export type Clouds = {
  all: number;
};

export type System = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export type CurrentForecastResponse = {
  coord: Coordinate;
  weather: Weather[];
  base: string;
  main: MainData;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: System;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
