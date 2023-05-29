import Header from "@/ui/compositions/Header";
import getData from "./data";
import Temperature from "@/ui/compositions/Temperature";
import Image from "next/image";
import KeyValueList from "@/ui/compositions/KeyValueList";
import { imageBaseUrl } from "@domain/api/weather/config";
import fetchImageByQuery from "@/domain/api/unsplash/functions/fetchImageByQuery";

export type DetailsShape = {
  title: string;
  weatherDetailText: string;
  currentTemp: number;
  hiTemp: number;
  loTemp: number;
  sunrise: number;
  sunset: number;
  humidity: number;
  visibility: number;
  imageUrl: string;
  country: string;
};

export default async function Details({
  params,
}: {
  params: Record<PropertyKey, string>;
}) {
  const response = await getData(params?.cityname);
  const imageDetails = await fetchImageByQuery(params?.cityname);

  const image = await imageDetails.json();

  const detailItems = {
    sunrise: new Date(response.sunrise * 1000).toLocaleTimeString(),
    sunset: new Date(response.sunset * 1000).toLocaleTimeString(),
    humidity: `${response.humidity}%`,
    visibility: `${response.visibility / 10} KM`,
  };

  return (
    <>
      <Header
        backLink="/dashboard"
        title={response.title}
        subtitle={response.country}
      />
      <main className="container mx-auto pt-20">
        <div className="flex flex-col justify-center items-center gap-7">
          <div className="w-full h-full grid lg:grid-cols-2 gap-10">
            <div className="h-full flex flex-col items-center justify-center">
              <div className="flex justify-center items-center">
                <h2 className="text-2xl p-5">{response.weatherDetailText}</h2>
                <Image
                  className="h-14"
                  src={`${imageBaseUrl}${response.imageUrl}.png`}
                  width={50}
                  height={50}
                  alt="Weather icon"
                />
              </div>
              <Temperature
                degree={response.currentTemp}
                textClasses="text-6xl p-5"
              />
              <div className="flex flex-row gap-2 items-center justify-center">
                <p>{"Hi:"}</p>
                <Temperature degree={response.hiTemp} textClasses="font-bold" />
                <p>{"Lo:"}</p>
                <Temperature degree={response.loTemp} textClasses="font-bold" />
              </div>
            </div>
            <div className="h-full text-center gap-5 ">
              <KeyValueList items={detailItems} />
            </div>
          </div>
          <img className="" src={image.results[0].urls.regular} />
        </div>
      </main>
    </>
  );
}
