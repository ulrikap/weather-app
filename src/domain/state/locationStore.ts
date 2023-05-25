import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { CurrentForecastResponse } from "../api/weather/types";

export type LocationState = {
  locations: CurrentForecastResponse[];
  setLocations: (newData: CurrentForecastResponse[]) => void;
};

const useLocationStore = create<LocationState>()(
  devtools(
    persist(
      (set) => ({
        locations: [],
        setLocations: (newData) => set(() => ({ locations: newData })),
      }),
      {
        name: "location-storage",
      }
    )
  )
);
export default useLocationStore;
