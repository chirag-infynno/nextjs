import React from "react";
import Head from "next/head";
import Image from "next/image";

export const HeaderComponent = () => {
  return (
    <>
      <div className="  flex  justify-between items-center border-b-[2px] max-w-[1440px]  border-[#E4E4EB] h-[68px]  whitespace-nowrap px-[60px]">
        {/* <div className="flex gap-[301px]"> */}
        <div className="flex gap-[36px]">
          <span className="cursor-pointer uppercase text-[#28293D] leading-[20px] text-[12px] Poppins font-bold">
            How it works
          </span>
          <span className="uppercase text-[#28293D] leading-[20px] text-[12px] Poppins font-bold">
            Why us
          </span>
          <span className="uppercase text-[#28293D] leading-[20px] text-[12px] Poppins font-bold">
            Contact us
          </span>
        </div>

        <div className="flex justify-between items-center  gap-[260px] ">
          <div className=" max-w-[132px] max-h-[36px] ">
            <Image
              src="/autodigg.png"
              width={100}
              height={27}
              priority
              alt="not "
            />
          </div>
          <div className="flex gap-[36px] ">
            <div className="flex gap-[4px] justify-center items-center border-b-4 border-[#FF6B00]">
              {/* <Image src="/car.png" width={24} height={5} priority alt="not " /> */}
              <img src="/car.png" className="w-[18px] h-[20px]" />
              <span className="text-[#FF6B00] uppercase font-bold">
                Used cars for sale
              </span>
            </div>
            <div className="flex  bg-[#28293D] rounded-[13px]">
              <span className="text-white py-[8px] px-[20px] uppercase">
                Sign in/ Register
              </span>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="bg-yellow-600 min-w-[1440px]"></div>
    </>
  );
};

// export  Head;
