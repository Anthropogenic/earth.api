import { useRouter } from "next/router";
import Layout from "../../components/layout";
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
    </Layout>
  );
}
