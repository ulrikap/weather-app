import { baseUrl } from "../config";

export default async function fetchLocationById(
  id: number,
  unit: "metric" | "imperial"
) {
  "use server";
  return await fetch(`${baseUrl}&id=${id}&unit=${unit}`);
}
