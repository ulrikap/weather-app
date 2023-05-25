import type { LocationState } from "@/domain/state/locationStore";
import Temperature from "@/ui/compositions/Temperature";
import getData from "./data";
import DashboardLink from "@/ui/components/DashboardLink";

export type DashboardProps = {
  locations: LocationState["locations"];
};

export default async function Dashboard() {
  const { locations } = await getData();

  return (
    <main className="container grid mx-auto pt-10">
      <ul className="grid lg:grid-cols-3 gap-10 m-2">
        {locations.map((item) => (
          <DashboardLink
            key={item.id}
            to={`/details/${item.id}`}
            title={item.name}
          >
            <Temperature degree={Number(item.base)} />
          </DashboardLink>
        ))}
      </ul>
    </main>
  );
}
