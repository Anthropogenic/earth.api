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
      <div className="flex">
        <RequestAccess />
      </div>
    </Layout>
  );
}
