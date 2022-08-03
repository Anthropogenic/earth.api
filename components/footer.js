import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import AnthropogenicLogo from "../public/AnthropogenicLogo.webp";
import CCLogo from "../public/ccLogo.png";

const FooterLinks = [
  {
    title: "Data Sources",
    links: [
      {
        name: "CO₂ Data",
        href: "https://github.com/Anthropogenic/earth.api/tree/main/data",
        fathomEventCode: "",
      },
      {
        name: "N₂0 Data",
        href: "https://github.com/Anthropogenic/earth.api/tree/main/data",
        fathomEventCode: "",
      },
      {
        name: "SF₆ Data",
        href: "https://github.com/Anthropogenic/earth.api/tree/main/data",
        fathomEventCode: "",
      },
      {
        name: "CH₄ Data",
        href: "https://github.com/Anthropogenic/earth.api/tree/main/data",
        fathomEventCode: "",
      },
    ],
  },
  {
    title: "Open Source",
    links: [
      {
        name: "Contribute",
        href: "https://github.com/Anthropogenic/earth.api",
        fathomEventCode: "",
      },
      {
        name: "Github",
        href: "https://github.com/Anthropogenic/earth.api",
        fathomEventCode: "",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "Blog",
        href: "https://blog.anthropogenic.com",
        fathomEventCode: "",
      },
      {
        name: "Analytics",
        href: "https://app.usefathom.com/share/cysaygvg/earth+api",
        fathomEventCode: "",
      },
      {
        name: "Status",
        href: "https://status.hge.earth",
        fathomEventCode: "",
      },
    ],
  },
];
export default function Footer({ preview, children }) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-wrap bg-[#17253D] text-white">
        <div className="w-full">
          <div className="flex">
            <div className="flex-1 pl-4"></div>
            <div className="flex-1 pl-4"></div>
            {FooterLinks.map((section, index) => (
              <div
                className="flex-1 border-l-[1px] border-[#353f50] pl-4"
                key={`footer-${index}`}
              >
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

        <div className="w-full">
          <div className="p-14">
            <div className="py-2">
              <Image
                src={AnthropogenicLogo}
                alt="Anthropogenic Logomark"
                width={30}
                height={30}
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
                    width={20}
                    height={20}
                  />
                </a>
              </Link>{" "}
              2022 earth.api
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
