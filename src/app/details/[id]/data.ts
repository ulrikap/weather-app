import fetchLocationById from "@/domain/api/weather/functions/fetchLocationById";
import { CurrentForecastResponse } from "@/domain/api/weather/types";
import { DetailsShape } from "./page";

async function getData(id: number): Promise<DetailsShape> {
  "use server";

  const response = await fetchLocationById(id, "metric");

  if (response.ok) {
    return mapDataToShape(await response.json());
  } else {
    const res = await response.json();
    throw Error(res?.message, { cause: res?.cod });
  }
}

const mapDataToShape = (arg: CurrentForecastResponse): DetailsShape => ({
  currentTemp: arg?.main?.temp,
  hiTemp: arg?.main?.temp_max,
  loTemp: arg?.main?.temp_min,
  humidity: arg?.main?.humidity,
  sunrise: arg?.sys?.sunrise,
  sunset: arg?.sys?.sunset,
  title: arg?.name,
  visibility: arg?.visibility,
  weatherDetailText: arg?.weather[0].main,
  imageUrl: arg?.weather[0]?.icon,
});
export default getData;
