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

export default function Carbon() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.year && `/api/carbon/${query.year}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Mean</th>
          <th>UNC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.year}</td>
          <td>{data.mean}</td>
          <td>{data.unc}</td>
        </tr>
      </tbody>
    </table>
  );
}
