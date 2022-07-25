import { useRouter } from "next/router";
import useSWR from "swr";
import Layout from "../../components/layout";
import RequestAccess from "../../components/request";
import { PageHero, EmissionsTable } from "../../components/emissionsPage";
import DataTableTabs from "../../components/tables";

import n2oHeroImage from "../../public/assets/emissions/n2oBanner.png";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/sf6/monthly", fetcher);
  const { asPath } = useRouter();
  const DataRouteURL = asPath.substring(1);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="bg-[#17253D] p-9">
        <PageHero
          title="n2o"
          description="Small description about the data we are collecting for n2o etc.. this should probably be just one or two lines long."
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
