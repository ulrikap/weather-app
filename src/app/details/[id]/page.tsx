import Header from "@/ui/compositions/Header";
import getData from "./data";
import Temperature from "@/ui/compositions/Temperature";
import * as config from "@domain/api/image/config";
import Image from "next/image";

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
};

export default async function Details({ params }) {
  const response = await getData(params?.id);
  return (
    <>
      <Header backLink="/dashboard" title={response.title} />
      <main className="container mx-auto pt-20">
        <div className="w-full h-full grid lg:grid-cols-2 gap-10">
          <div className="h-full flex flex-col items-center justify-center">
            <div className="flex justify-center items-center">
              <h2 className="text-2xl p-5">{response.weatherDetailText}</h2>
              <Image
                className="h-14"
                src={`${config.baseUrl}${response.imageUrl}.png`}
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
            <div className="grid container gap-4 grid-cols-2 grid-rows-2 h-full items-center">
              <div>
                <h1 className="font-bold">{"Sunrise"}</h1>
                <p>{new Date(response.sunrise * 1000).toLocaleTimeString()}</p>
              </div>
              <div>
                <h1 className="font-bold">{"Sunset"}</h1>
                <p>{new Date(response.sunset * 1000).toLocaleTimeString()}</p>
              </div>
              <div>
                <h1 className="font-bold">{"Humidity"}</h1>
                <p>{`${response.humidity}%`}</p>
              </div>
              <div>
                <h1 className="font-bold">{"Visibility"}</h1>
                <p>{`${response.visibility/10} KM`}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
