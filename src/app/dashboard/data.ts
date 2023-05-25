import { baseUrl } from "@domain/api/weather/config";
import type { DashboardProps } from "./page";

async function getData(): Promise<DashboardProps> {
  "use server";

  return {
    locations: [
      { name: "Berlin", id: 2950159, base: 14 },
      { name: "Stockholm", id: 2673730, base: 17 },
      { name: "Sydney", id: 2147714, base: 12 },
      { name: "Crash test", id: "3143dasd244", base: 12 },
    ],
  };
}

export default getData;
