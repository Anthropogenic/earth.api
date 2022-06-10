import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import Layout from "../../components/layout";
import RequestAccess from "../../components/request";
import { PageHero, EmissionsYearly } from "../../components/emissionsPage";
import DataTableTabs from "../../components/tables";

import Co2HeroImage from "../../public/assets/emissions/co2Banner.png";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/co2/yearly", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

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

      <div className="flex">
        <RequestAccess />
      </div>
    </Layout>
  );
}
