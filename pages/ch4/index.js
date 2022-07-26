import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import Layout from "../../components/layout";
import RequestAccess from "../../components/request";
import { PageHero, EmissionsTable } from "../../components/emissionsPage";
import DataTableTabs from "../../components/tables";

import Co2HeroImage from "../../public/assets/emissions/co2Banner.png";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/ch4/monthly", fetcher);
  const { asPath } = useRouter();
  const DataRouteURL = asPath.substring(1);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="bg-[#17253D] p-9">
        <PageHero
          title="CH₄"
          description="Methane is a chemical compound with the chemical formula CH₄. It is a group-14 hydride, the simplest alkane, and the main constituent of natural gas. The relative abundance of methane on Earth makes it an economically attractive fuel, although capturing and storing it poses technical challenges due to its gaseous state under normal conditions for temperature and pressure. ~ Wikipedia"
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
