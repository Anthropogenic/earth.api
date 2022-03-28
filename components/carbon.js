import Link from "next/link";

export default function Carbon({ carbon }) {
  return (
    <>
      {carbon.map((carbon) => (
        <tr key={carbon.id}>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            {carbon.year}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {carbon.mean}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {carbon.unc}
          </td>
        </tr>
      ))}
    </>
  );
}
