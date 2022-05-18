import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import Layout from "../../components/layout";
import YearlyEmissions from "../../components/emissionsPage";
import Button from "../../components/button";

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
  const { query } = useRouter();
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
          <Link href="/">
            <a className="font-semibold text-[16px] text-[#3695C4]">
              ← ADD Levels
            </a>
          </Link>
        </div>
        {/* FIX: @gndclouds Make this a component */}
        <div className="flex">
          <div className="relative w-full sm:w-1/3 bg-red-500">
            <div className="absolute inset-0">
              <div className="z-0 h-full w-full object-cover">
                <Image src={Co2HeroImage} alt="Picture of the author" />
              </div>
            </div>
            <div className="z-10">
              <span className=" font-bold bg-black text-[80px] text-[#FFC784]">
                {data.mean}
                <span className="text-[24px] uppercase">ppm</span>
              </span>
            </div>
            <div className="absolute inset-0">
              <div className="z-0 h-full w-full object-cover">
                <Image src={Co2HeroImage} alt="Picture of the author" />
              </div>
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
                <tr className="border-b uppercase font-semibold text-[#96B0BD]">
                  <th>Date</th>
                  <th>Mean</th>
                  <th>UNC</th>
                  <th>Error</th>

                  <th>Source</th>
                </tr>
              </thead>
              <tbody className="border-b">
                <tr className="font-font-medium">
                  <td>{data.date}</td>
                  <td>{data.mean}</td>
                  <td>{data.unc}</td>
                </tr>
              </tbody>
            </table>
            <div className="">
              <div className="">Path</div>

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
