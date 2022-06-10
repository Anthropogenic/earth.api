import Link from "next/link";
import Image from "next/image";

import Co2HeroImage from "../public/assets/emissions/co2@2x.png";

export function PageHero({ title, description, image, type, color }) {
  return (
    <div className="flex text-white">
      <div className="w-full sm:w-1/3">
        <div className={`w-full text-[144px] font-bold bg-[#0f131d] ${color}`}>
          <span className={`text-[#17253D] ${color}`}>{title}</span>
        </div>
        <div className="my-4 p-2 uppercase leading-6 bg-white text-black text-[24px]">
          {type}
        </div>
        <div className="w-full">{description}</div>
      </div>
      <div className={`ml-9 w-full sm:w-2/3  bg-[${color}]`}>
        <Image src={image} alt={`hero image for `} />
      </div>
    </div>
  );
}

export function EmissionsYearly({ data, source }) {
  return (
    <>
      <div className="bg-[#17253D]">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="text-[#96B0BD]">
            <tr>
              <th
                scope="col"
                className="py-3 text-left text-sm font-semibold text-[#96B0BD] uppercase"
              >
                date
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-sm font-semibold text-[#96B0BD] uppercase"
              >
                measurement
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-sm font-semibold text-[#96B0BD] uppercase"
              >
                error
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-sm font-semibold text-[#96B0BD] uppercase"
              >
                Data Source
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-sm font-semibold text-[#96B0BD] uppercase"
              >
                Formats
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((data) => (
              <tr key={data.id}>
                <td className="whitespace-nowrap py-4">{data.date}</td>
                <td className="whitespace-nowrap px-3 py-4">{data.mean}</td>
                <td className="whitespace-nowrap px-3 py-4">{data.unc}</td>
                <td className="whitespace-nowrap px-3 py-4">
                  <Link href="http://www.noaa.gov">
                    <a>NOAA</a>
                  </Link>
                </td>
                <td className="flex whitespace-nowrap px-3 py-4 text-[#3695C4]">
                  <Link href={data.unc}>
                    <a className="">API</a>
                  </Link>
                  <Link href={data.unc}>
                    <a className="">FTP</a>
                  </Link>
                  <Link href={data.id}>
                    <a className="float-right">Details →</a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export function EmissionsSummary({
  image,
  unit,
  date,
  tdate,
  tmean,
  tunc,
  terror,
  tsource,
  apiHref,
}) {
  return (
    <>
      {" "}
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/3 bg-red-500">
          <div className="">
            <div className="h-full w-full object-cover">
              {/* <Image src={Co2HeroImage} alt="Picture of the author" /> */}
            </div>
          </div>
          <div className="z-10 ">
            <span className="my-5 mx-4 px-4 py-1 font-bold bg-black text-[80px] text-[#FFC784]">
              {unit}
              <span className="text-[24px] uppercase">ppm</span>
            </span>
          </div>

          <div className="">
            <span className="bg-[#FFFFFF] text-black font-bold">in {date}</span>
            <div className="">
              {/* ADD: @gndclouds need logic for changing arrow state */}
              Arrow
            </div>
          </div>
          <div className="">Image arrow</div>
          <div className="">Image</div>
        </div>
        <div className="pl-4 w-full sm:w-2/3">
          <table className="w-full">
            <thead>
              <tr className="border-b uppercase font-semibold text-[#96B0BD] text-[18px] leading-6">
                <th className="text-left ">Date</th>
                <th className="text-left ">Mean</th>
                <th className="text-left ">UNC</th>
                <th className="text-left ">Source</th>
              </tr>
            </thead>
            <tbody className="border-b">
              <tr className="">
                <td className="text-left">{tdate}</td>
                <td className="text-left">{tmean}</td>
                <td className="text-left">{tunc}</td>
                <td className="text-left">
                  <Link
                    href="https://www.noaa.gov/"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    <a>NOAA</a>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="">
            <div className="">
              <Link href={apiHref}>
                <a>{apiHref}</a>
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
    </>
  );
}
