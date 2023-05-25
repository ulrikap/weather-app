import { baseUrl } from "../config";
import { LocationNameResponse } from "../types/LocationNameResponse";

export default async function searchByCityName(
  query: string
): Promise<LocationNameResponse> {
  "use server";
  return (await fetch(
    `${baseUrl}&q=${query}`
  )) as unknown as LocationNameResponse;
}
