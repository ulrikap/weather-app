import { CurrentForecastResponse } from "@/domain/api/weather/types";
import { DetailsShape } from "./page";
import fetchLocationByCityName from "@/domain/api/weather/functions/fetchLocationByCityName";

async function getData(cityname: string): Promise<DetailsShape> {
  "use server";

  const response = await fetchLocationByCityName(cityname);

  if (response.ok) {
    return mapDataToShape(await response.json());
  } else {
    const res = await response.json();
    console.log(res)
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
  country: arg?.sys?.country,
});
export default getData;
