"use client";

import { TemperatureUnit } from "@/domain/api/weather/types";
import convertFromKelvin from "@/domain/api/weather/utils/kelvinToCelcius";
import useGlobalStore, { TGlobalState } from "@/domain/state/globalStore";
import usePersistentStore from "@/domain/state/useStore";

export const modeToLetter = (mode: (typeof TemperatureUnit)[number]) => {
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
  const state = usePersistentStore(
    useGlobalStore,
    (state) => state
  ) as TGlobalState;

  // Should use suspense here or architect a better application
  if (!state) return null;

  return (
    <div className={`flex ${wrapperClasses}`}>
      <p className={`${textClasses}`}>
        {convertFromKelvin(degree, state?.mode).toFixed(2)}°
        {modeToLetter(state?.mode)}
      </p>
    </div>
  );
};

export default Temperature;
