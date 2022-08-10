import Image from "next/image";
import React from "react";

export function Filterbar() {
  return (
    <section className=" w-[312px] border-[2px]  bg-white sm:block  xs:hidden  ">
      <section className="m-[16px]  flex flex-col ">
        <aside className="flex flex-col gap-[8px]">
          <span className="text-[16px] leading-[24px] font-bold">
            Filter By
          </span>
          <div className="w-[30px] h-[3px] bg-[#E63535]"></div>
        </aside>

        <aside className="mt-[24px] flex flex-col gap-[14px]">
          <span>Car type</span>
          <section className="flex  justify-start items-center gap-[10px]">
            <input type="checkbox" />
            <label className="text-[14px] leading-[20px]">New</label>{" "}
            <input type="checkbox" />
            <label className="text-[14px] leading-[20px]">Used</label>
          </section>
        </aside>

        <section className="mt-[18px] w-[100%] h-[1px] bg-[#E4E4EB]"></section>
        <section className="mt-[16px] flex flex-col gap-[8px]">
          <span className="text-[#8F90A6] text-[12px] leading-[16px]">
            your zip
          </span>
          <div className="flex  rounded-[10px] border-[1px] border-[#E4E4EB] ">
            <div className="mx-[14px] w-[100%] my-[14px] flex justify-between items-center  ">
              <input type="search" className="outline-none  w-[100px] " />
              <Image
                src="/filter_arrow.png"
                width={15}
                height={20}
                className=""
                alt="image not found"
              />
            </div>
          </div>
        </section>

        <section className="mt-[20px] flex flex-col gap-[11px]">
          <div className="flex justify-between  items-center">
            <span className="text-[12px] leading-[16px text-[#8F90A6] uppercase">
              Search within
            </span>
            <spna className="text-[16px] leading-[24px] font-bold">
              100 miles
            </spna>
          </div>
          <input type="range" />
          <div className="flex justify-between items-center">
            <span className="text-[12px] leading-[16px]  text-[#28293D] font-Poppins">
              20 miles
            </span>
            <span className="text-[12px] leading-[16px] text-[#28293D] font-Titan ">
              500 miles
            </span>
          </div>
        </section>
        <h1 className="font-Titan">welcome</h1>
      </section>
    </section>
  );
}
