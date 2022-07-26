import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import Layout from "../../components/layout";
import { Button, BreakCrumbButton } from "../../components/button";
import { EmissionsSummary } from "../../components/emissionsPage";

import co2HeroImage from "../../public/assets/emissions/co2@2x.png";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function EmissionsCh4() {
  const { query, asPath, pathname } = useRouter();
  const APIPath = "/api/" + asPath.substring(1);

  const { data, error } = useSWR(
    () => query.id && `/api/ch4/${query.id}`,
    fetcher
  );

  if (error) return <Layout>{error.message}</Layout>;
  if (!data)
    return (
      <Layout>
        <button type="button" className="bg-indigo-500 ..." disabled>
          <svg
            className="animate-spin h-5 w-5 mr-3 ..."
            viewBox="0 0 24 24"
          ></svg>
          Loading...
        </button>
      </Layout>
    );

  return (
    <Layout>
      <div className="font-mono">
        <div className="pb-4 uppercase">
          <BreakCrumbButton text="CH₄" href="/ch4" />
        </div>
        {/* FIX: @gndclouds Make this a component */}

        <EmissionsSummary
          image={co2HeroImage}
          measurement={data.measurement}
          unit={data.unit}
          date={data.year + "-" + data.month}
          tdate={data.year + "-" + data.month}
          tmean={data.mean}
          tunc={data.unc}
          terror="tbd"
          tsource="NOAA"
          apiHref={APIPath}
        />
      </div>
    </Layout>
  );
}
