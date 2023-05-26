import { env } from "process";

export const apiKey = env.UNSPLASH_ACCESS_KEY;
export const baseUrl = `https://api.unsplash.com/search/photos/?client_id=${apiKey}`;
