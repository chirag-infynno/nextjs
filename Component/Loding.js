import Image from "next/image";
import React from "react";

export const Loding = () => {
  return (
    <div className="flex flex-col gap-[24px]  w-[100%] animate-pulse">
      {/* {props.cardata?.map((data, index) => ( */}
      <section
        className={`shadow-cardShadow  rounded-[10px]  sm:pb-[0px] xs:pb-[16px] bg-white `}
        // key={index}
      >
        <section className=" ">
          <section className="flex  bg-white sm:flex-row gap-[24px] xs:flex-col  animate-pulse ">
            <div className="bg-slate-700 max-h-[254px] sm:w-[360px]  xs:w-[328px] ">
              <Image
                // src={"/notfind.png"}
                src=""
                width={360}
                height={254}
                className="rounded-tl-[10px] xs:max-w-[200px] sm:max-w-[100px]  cursor-pointer   animate-pulse"
                // alt="page not found"
                onClick={() => router.push(`/${data.vin}`)}
              />
            </div>
            <aside className="flex flex-col py-[24px] sm:justify-between  xs:gap-[10px] xs:pl-[20px]  ">
              <section className=" w-[280px] flex flex-col gap-[3px] ">
                <spna className="text-[#28293D] font-bold sm:text-[20px] leading-[32px] xs:text-[14px]  ">
                  {/* {`${data.year} ${data.make} ${data.model}`} */}
                </spna>
                <spna className="text-[#8F90A6] text-[12px] leading-[16px]">
                  {/* {`${data.dealership} • ${data.milage} Milage • ${data.exterior_color}`} */}
                </spna>
                <spna className="text-[#8F90A6] text-[12px] leading-[16px]">
                  {/* {`${data.city} , ${data.state}`} */}
                </spna>
              </section>
              <section className="flex justify-between  pr-[24px] items-center  sm:w-[500px]   xs:[400px] ">
                <aside className="flex justify-start items-center gap-[8px]">
                  <span className="text-[#28293D] font-bold  sm:text-[28px] leading-[38px]  xs:text-[20px] leading-[30px] ">
                    {/* {`$${data.price.toLocaleString("en-US")}`} */}
                  </span>
                  <Image
                    src="/info.png"
                    height={16}
                    width={16}
                    alt="image not found"
                  />
                </aside>

                <button className="  rounded-[10px] bg-gradient-to-r from-[#FF8800] to-[#E63535] ">
                  <spna className="flex justify-center items-center gap-[2px] py-[6px] px-[16px] text-[14px] leading-[24px] text-white      ">
                    Invite dealer
                    <div className="flex justify-center items-center">
                      <Image
                        src="/arrow.png"
                        width={15}
                        height={24}
                        alt="image not found"
                      />
                    </div>
                  </spna>
                </button>
              </section>
            </aside>
          </section>
        </section>
        <section className=" sm:block  bg-[#FFF8E6] py-[16px] pl-[24px]  rounded-b-[10px] xs: hidden">
          <aside className="flex  items-center gap-[4px]">
            <div className="w-[15px] h-[20px]">
              <Image
                src="/wheel.png"
                width={15}
                height={15}
                alt="image not found"
              />
            </div>

            <spna className="text-[#05A660] text-[12px] leading-[20px] uppercase">
              Special offers
            </spna>
          </aside>
          <aside className="flex gap-[16px] sm:flex-row xs:flex-col ">
            <span className="text-[14px] leading-[24px]">
              • 100% credit approval guaranteed
            </span>
            <span className="text-[14px] leading-[24px]">
              • Complimentary 101pt safety check
            </span>
          </aside>
        </section>
      </section>
      {/* ))} */}
    </div>
  );
};
