import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { SITE_NAME } from "../lib/constants";

import SiteLogo from "../public/EarthApiLogo.png";

const NavigationLinks = [
  { title: "try", href: "/try" },
  { title: "data", href: "/data" },
  { title: "contribute", href: "/contribute" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  return (
    <>
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bg-[#17253D]">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <div className="invisible sm:visible absolute w-[40px]">
                      <Image src={SiteLogo} alt="Earth API Logo" />
                    </div>
                    <div className=" sm:block sm:ml-6">
                      <div className="flex space-x-4">
                        <Link href="/">
                          <a className="ml-8 text-2xl sm:text-xl relative py-2 font-bold text-white">
                            {SITE_NAME}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex  items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {NavigationLinks.map((item, index) => (
                        <Link href={item.href} key={index}>
                          <a className=" px-3 py-2 rounded-md text-sm font-medium font-sans text-base text-white">
                            {item.title}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-[#17253D]">
                {NavigationLinks.map((item, index) => (
                  <Disclosure.Button
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 font-sans text-base text-white"
                  >
                    <Link href={item.href} key={index}>
                      <a className="font-sans text-base hover:text-white">
                        {item.title}
                      </a>
                    </Link>
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
