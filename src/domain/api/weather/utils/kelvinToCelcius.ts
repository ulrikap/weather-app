const KELVIN_BASE = 273.15;

export const INVALID_INPUT_MESSAGE = "Invalid input";
export const INVALID_MODE_MESSAGE = "Invalid mode";

const convertFromKelvin = (
  from: number,
  to: "celcius" | "fahrenheit"
): number => {
  if (typeof from !== "number" || from < 0) throw Error(INVALID_INPUT_MESSAGE);
  switch (to) {
    case "celcius":
      return from - KELVIN_BASE;
    case "fahrenheit":
      return (from - KELVIN_BASE) * 1.8 + 32;
    default:
      to satisfies never;
      throw Error(INVALID_MODE_MESSAGE);
  }
};

export default convertFromKelvin;
