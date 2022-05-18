import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import Select from "react-select";

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
const actions = [
  { label: "Add", value: 1 },
  { label: "Edit", value: 2 },
  { label: "Delete", value: 3 },
];

export default function CodeBlock({ data }) {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="col-md-4">
        <Select options={actions} onChange={setValue} />
      </div>
      <div className="col-md-4">{setValue.value}</div>
    </>
  );
}
