import useSWR from "swr";
import Carbon from "../../components/carbon";
import Person from "../../components/Person";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/carbon", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((p, i) => (
        <Carbon key={i} carbon={p} />
      ))}
    </ul>
  );
}
