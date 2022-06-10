import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const ApiData = [
  {
    name: "co2",
    description: "words",
    href: "/co2",
    heroImage: "/assets/emissions/co2@2x.png",
    ClassName: "text-[#EE8770]",
  },
  {
    name: "n2o",
    description: "Nitrous Oxide",
    href: "/n2o",
    heroImage: "/assets/emissions/n2o@2x.png",
    ClassName: "text-[#4FBC73]",
  },
  {
    name: "sf6",
    description: "Sulfur Hexafluoride",
    href: "/sf6",
    heroImage: "/assets/emissions/sf6@2x.png",
    ClassName: "text-[#77977F]",
  },
];

export default function EmissionsGallery() {
  const [searchValue, setSearchValue] = useState("");

  const emissionsData = ApiData.filter((emissionsData) => {
    const searchContent = emissionsData.name;
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });
  //
  return (
    <>
      <div className="flex flex-wrap ">
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

          {!emissionsData.length &&
            "Opps! We either can't find or don't yet offer that data."}

          <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-3 sm:gap-x-6 lg:gap-8">
            {emissionsData.map((ApiData, i) => {
              const { name, description, href, heroImage, ClassName } = ApiData;
              return (
                <div
                  key={i}
                  className="aspect-w-2 aspect-h-1 overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2"
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
                          <span
                            className={`text-[42px] p-1 bg-[#101010] font-semibold font-sans uppercase ${ClassName}`}
                          >
                            {name}
                          </span>
                        </div>
                      </div>
                      <div
                        aria-hidden="true"
                        className="mt-1  uppercase font-semibold text-sm "
                      >
                        <span className="p-1 bg-[#FFFFFF] text-[#101010]">
                          {description}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
