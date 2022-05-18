import Link from "next/link";

export default function EmissionsYearly({ data, source }) {
  // const yearlySource = data[0].source[0];
  // const yearlyData = data[1].data[0];
  // console.log("Yearly Source", yearlySource);
  // console.log("Yearly Data", yearlyData);

  return (
    <>
      <div className="bg-[#17253D]">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="text-[#96B0BD]">
            <tr>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 uppercase"
              >
                date
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 uppercase"
              >
                measurement
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 uppercase"
              >
                error
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 uppercase"
              >
                Data Source
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 uppercase"
              >
                Sources
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data.map((data) => (
              <tr key={data.id}>
                <td className="whitespace-nowrap py-4 pl-4">{data.date}</td>
                <td className="whitespace-nowrap px-3 py-4">{data.mean}</td>
                <td className="whitespace-nowrap px-3 py-4">{data.unc}</td>
                <td className="whitespace-nowrap px-3 py-4">{data.unc}</td>
                <td className="whitespace-nowrap px-3 py-4">{data.unc}</td>
                <td className="whitespace-nowrap px-3 py-4">
                  <Link href={data.unc}>
                    <a>{data.unc}</a>
                  </Link>
                  <Link href={data.unc}>
                    <a>{data.unc}</a>
                  </Link>
                  <Link href={data.unc}>
                    <a>{data.unc}</a>
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
