import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import Layout from "../../components/layout";
import { Button, BreakCrumbButton } from "../../components/button";

import Co2HeroImage from "../../public/emissions/C02.png";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function EmissionsCo2() {
  const { query, asPath, pathname } = useRouter();
  const APIPath = "/api/" + asPath.substring(1);

  const { data, error } = useSWR(
    () => query.id && `/api/co2/${query.id}`,
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
      {/* <YearlyEmissions data="" /> */}
      <div className="font-mono">
        <div className="pb-4 uppercase">
          <BreakCrumbButton text="CO2" href="/" />
        </div>
        {/* FIX: @gndclouds Make this a component */}
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/3 bg-red-500">
            <div className="absolute inset-0">
              <div className="z-0 h-full w-full object-cover">
                {/* <Image src={Co2HeroImage} alt="Picture of the author" /> */}
              </div>
            </div>
            <div className="z-10  ">
              <span className="my-5 mx-4 px-4 py-1 font-bold bg-black text-[80px] text-[#FFC784]">
                {data.mean}
                <span className="text-[24px] uppercase">ppm</span>
              </span>
            </div>

            <div className="">
              <span className="bg-[#FFFFFF] text-black font-bold">
                in {data.date}
              </span>
              <div className="">
                {/* ADD: @gndclouds need logic for changing arrow state */}
                Arrow
              </div>
            </div>
            <div className="">Image arrow</div>
            <div className="">Image</div>
          </div>
          <div className="w-full sm:w-2/3">
            <table className="w-full">
              <thead>
                <tr className="border-b uppercase font-semibold text-[#96B0BD] text-[18px] leading-6">
                  <th className="text-left ">Date</th>
                  <th className="text-left ">Mean</th>
                  <th className="text-left ">UNC</th>
                  <th className="text-left ">Error</th>
                  <th className="text-left ">Source</th>
                </tr>
              </thead>
              <tbody className="border-b">
                <tr className="">
                  <td className="text-left">{data.date}</td>
                  <td className="text-left">{data.mean}</td>
                  <td className="text-left">{data.unc}</td>
                  <td className="text-left">TBD</td>
                  <td className="text-left">NOAA</td>
                </tr>
              </tbody>
            </table>
            <div className="">
              <div className="">
                <Link href={APIPath}>
                  <a>{APIPath}</a>
                </Link>
              </div>

              <div className="">Button</div>
            </div>
            <div className="flex">
              {/* <Button text="Open FTP" link="" color="" type="" customClass />
              <Button text="Download" link="" color="" type="" customClass />
              <Button
                text="Graph"
                link="/explore"
                color=""
                type=""
                customClass
              /> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
