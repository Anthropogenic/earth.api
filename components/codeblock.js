import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Highlight from "react-highlight";
import Select from "react-select";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

import GlitchLogo from "../public/GlitchLogo.png";
import CodeSandboxLogo from "../public/CodeSandboxLogo.png";
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
];

export default function CodeBlock() {
  const text =
    "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <>
      <div className="col-md-4 bg-[#111E35] border-2 border-[#111E35] rounded-lg">
        <div className="border-b-2 border-[#111E35]">
          <div className="flex flex-wrap relative font-medium">
            <div className="p-4">/api/co2/2002</div>
            <div className="m-2 p-2 border-2 border-[#585f6e] rounded uppercase absolute right-0">
              co<sub>2</sub>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap border-2 border-[#17253D]">
          <div className="w-full sm:w-1/2">
            <pre>code</pre>
          </div>
          <div className="w-full sm:w-1/2">
            <pre>code code code</pre>
            <pre>code code code</pre>
            <pre>code code code</pre>
            <pre>code code code</pre>
            <pre>code code code</pre>
            <pre>code code code</pre>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="m-2 p-2 bg-[#3695C4] rounded">
            <button
              onClick={() => {
                navigator.clipboard.writeText(text);
              }}
            >
              Copy to Clipboard
            </button>
          </div>
          <div className="">
            <div className="flex flex-wrap">
              <Link href="https://glitch.com/@anthropogenic/earth-api-examples">
                <a className="w-4">
                  <Image src={GlitchLogo} alt="Glitch Example Code" />
                </a>
              </Link>
              <Link href="/blog/hello-world">
                <a className="w-4">
                  <Image src={CodeSandboxLogo} alt="Picture of the author" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
