import Temperature from "@/ui/compositions/Temperature";
import getData from "./data";
import DashboardLink from "@/ui/components/DashboardLink";
import Searchbar from "@/ui/components/Searchbar";
import Toggle from "@/ui/components/Toggle";

export default async function Dashboard() {
  const { locations } = await getData();

  return (
    <main className="container flex flex-col mx-auto pt-10">
      <Toggle />
      <Searchbar />
      <ul className="grid lg:grid-cols-3 gap-10 m-2">
        {locations?.map((item) => (
          <DashboardLink
            key={item.id}
            to={`/details/${item.name}`}
            title={item.name}
          >
            <Temperature degree={Number(item?.main?.temp)} />
          </DashboardLink>
        ))}
      </ul>
    </main>
  );
}
