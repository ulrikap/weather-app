declare global {
  namespace NodeJS {
    interface ProcessEnv {
      WEATHER_API_KEY: string;
      UNSPLASH_ACCESS_KEY: string;
    }
  }
}
export {};

