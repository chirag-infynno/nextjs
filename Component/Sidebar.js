import Image from "next/image";
import React, { useEffect, useState } from "react";

export function Sidebar() {
  const [width, setWidth] = useState("");
  // console.log("chihi", window.);
  useEffect(() => {
    console.log(window.screen.availWidth);
    setWidth(window.screen.availWidth);
  }, [width]);
  return (
    <>
      <section className={`shadow-cardShadow  rounded-[10px] mb-[20px]  `}>
        <section className="sm: max-w-[970px] ">
          <section className="flex  sm:flex-row gap-[24px] xs:flex-col  gap-[24px">
            <div className="sm:w-[360px] max-h-[254px] xs:w-[328px]">
              <Image
                src="https://content.homenetiol.com/2002363/2164272/0x0/f29f1b330b2c4236ab86552597467fb8.jpg"
                width={360}
                height={254}
                className="rounded-tl-[10px] xs:max-w-[200px] sm:max-w-[100px]  "
              />
            </div>
            <aside className="flex flex-col sm:gap-[96px] xs:gap-[10px] xs:pl-[20px] sm:pl-[0px]">
              <section className=" w-[280px] flex flex-col gap-[3px] sm:mt-[24px]">
                <spna className="text-[#28293D] font-bold sm:text-[20px] leading-[32px] xs:text-[14px]  ">
                  2022 Ford F-250 Super Duty
                </spna>{" "}
                <spna className="text-[#8F90A6] text-[12px] leading-[16px]">
                  Covert Buick GMC • 3,518 Mileage • Black
                </spna>
                <spna className="text-[#8F90A6] text-[12px] leading-[16px]">
                  Austin, Texas
                </spna>
              </section>
              <section className="flex justify-between  mr-[20px] items-center sm:w-[576px] mb-[24px]  xs:[400px] mb-[1px]">
                <aside className="flex justify-start items-center gap-[8px]">
                  <span className="text-[#28293D] font-bold  sm:text-[28px] leading-[38px]  xs:text-[20px] leading-[30px] ">
                    $87,698
                  </span>
                  <Image src="/info.png" height={16} width={16} />
                </aside>

                <button className=" bg-red-700 rounded-[10px] bg-gradient-to-r from-[#FF8800] to-[#E63535] ">
                  <spna className="flex justify-center items-center gap-[2px] py-[6px] px-[16px] text-[14px] leading-[24px] text-white      ">
                    Invite dealer
                    <div className="flex justify-center items-center">
                      <Image src="/arrow.png" width={15} height={24} />
                    </div>
                  </spna>{" "}
                </button>
              </section>
            </aside>
          </section>
        </section>
        <section className="max-w-[970px] bg-[#FFF8E6] py-[16px] pl-[24px]  rounded-b-[10px]">
          <aside className="flex  items-center gap-[4px]">
            <div className="w-[15px] h-[20px]">
              <Image src="/wheel.png" width={15} height={15} />{" "}
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
    </>
  );
}
