import Link from "next/link";

export function Button({ text, link, color, type, customClass }) {
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
