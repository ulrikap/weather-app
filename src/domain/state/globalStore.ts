"use client";

import { create } from "zustand";
import { TemperatureUnit } from "@domain/api/weather/types";
import { persist } from "zustand/middleware";

export type TGlobalState = {
  mode: (typeof TemperatureUnit)[number];
  setMode: (mode: TGlobalState["mode"]) => void;
};

const useGlobalStore = create<TGlobalState>()(
  persist(
    (set) => ({
      mode: "celcius",
      setMode: (mode) => set({ mode }),
    }),
    { name: "global-storage" }
  )
);

export default useGlobalStore;
