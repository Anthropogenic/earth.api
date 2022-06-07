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

export function BreakCrumbButton({ text, href }) {
  return (
    <>
      <div className="font-semibold text-[16px] text-[#3695C4]">
        <Link href={href}>
          <a>← {text} Data</a>
        </Link>
      </div>
    </>
  );
}
