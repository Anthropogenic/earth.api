import Link from "next/link";

export default function Monthly({ data }) {
  return (
    <>
      {data.map((data, index) => (
        <tr key={data.year + data.month}>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            {data.data.year}-{data.data.month}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
        </tr>
      ))}
    </>
  );
}
