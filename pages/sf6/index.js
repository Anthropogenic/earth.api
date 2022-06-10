import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import Layout from "../../components/layout";
import RequestAccess from "../../components/request";
import { PageHero, EmissionsYearly } from "../../components/emissionsPage";
import DataTableTabs from "../../components/tables";

import sf6HeroImage from "../../public/assets/emissions/sf6Banner.png";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/sf6/yearly", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="bg-[#17253D] p-9">
        <PageHero
          title="SF₆"
          description="Sulfur hexafluoride or sulphur hexafluoride is an extremely potent and persistent greenhouse gas that is primarily utilized as an electrical insulator and arc suppressant. ~ Wikipedia"
          type="Emissions Data"
          image={sf6HeroImage}
          color="bg-[#77977F]"
        />
      </div>
      <div className="flex">
        <RequestAccess />
      </div>
    </Layout>
  );
}
