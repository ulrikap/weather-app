"use client";

import { create } from "zustand";
import { TemperatureUnit } from "@domain/api/weather/types";

export type TGlobalState = {
  mode: (typeof TemperatureUnit)[number];
};

const useGlobalStore = create<TGlobalState>((set) => ({
  mode: "celcius",
  setMode: (mode: TGlobalState["mode"]) => set({ mode }),
}));

export default useGlobalStore;
