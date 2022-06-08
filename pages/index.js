import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { useState } from "react";
import Layout from "../components/layout";
import CodeBlock from "../components/codeblock";
import RequestAccess from "../components/request";

import HeroMap from "../public/hero-dot-globe@2x.png";
import StudentsHeroImage from "../public/assets/students@2x.png";
import ResearchersHeroImage from "../public/assets/researchers@2x.png";
import CreatorsHeroImage from "../public/assets/creators@2x.png";
import co2HeroImage from "../public/assets/emissions/co2@2x.png";
import n20HeroImage from "../public/assets/emissions/n20@2x.png";
import sf6HeroImage from "../public/assets/emissions/sf6@2x.png";
import seaLevelHeroImage from "../public/assets/emissions/seaLevels@2x.png";

import SearchIcon from "../public/icons/search-icon.png";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ApiData = [
  {
    name: "co2",
    description: "words",
    href: "/co2",
    heroImage: "/assets/emissions/co2@2x.png",
    ClassName: "p-1 bg-[#101010] font-semibold font-sans uppercase",
  },
  {
    name: "n2o",
    description: "Nitrous Oxide",
    href: "/n2o",
    heroImage: "/assets/emissions/n20@2x.png",
    ClassName: "p-1 bg-[#101010] font-semibold font-sans uppercase",
  },
  {
    name: "sf6",
    description: "Sulfur Hexafluoride",
    href: "/sf6",
    heroImage: "/assets/emissions/sf6@2x.png",
    ClassName: "p-1 bg-[#101010] font-semibold font-sans uppercase",
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
      <div className="relative sm:overflow-hidden bg-[#17253D] ">
        <div className=" absolute inset-x-0 bottom-0" />

        <div className="max-w-screen-xl max-h-fit mx-4 xl:mx-auto pt-14 font-PlayfairDisplay font-bold">
          <div className="flex flex-wrap p-10">
            <div className="w-full md:w-2/3 z-10">
              <div className="text-3xl md:text-6xl leading-tight font-PlayfairDisplay font-bold text-white">
                Earth's data, now<span className="text-[#8ADCFE]">.</span>
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
      </div>
      <div className="bg-[#17253D] text-white p-14">
        <div className="text-3xl font-extrabold">Try it</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        <div className="text-3xl pb-4 font-extrabold">Who is it for?</div>
        <div
          className="w-full 
        md:w-2/3 pb-8"
        >
          Earth API is a public project open to looking for active contributors
          to expand our database of climate information (Link to contact us). We
          use open-source climate data, but make it available in a
          near-real-time API. If you have datasets you think we should add or
          integrate, please reach out!
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-3 sm:gap-x-6 lg:gap-8">
          <div className="aspect-w-2 aspect-h-1  overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <div className="object-center object-cover ">
              <Image
                src={StudentsHeroImage}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>

            <div aria-hidden="true" className="" />
            <div className="p-6 flex items-end">
              <div>
                <div className="font-semibold text-white">
                  <div>
                    <span className="absolute inset-0 text-[#E14B6A]  uppercase font-semibold" />
                    <span className="p-1 bg-black">Students</span>
                  </div>
                </div>
                <div aria-hidden="true" className="mt-1 text-sm text-white">
                  All API routes come with starting examples built to help
                  anyone get started in python or javascript. And soon, our data
                  explorer will allow you to make charts right from earth API.
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-w-2 aspect-h-1  overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <div className="">
              <Image
                src={ResearchersHeroImage}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
            <div aria-hidden="true" className="" />
            <div className="p-6 flex items-end">
              <div>
                <div className="font-semibold text-white">
                  <div>
                    <span className="absolute inset-0 text-[#E14B6A]  uppercase font-semibold" />
                    <span className="p-1 bg-black">Researchers</span>
                  </div>
                </div>
                <div aria-hidden="true" className="mt-1 text-sm text-white">
                  The Earth API is a tool to easily call data from a variety of
                  publicly available databases. For background, figure creation
                  or a quick double-check Earth API provides quick access.
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-w-2 aspect-h-1  overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <div className="object-center object-cover ">
              <Image
                src={CreatorsHeroImage}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
            <div aria-hidden="true" className="" />
            <div className="p-6 flex items-end">
              <div>
                <div className="font-semibold text-white">
                  <div>
                    <span className="absolute inset-0 text-[#E14B6A]  uppercase font-semibold" />
                    <span className="p-1 bg-black">Creators</span>
                  </div>
                </div>
                <div aria-hidden="true" className="mt-1 text-sm text-white">
                  Our API is for the next generation of product creators who are
                  looking to help in the efforts to reduce human-generated
                  emissions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#17253D] text-white p-14">
        <div className="flex flex-row">
          <div className="text-3xl font-extrabold font-LibreFranklin mb-12">
            Explore Data Sets
          </div>

          <div className="flex-1 ">
            {/* <div className="flex items-center my-4 p-[6px] bg-[#111826] rounded-md">
              <div className="px-[9px] py-[9px]">
                <Image src={SearchIcon} alt="Search Icon" />
              </div>
              <input
                aria-label="Search"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder=""
                className="mx-4 block w-full text-white bg-[#111826] dark:text-gray-100"
              />
              <button className="bg-[#2d82b8] text-white rounded-md px-[9px] py-[9px]">
                Search
              </button>
            </div> */}
          </div>
        </div>
        <hr className="py-4" />
        {!emissionsData.length && "No Data Found."}

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-3 sm:gap-x-6 lg:gap-8">
          {emissionsData.map((ApiData, i) => {
            const { name, description, href, heroImage, ClassName } = ApiData;
            return (
              <div
                key={i}
                className="aspect-w-2 aspect-h-1  overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2"
              >
                <div className="object-center object-cover ">
                  <Image
                    src={heroImage}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </div>

                <div className="p-6 flex items-end">
                  <div>
                    <div className="font-semibold text-white">
                      <div>
                        <span className="absolute inset-0 text-[#E14B6A]  uppercase font-semibold" />
                        <span className="p-1 bg-black">{name}</span>
                      </div>
                    </div>
                    <div aria-hidden="true" className="mt-1 text-sm text-white">
                      {description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <RequestAccess />
      <div className="bg-[#17253D] text-white p-14">
        <div className="border-t-[1px] border-[#353f50] mb-12"></div>
        <div className="w-full md:w-1/3">
          <div className="text-3xl font-extrabold font-LibreFranklin mb-12">
            One Open Source of Truth for Environmental Data
          </div>

          <div className="mb-12">
            Anthropogenic is proud to offer and support earth.api. We believe
            that the data available here impacts every living thing, and should
            be shared and expanded for the greater good of humanity. We’re all
            in this together and should have equal access to the data and
            information that can help drive us towards a brighter and more
            sustainable future.
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
