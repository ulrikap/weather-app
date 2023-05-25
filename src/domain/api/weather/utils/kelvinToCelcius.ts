const KELVIN_BASE = 273.15;

const convertFromKelvin = (
  from: number,
  to: "celcius" | "fahrenheit"
): number => {
  switch (to) {
    case "celcius":
      return from - KELVIN_BASE;
    case "fahrenheit":
      return (from - KELVIN_BASE) * 1.8 + 32;
    default:
      to satisfies never;
      return -1000;
  }
};

export default convertFromKelvin;
