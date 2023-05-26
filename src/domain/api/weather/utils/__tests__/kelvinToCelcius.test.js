import kelvinToCelcius, {
  INVALID_MODE_MESSAGE,
  INVALID_NEGATIVE_INPUT_MESSAGE,
} from "../kelvinToCelcius";

describe("kelvinToCelcius", () => {
  test("Should convert correctly from kelvin to celcius", () => {
    const input = 283;
    const test = Number(kelvinToCelcius(input, "celcius").toFixed(2));
    expect(test).toEqual(9.85);
  });
  test("Should convert correctly from kelvin to fahrenheit", () => {
    const input = 283;
    const test = Number(kelvinToCelcius(input, "fahrenheit").toFixed(2));
    expect(test).toEqual(49.73);
  });
  test("Should not accept negative numbers", () => {
    const input = -283;
    try {
      kelvinToCelcius(input, "celcius");
    } catch (e) {
      expect(e.message).toEqual(INVALID_NEGATIVE_INPUT_MESSAGE);
    }
  });
  test("Should not accept bad mode", () => {
    const input = 283;
    try {
      kelvinToCelcius(input, "silly mode");
    } catch (e) {
      expect(e.message).toEqual(INVALID_MODE_MESSAGE);
    }
  });
});
