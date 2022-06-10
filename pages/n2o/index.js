import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import Layout from "../../components/layout";
import RequestAccess from "../../components/request";
import { PageHero, EmissionsYearly } from "../../components/emissionsPage";
import DataTableTabs from "../../components/tables";

import n2oHeroImage from "../../public/assets/emissions/n2oBanner.png";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/n2o/yearly", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="bg-[#17253D] p-9">
        <PageHero
          title="N₂O"
          description="Nitrous oxide, commonly known as laughing gas, nitrous, or nos, is a chemical compound, an oxide of nitrogen with the formula N₂O. ~ Wikipedia"
          type="Emissions Data"
          image={n2oHeroImage}
          color="bg-[#4FBC73]"
        />
      </div>
      <div className="flex bg-[#17253D] p-9">
        <div className="w-full">
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <EmissionsYearly
                    key={data}
                    data={data}
                    source={data.source}
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
