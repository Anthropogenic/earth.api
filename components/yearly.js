import Link from "next/link";

export default function Yearly({ data, source }) {
  console.log(source);
  console.log(data);

  return (
    <>
      <div>{source}</div>
      {data.map((data) => (
        <tr key={data.id}>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            {data.date}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {data.mean}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {data.unc}
          </td>
        </tr>
      ))}
    </>
  );
}
