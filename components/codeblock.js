import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

import GlitchLogo from "../public/GlitchLogo.png";
import CodePenLogo from "../public/CodepenLogo.png";
import OtherLogo from "../public/UnknownLogo.png";
import GitHubLogo from "../public/GitHubLogo.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ExampleLinks = [
  { title: "Glitch", href: "/news" },
  { title: "CodePen", href: "/about" },
  { title: "Other", href: "/about" },
  { title: "Github", href: "/about" },
];

{
  /* Make into nested Array to link dropdown action to the links */
}

const ExamplesToggleData = [
  {
    title: "ch4",
    state: "inactive",
    demoLinks: [
      { title: "Glitch", href: "/" },
      { title: "CodePen", href: "/" },
      { title: "Other", href: "/" },
      { title: "Github", href: "/" },
    ],
    input: "This is the input",
    output: "This is the output",
  },
  {
    title: "co2",
    state: "active",
    demoLinks: [
      { title: "Glitch", href: "/" },
      { title: "CodePen", href: "/" },
      { title: "Other", href: "/" },
      { title: "Github", href: "/" },
    ],
    input: "This is the input",
    output: "This is the output",
  },
  {
    title: "n2o",
    state: "inactive",
    demoLinks: [
      { title: "Glitch", href: "/" },
      { title: "CodePen", href: "/" },
      { title: "Other", href: "/" },
      { title: "Github", href: "/" },
    ],
    input: "This is the input",
    output: "This is the output",
  },
  {
    title: "sf6",
    state: "inactive",
    demoLinks: [
      { title: "Glitch", href: "/" },
      { title: "CodePen", href: "/" },
      { title: "Other", href: "/" },
      { title: "Github", href: "/" },
    ],
    input: "This is the input",
    output: "This is the output",
  },
];

export default function CodeBlock({ data }) {
  return (
    <>
      <div className="bg-[#111E35] border rounded border-[#17253D] text-white w-full">
        <div className="flex border-[#17253D]">
          {/* Header section */}
          <div className="">Path</div>
          <div className="">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                  Options
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {ExamplesToggleData.map((item, index) => (
                    <div className="py-1" key={item.name}>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            {item.title}
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <div className="flex border-[#17253D]">
          {/* Code Body */}
          <div className="">Example</div>
          <div className="">Ourput</div>
        </div>
        <div className="flex">
          {/* Footer */}
          <div className="bg-[#3695C4] rounded">button</div>
          {ExampleLinks.map((item, index) => (
            <Link href={item.href} key={index}>
              <a>
                <Image
                  src={GlitchLogo}
                  alt="Picture of the author"
                  width={50}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
