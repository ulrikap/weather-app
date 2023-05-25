"use client";

import { TemperatureUnit } from "@/domain/api/weather/types";
import convertFromKelvin from "@/domain/api/weather/utils/kelvinToCelcius";
import useGlobalStore from "@/domain/state/globalStore";

const modeToLetter = (mode: (typeof TemperatureUnit)[number]) => {
  switch (mode) {
    case "celcius":
      return "C";
    case "fahrenheit":
      return "F";
    default:
      mode satisfies never;
      return "";
  }
};

const Temperature = ({
  degree,
  wrapperClasses,
  textClasses,
}: {
  degree: number;
  wrapperClasses?: string;
  textClasses?: string;
}) => {
  const { mode } = useGlobalStore();

  return (
    <div className={`flex ${wrapperClasses}`}>
      <p className={`${textClasses}`}>
        {convertFromKelvin(degree, mode).toFixed(2)}°{modeToLetter(mode)}
      </p>
    </div>
  );
};

export default Temperature;
