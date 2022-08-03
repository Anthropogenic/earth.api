import { useRouter } from "next/router";
import useSWR from "swr";
import Layout from "../../components/layout";
import RequestAccess from "../../components/request";
import { PageHero, EmissionsTable } from "../../components/emissionsPage";
import DataTableTabs from "../../components/tables";

import Co2HeroImage from "../../public/assets/emissions/co2Banner.png";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/co2/weekly", fetcher);
  const { asPath } = useRouter();
  var afterWithout = asPath.substr(1, asPath.lastIndexOf("/"));
  var afterWithout = asPath.substr(1, asPath.lastIndexOf("/"));
  const DataRouteURL = afterWithout;
  console.log("new path: " + DataRouteURL);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Layout>LOADING</Layout>;

  return (
    <Layout>
      <div className="bg-[#17253D] p-9">
        <PageHero
          title="CO₂"
          description="Carbon dioxide is a chemical compound occurring as a colorless gas with a density about 53% higher than that of dry air. ~ Wikipedia"
          type="Emissions Data"
          image={Co2HeroImage}
          color="bg-[#DF775E]"
        />
      </div>
      <div className="flex bg-[#17253D] p-9">
        <div className="w-full">
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <DataTableTabs
                  YearHref="/co2/yearly"
                  MonthHref="/co2/monthly"
                  WeekHref="/co2/weekly"
                  DayHref=""
                />

                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <EmissionsTable
                    key={data}
                    data={data}
                    source={data.source}
                    apiHref={DataRouteURL}
                    ftpHref={DataRouteURL}
                    childHref={DataRouteURL}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <RequestAccess />
      </div>
    </Layout>
  );
}
