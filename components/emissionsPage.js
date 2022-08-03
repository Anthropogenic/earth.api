import Link from "next/link";
import Image from "next/image";

export function PageHero({ title, description, image, type, color }) {
  return (
    <div className="flex text-white">
      <div className="w-full sm:w-1/3">
        <div className={`w-full text-[144px] font-bold  ${color}`}>
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

export function EmissionsTable({ data, source, apiHref, ftpHref, childHref }) {
  return (
    <>
      <div className="bg-[#17253D]">
        <table className="w-full divide-y divide-gray-300">
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
                unc
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
                <td className="whitespace-nowrap py-4">
                  {data.year && <span>{data.year}</span>}
                  {data.month && <span>.{data.month}</span>}
                  {data.day && <span>.{data.day}</span>}
                </td>
                <td className="whitespace-nowrap px-3 py-4">
                  {data.measurement}
                </td>
                {data.unc && (
                  <td className="whitespace-nowrap px-3 py-4">{data.unc}</td>
                )}

                <td className="whitespace-nowrap px-3 py-4">
                  <Link href="http://www.noaa.gov">
                    <a>NOAA</a>
                  </Link>
                </td>
                <td className="flex justify-between px-3 py-4 text-[#3695C4]">
                  <Link href={"/api/" + apiHref + "/" + data.id}>
                    <a className="invisible sm:visible">API</a>
                  </Link>
                  <Link href={ftpHref}>
                    <a className="invisible sm:visible">FTP</a>
                  </Link>
                  <Link href={"/" + childHref + "/" + data.id}>
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
  measurement,
  unit,
  date,
  tdate,
  tmean,
  tunc,
  ttrendunc,
  terror,
  tsource,
  apiHref,
}) {
  return (
    <>
      {" "}
      <div className="mt-6 mb-6 grid grid-cols-1 gap-y-3 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-3 lg:gap-8">
        <div className="aspect-w-2 aspect-h-1 overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
          <div className="object-center object-cover ">
            <Image
              src={image}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>

          <div className="p-6 flex items-end">
            <div>
              <div className="font-semibold text-white">
                <div>
                  <span className="absolute inset-0 text-[#E14B6A] uppercase font-semibold" />
                  <span
                    className={`text-[42px] p-1 font-semibold font-sans uppercase`}
                  >
                    <span className="my-8 mx-3 px-4 py-1 font-bold bg-black text-[48px] text-[#FFC784]">
                      {measurement}
                      <span className=" text-[24px] uppercase">{unit}</span>
                    </span>
                  </span>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="mt-1  uppercase font-semibold text-sm "
              >
                <span className="my-8 mx-3 px-4 py-1 bg-[#FFFFFF] text-[#101010]">
                  in {date}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden col-span-2">
          <table className="w-full">
            <thead>
              <tr className="border-b uppercase font-semibold text-[#96B0BD] text-[18px] leading-6">
                {tdate && <th className="text-left ">Date</th>}
                {tmean && <th className="text-left ">Trend</th>}
                {tunc && <th className="text-left ">UNC</th>}
                {ttrendunc && <th className="text-left ">Trend UNC</th>}

                <th className="text-left ">Source</th>
              </tr>
            </thead>
            <tbody className="border-b">
              <tr className="">
                {tdate && <td className="text-left">{tdate}</td>}
                {tmean && <td className="text-left">{tmean}</td>}
                {tunc && <td className="text-left">{tunc}</td>}
                {ttrendunc && <td className="text-left">{ttrendunc}</td>}
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
          <div className="mt-4 bg-[#000000] rounded">
            <div className="px-4 py-4">
              <Link href={apiHref}>
                <a>{apiHref}</a>
              </Link>
            </div>
            {/* <div>
              <Button text="Open FTP" link="" color="" type="" customClass="" />
              <Button text="Download" link="" color="" type="" customClass="" />

              <Button text="Graph" link="" color="" type="" customClass="" />
            </div> */}

            {/* <div className="">Button</div> */}
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
