import fetchLocationByCityName from "@/domain/api/weather/functions/fetchLocationByCityName";

async function getData() {
  "use server";

  const berlin = await fetchLocationByCityName("Berlin");
  const stockholm = await fetchLocationByCityName("Stockholm");
  const sydney = await fetchLocationByCityName("Sydney");

  const locations = [
    await berlin.json(),
    await stockholm.json(),
    await sydney.json(),
  ];

  return {
    locations,
  };
}

export default getData;
