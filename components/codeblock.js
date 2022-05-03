import Link from "next/link";

const ExampleLinks = [
  { title: "Glitch", href: "/news" },
  { title: "CodePen", href: "/about" },
  { title: "Other", href: "/about" },
  { title: "Github", href: "/about" },
];

export default function CodeBlock({ data }) {
  return (
    <>
      <div className="">
        <div className="">
          {/* Header section */}
          <div className="">Path</div>
          <div className="">Dropdown</div>
        </div>
        <div className="">
          {/* Code Body */}
          <div className="">Example</div>
          <div className="">Ourput</div>
        </div>
        <div className="">
          {/* Footer */}
          <div className="">button</div>
          <div className="">Maps Other link Sources</div>
        </div>
      </div>
    </>
  );
}
