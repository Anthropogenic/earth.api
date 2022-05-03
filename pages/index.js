import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import Layout from "../components/layout";
import CodeBlock from "../components/codeblock";

import StudentsHeroImage from "../public/students.png";
import ResearchersHeroImage from "../public/researchers.png";
import CreatorsHeroImage from "../public/creators.png";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  return (
    <Layout>
      <div className="relative sm:overflow-hidden bg-[#17253D]">
        <div className=" absolute inset-x-0 bottom-0" />

        <div className="max-w-screen-xl max-h-fit mx-4 xl:mx-auto pt-14 font-PlayfairDisplay font-bold">
          <div className="flex flex-wrap p-14">
            <div className="w-full sm:w-2/3 z-10">
              <div className="text-3xl md:text-6xl leading-tight font-PlayfairDisplay font-bold text-white">
                Earth's digital twin.
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
          {/* <Image
            src={WorldMap}
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            quality={100}
          /> */}
        </div>
      </div>

      <div className="bg-[#17253D] text-white p-14">
        <div className="text-3xl">Try it</div>
        <div className="grid grid-cols-3 gap-4">
          <div className="">
            To capture the greenhouse gases, we are starting data on ch4, co2,
            n20, and sf6 sourced from the National Oceanic and Atmospheric
            Administration, or NOAA (?). You can query the data at yearly and
            monthly intervals. (select different emissions from the dropdown to
            see example data sets). <br />
            <br />
            See the{" "}
            <Link href="/docs">
              <a className="text-[#3695C4] hover:underline">docs</a>
            </Link>
            .
          </div>
          <div className="col-span-2">
            <CodeBlock />
          </div>
        </div>
      </div>
      <div className="bg-[#17253D] text-white p-14 ">
        <div className="text-3xl pb-4">Who is it for?</div>
        <div className="w-2/3 pb-8">
          Earth API is a public project open to looking for active contributors
          to expand our database of climate information (Link to contact us). We
          use open-source climate data, but make it available in a
          near-real-time API. If you have datasets you think we should add or
          integrate, please reach out!
        </div>

        <div className="grid grid-cols-3 gap-4 bg-[#17253D]">
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
        <div className="text-3xl">Get it touch.</div>

        <div className="">
          We want to make our API as accessible as possible. We are building a
          data explorer so anyone, regardless of their coding experience, can
          create charts and graphics they need. The Explorer is in a closed
          Alpha for now, but you can sign up below to get early access.
        </div>
      </div>

      <div className="bg-[#17253D] text-white p-14">
        <div className="text-3xl">Built by Anthropogenic</div>

        <div className="">
          We want to make our API as accessible as possible. We are building
          data explorer so anyone, regardless of their coding experience, can
          create charts and graphics they need. The Explorer is in a closed
          Alpha for now, but you can sign up below to get early access.
        </div>
      </div>
    </Layout>
  );
}
