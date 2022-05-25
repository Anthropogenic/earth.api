import Image from "next/image";
import Layout from "../components/layout";
import SectionContainer from "../components/section-container";
import Button from "../components/button";

import WorldMap from "../public/404Hero.png";

export default function FourZeroFour() {
  return (
    <Layout>
      <div className="h-full w-full object-cover overflow-hidden z-20">
        <Image
          src={WorldMap}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <SectionContainer
        parentClassName="p-14 bg-[#17253D] text-white"
        childClassName=""
      >
        <div className="flex flex-wrap flex-col-reverse sm:flex-row ">
          <div className="w-full sm:w-1/3 z-10">
            <div className="bg-[#E14B6A] sm:bg-[#17253D] py-[12px] px-[50px] sm:p-0 my-8 uppercase items-center ">
              <span className="sm:py-[12px] sm:px-[50px] sm:bg-[#E14B6A] text-[#17253D] font-semibold">
                page not found
              </span>
            </div>

            <div className="font-LibreFranklin text-2xl sm:text-3xl font-extrabold">
              Uh oh, your broke it. The good news is that 404 is a lower number
              than the current co2 ppm (418) in the atmosphere.
            </div>

            <Button
              text="Learn why this matters"
              url="https://hge.earth"
              color="E14B6A"
              className="border-2 border-white font-semibold sm:py-[12px] sm:px-[50px]"
            />
          </div>

          <div className="w-full sm:w-2/3 px-8 z-10 text-[100px] sm:text-[150px] md:text-[200px] lg:text-[300px]">
            <span className="text-[#E14B6A] font-semibold">404</span>
          </div>
        </div>
      </SectionContainer>
    </Layout>
  );
} 

