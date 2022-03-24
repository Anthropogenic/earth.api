import Link from "next/link";

export default function Carbon({ carbon }) {
  return (
    <li>
      <Link href="/carbon/[id]" as={`/carbon/${carbon.year}`}>
        <a>{carbon.year}</a>
      </Link>
    </li>
  );
}
