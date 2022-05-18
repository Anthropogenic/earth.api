import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { useState } from "react";

import Layout from "../components/layout";
import CodeBlock from "../components/codeblock";

import HeroMap from "../public/hero-dot-globe@2x.png";
import StudentsHeroImage from "../public/students.png";
import ResearchersHeroImage from "../public/researchers.png";
import CreatorsHeroImage from "../public/creators.png";
import SearchIcon from "../public/icons/search-icon.png";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ApiData = [
  {
    name: "co2",
    description: "words",
    href: "/co2",
    heroImage: "",
    ClassName: "",
  },
  {
    name: "n2o",
    description: "Nitrous Oxide",
    href: "/n2o",
    heroImage: "",
    ClassName: "",
  },
  {
    name: "sf6",
    description: "Sulfur Hexafluoride",
    href: "/sf6",
    heroImage: "",
    ClassName: "",
  },
  {
    name: "Sea Levels",
    description: "Water",
    href: "/sea-levels",
    heroImage: "",
    ClassName: "",
  },
];

export default function Index() {
  const [searchValue, setSearchValue] = useState("");

  const emissionsData = ApiData.filter((emissionsData) => {
    const searchContent = emissionsData.name;
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });
  return (
    <Layout>
      <div className="relative sm:overflow-hidden bg-[#17253D]">
        <div className=" absolute inset-x-0 bottom-0" />

        <div className="max-w-screen-xl max-h-fit mx-4 xl:mx-auto pt-14 font-PlayfairDisplay font-bold">
          <div className="flex flex-wrap p-10">
            <div className="w-full sm:w-2/3 z-10">
              <div className="text-3xl md:text-6xl leading-tight font-PlayfairDisplay font-bold text-white">
                Earth's data, now.
              </div>
              <div className="font-sans text-base font-2xl text-white py-9">
                As a part of the web of life, Everything humans do affect the
                ecosystems around us. And with many of the earth's life support
                systems at tipping points/changing rapidly, there is a need for
                greater accessibility and modernization of how we use climate
                data and what we are building and researching.
              </div>
            </div>
          </div>
        </div>

        <div className="h-full w-full object-cover overflow-hidden z-20 ">
          <Image
            src={HeroMap}
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        {/* 
          Pulsing dots code goes here
          <span class="flex left-0 top-0 h-16 w-16">
          <span class="animate-ping inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span class=" inline-flex rounded-full h-16 w-16 bg-sky-500"></span>
        </span>
        <span class="flex left-0 top-0 h-16 w-16">
          <span class="animate-ping inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span class=" inline-flex rounded-full h-16 w-16 bg-sky-500"></span>
        </span>
        <span class="flex left-0 top-0 h-16 w-16">
          <span class="animate-ping inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span class=" inline-flex rounded-full h-16 w-16 bg-sky-500"></span>
        </span>
        <span class="flex left-0 top-0 h-16 w-16">
          <span class="-ping inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-16 w-16 bg-sky-500"></span>
        </span> */}
      </div>
      <div className="bg-[#17253D] text-white p-14">
        <div className="text-3xl ">Try it</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="">
            To capture the greenhouse gases, we are starting data on ch4, co2,
            n20, and sf6 sourced from the National Oceanic and Atmospheric
            Administration, or NOAA (?). You can query the data at yearly and
            monthly intervals. (select different emissions from the dropdown to
            see example data sets). <br />
            <br />
            <Link href="/docs">
              <a className="text-[#3695C4] hover:underline">
                → See the Documentation
              </a>
            </Link>
          </div>
          <div className="col-span-2">
            <CodeBlock />
          </div>
        </div>
      </div>
      <div className="bg-[#17253D] text-white p-14 ">
        <div className="text-3xl pb-4">Who is it for?</div>
        <div
          className="w-full 
        sm:w-2/3 pb-8"
        >
          Earth API is a public project open to looking for active contributors
          to expand our database of climate information (Link to contact us). We
          use open-source climate data, but make it available in a
          near-real-time API. If you have datasets you think we should add or
          integrate, please reach out!
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#17253D]">
          <div className="">
            <div className="">
              <Image
                src={StudentsHeroImage}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
            <div className="bg-black text-[#3695C4] p-1 uppercase font-semibold">
              Students
            </div>
            <div className="text-white text-sm">
              All API routes come with starting examples built to help anyone
              get started in python or javascript. And soon, our data explorer
              will allow you to make charts right from earth API.
            </div>
          </div>

          <div className="">
            <div className="">
              <Image
                src={ResearchersHeroImage}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
            <div className="bg-black text-[#E14B6A] p-1 uppercase font-semibold">
              Researchers
            </div>
            <div className="text-white text-sm">
              The Earth API is a tool to easily call data from a variety of
              publically available databases. For background, figure creation or
              a quick double-check Earth API provides quick access.
            </div>
          </div>

          <div className="">
            <div className="">
              <Image
                src={CreatorsHeroImage}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
            <div className="bg-black text-[#E14B6A] p-1 uppercase font-semibold">
              Creators
            </div>
            <div className="text-white text-sm">
              Our API is for the next generation of product creators who are
              looking to help in the efforts to reduce human-generated
              emissions.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#17253D] text-white p-14">
        <div className="flex flex-row">
          <div className="flex-1">tabs</div>
          <div className="flex-1">
            <div className="flex ml-4 my-4 p-[6px] bg-[#111826] rounded-md">
              <div className="">
                <Image src={SearchIcon} alt="Search Icon" />
              </div>

              <input
                aria-label="Search"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder=""
                className="mx-4 block w-full  text-gray-900 bg-white border  rounded-md  dark:text-gray-100"
              />
              <button className="bg-[#2d82b8] text-white rounded-md px-[5px] py-[5px]">
                Search
              </button>
            </div>
          </div>
        </div>
        <hr />
        {!emissionsData.length && "No Data Found."}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          {emissionsData.map((ApiData, i) => {
            const { name, description, href, heroImage, ClassName } = ApiData;
            return (
              <div key={i} className="block py-5">
                <div className="block my-1">
                  <Link as={`${href}`} href="[href]" key={i}>
                    <a className="underline text-lg font-semibold">
                      <div className="object-cover pointer-events-none group-hover:opacity-75">
                        {/* <Image
                          src={heroImage}
                          alt={`Image of ${name}`}
                          width={500}
                          height={500}
                        /> */}
                        image
                      </div>

                      <div className={`${href}`}>{name}</div>
                      <div className="">{description}</div>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <hr />

        {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ApiData.map((data, index) => (
            <div
              key={data.index}
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <div className="">{data.name}</div>
              <div className="">{data.description}</div>
            </div>
          ))}
        </div> */}
      </div>
      <div className="bg-[#17253D] text-white flex p-14">
        <div className="w-full w-1/3">
          <div className="text-3xl border-t-2">Get it touch.</div>

          <div className="">
            We want to make our API as accessible as possible. We are building a
            data explorer so anyone, regardless of their coding experience, can
            create charts and graphics they need. The Explorer is in a closed
            Alpha for now, but you can sign up below to get early access.
          </div>
        </div>
        <div className="w-full w-2/3">
          <form
            action="https://getform.io/f/f4781e33-14fa-4329-9af5-3504aaf5bc5b"
            method="POST"
          >
            <br />
            <label className="text-base font-capitalize text-white py-9">
              Email Address
            </label>
            <input
              className="py-2 px-2 block w-full shadow-sm focus:ring-slate-500 focus:border-slate-500 border-gray-300 "
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
            />
            <br />

            <label className="text-base font-capitalize text-white py-9">
              Purpose
            </label>

            <select
              className=" mt-2 block w-full py-2 px-2 text-base focus:ring-slate-500 focus:border-slate-500 border-gray-300 "
              name="purpose"
              id="purpose"
            >
              <option value="Select one" required>
                Why are you interested?
              </option>
              <option value="Investor">Contrinuting Code</option>
              <option value="Partner">Community Mand</option>
              <option value="Customer">Adding Data Sources</option>
              <option value="Other">Other</option>
            </select>

            <button
              className="items-end mt-4 p-2 right-0 text-white border-white border-2 hover:text-[#202020] hover:bg-white"
              type="submit"
              onClick=""
            >
              Submit →
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[#17253D] text-white p-14">
        <div className="w-full w-1/3">
          <div className="text-3xl border-t-2">Built by Anthropogenic</div>

          <div className="">
            We want to make our API as accessible as possible. We are building
            data explorer so anyone, regardless of their coding experience, can
            create charts and graphics they need. The Explorer is in a closed
            Alpha for now, but you can sign up below to get early access.
          </div>
        </div>
      </div>
    </Layout>
  );
}

{
  /* export async function getStaticProps() {
  const allPosts = getAllPosts([
  "title",
  "date",
  "slug",
  "author",
  "coverImage",
  "excerpt",
  ]);

  return {
  props: { allPosts },
  };
} */
}
