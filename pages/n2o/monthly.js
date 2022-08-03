import { useRouter } from "next/router";
import useSWR from "swr";
import Layout from "../../components/layout";
import RequestAccess from "../../components/request";
import { PageHero, EmissionsTable } from "../../components/emissionsPage";
import DataTableTabs from "../../components/tables";

import n2oHeroImage from "../../public/assets/emissions/n2oBanner.png";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/n2o/monthly", fetcher);
  const { asPath } = useRouter();
  var afterWithout = asPath.substr(1, asPath.lastIndexOf("/"));
  const DataRouteURL = afterWithout;
  if (error) return <div>Failed to load</div>;
  if (!data) return <Layout>LOADING</Layout>;

  return (
    <Layout>
      <div className="bg-[#17253D] p-9">
        <PageHero
          title="N₂O"
          description="Nitrous oxide, commonly known as laughing gas, nitrous, or nos, is a chemical compound, an oxide of nitrogen with the formula N ₂O. At room temperature, it is a colourless non-flammable gas, and has a slightly sweet scent and taste. At elevated temperatures, nitrous oxide is a powerful oxidiser similar to molecular oxygen ~ Wikipedia"
          type="Emissions Data"
          image={n2oHeroImage}
          color="DF775E"
        />
      </div>
      <div className="flex bg-[#17253D] p-9">
        <div className="w-full">
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <DataTableTabs
                  YearHref="/n2o/yearly"
                  MonthHref="/n2o/monthly"
                  WeekHref=""
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
