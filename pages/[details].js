import React from "react";
import { HeaderComponent } from "../Component/Header";
import { BsArrowLeftCircle } from "react-icons/bs";
// import Image from "next/dist/client/image";
import Image from "next/image";

const details = () => {
  return (
    <>
      <HeaderComponent />
      <nav className="max-w-[1440px] px-[60px] py-[24px] bg-white flex justify-between ">
        <div className="flex gap-[15px] items-start  ">
          <div className=" pt-[6px] cursor-pointer">
            <BsArrowLeftCircle size={36} color={"orange"} />
          </div>
          <div className="flex flex-col gap-[8px] ">
            <span className="text-[32px] leading-[44px] font-[700] flex items-start">
              2022 Ford F-250 Super Duty
            </span>
            <div className="flex flex-col gap-[10px]">
              <span className="text-[16px] leading-[14px] fomt-[400] text-[#8F90A6]">
                Covert Buick GMC • 3,518 Mileage • Black
              </span>
              <span className="text-[16px] leading-[14px] fomt-[400] text-[#8F90A6]">
                Austin, Texas
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-[24px] items-start pt-[6px]">
          <aside className="flex justify-start items-center gap-[8px]">
            <span className="text-[#28293D] font-bold  sm:text-[28px] leading-[38px]  xs:text-[20px] leading-[30px] ">
              {/* {`$${data.price.toLocaleString("en-US")}`} */}$12
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
        </div>
      </nav>

      <section className="spacial-offer bg-[#FFF8E6] px-[112px] py-[24px]">
        <div className="spacial-offer-div flex flex-col gap-[16px]">
          <div className="flex gap-[4px]">
            <Image
              src="/wheel.png"
              width={15}
              height={15}
              alt="image not found"
            />
            <span className="font-[600] text-[12px] leading-[20px] text-[#05A660]">
              Special offers
            </span>
          </div>
          <div className="flex gap-[16px]">
            <span className="text-[14px] leading-[24px]">
              • 100% credit approval guaranteed
            </span>
            <span className="text-[14px] leading-[24px]">
              • Complimentary 101pt safety check
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export function getServerSideProps(context) {
  const { params } = context;
  console.log(params);

  return {
    // props: {
    //   userdata: { title: "My Title" },
    // },
    // revalidate: 1,

    props: { title: "My Title", content: "..." },
  };
}
export default details;
