import { baseUrl } from "../config";

export default async function fetchLocationByCityName(query: string) {
  "use server";
  return await fetch(`${baseUrl}&q=${query}`);
}
