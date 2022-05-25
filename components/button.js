import Link from "next/link";

export default function Button({ text, link, color, type, customClass }) {
  return (
    <>
      <div className="">
        <Link href={link}>
          <a>{text}</a>
        </Link>
      </div>
    </>
  );
}
