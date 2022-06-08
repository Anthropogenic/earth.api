import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import AnthropogenicLogo from "../public/AnthropogenicLogo.webp";
import CCLogo from "../public/ccLogo.png";

const FooterLinks = [
  {
    title: "Data Sources",
    links: [
      { name: "co2 Data", href: "https://github.com/Anthropogenic/earth.api/tree/main/data", fathomEventCode: "" },
      { name: "n20 Data", href: "https://github.com/Anthropogenic/earth.api/tree/main/data", fathomEventCode: "" },
      { name: "sf6 Data", href: "https://github.com/Anthropogenic/earth.api/tree/main/data", fathomEventCode: "" },
      { name: "Sea Level Rise", href: "https://github.com/Anthropogenic/earth.api/tree/main/data", fathomEventCode: "" },
    ],
  },
  {
    title: "Open Source",
    links: [
      { name: "Contribute", href: "/", fathomEventCode: "" },
      { name: "Partner with Us", href: "/", fathomEventCode: "" },
      { name: "Donations", href: "/", fathomEventCode: "" },
      { name: "Github", href: "/", fathomEventCode: "" },
      { name: "Discord Community", href: "/", fathomEventCode: "" },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "Why earth.api",
        href: "/why",
        fathomEventCode: "",
      },
      {
        name: "Anthropogenic",
        href: "https://anthropogenic.com",
        fathomEventCode: "",
      },
      { name: "Scope6", href: "https://scope6.earth", fathomEventCode: "" },
    ],
  },
];

export default function Footer({ preview, children }) {
  return (
    <>
      <div className="flex bg-[#17253D] text-white">
        <div className="flex-1 ">
          <div className="p-14">
            <div className="py-2">
              <Image
                src={AnthropogenicLogo}
                alt="Anthropogenic Logomark"
                width={50}
                height={50}
              />
            </div>

            <div className="w-full py-2 text-[#3695C4]">
              <Link href="/">
                <a className="">
                  <div className="sr-only">
                    Earth API is published under CCC 4.0 Attribution-ShareAlike
                    4.0 International
                  </div>
                  <Image
                    src={CCLogo}
                    alt="Earth API is published under CCC 4.0 Attribution-ShareAlike
                  4.0 International"
                  />
                </a>
              </Link>{" "}
              2022 earth.api
            </div>
          </div>
        </div>
        <div className="flex-none">
          <div className="flex">
            {FooterLinks.map((section, index) => (
              <div className="flex-1 border-l-2 pl-4" key={`footer-${index}`}>
                <div className="font-bold mb-4">{section.title}</div>
                <ul role="list" className="contents ">
                  {section.links.map((link, i) => (
                    <li key={`footer-${i}`}>
                      <Link href={link.href} key={i}>
                        <a className="text-[#3695C4]">{link.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
