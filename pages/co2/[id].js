import { useRouter } from "next/router";
import useSWR from "swr";

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

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <table className="text-center mx-auto w-64">
      <thead>
        <tr>
          <th>Date</th>
          <th>Mean</th>
          <th>UNC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.date}</td>
          <td>{data.mean}</td>
          <td>{data.unc}</td>
        </tr>
      </tbody>
    </table>
  );
}
