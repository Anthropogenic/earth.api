import Link from "next/link";
import Image from "next/image";

export function PageHero({ title, description, image, type, color }) {
  return (
    <div className="flex text-white">
      <div className="w-full sm:w-1/3">
        <div className={`w-full text-[144px] font-bold `}>
          <span className={`text-[#17253D] bg-[#${color}]`}>{title}</span>
        </div>
        <div className="my-4 p-2 uppercase leading-6 bg-white text-black text-[24px]">
          {type}
        </div>
        <div className="w-full">{description}</div>
      </div>
      <div className={`ml-9 w-full sm:w-2/3 bg-[#${color}]`}>
        Photo Will be imported Here
        {/* <Image src={image} alt={`hero image for `} width={500} height={500} /> */}
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
                  <Link href={data.unc}>
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
