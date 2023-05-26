import { baseUrl } from "../config";

export default async function fetchImageByQuery(query: string) {
  "use server";
  return await fetch(`${baseUrl}&per_page=1&query=${query}`);
}
