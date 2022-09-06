import React from "react";
import Image from "next/image";

export function FooterComponent() {
  //
  return (
    <>
      <footer className="">
        <section className=" flex  bg-[#28293D] text-white sm:flex-row  px-[60px]  justify-between pt-[60px] pb-[36px]   xs:flex-col  gap-[42px]">
          <div className="flex flex-col sm:items-start gap-[24px]    xs: items-center">
            <div className="">
              <Image
                src="/autodigg_footer.png"
                height={36}
                width={132}
                alt="autodigg image"
              />
            </div>
            <div className="h-[72px]  w-[424px]  sm:text-left  xs:w-[328px] ext-center  ">
              <span className="text-[#8F90A6]   ">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[74px] whitespace-nowrap ">
            <aside className="flex  sm:justify-end text-white  items-center gap-[36px]   xs:justify-center">
              <Image
                src="/facebook (2).png"
                height={24}
                width={24}
                property
                alt="Facebook icon"
              />
              <Image
                src="/twitter.png"
                height={24}
                width={24}
                alt="twitter image "
              />
              <Image
                src="/insta.png"
                height={24}
                width={24}
                alt="insta image "
              />
            </aside>
            <aside className="flex sm:flex-row text-white  items-center gap-[30px] xs:flex-col  ">
              <span className="text-white Poppins text-[14px] ">
                How it works
              </span>
              <span className="text-white Poppins text-[14px]">Blog</span>
              <span className="text-white Poppins text-[14px]">
                Frequently asked questions
              </span>
              <span className="text-white Poppins text-[14px]">
                Are you a dealer?
              </span>
              <span className="text-white Poppins">Contact us</span>
            </aside>
          </div>
        </section>
        {/* font-weight: 400; font-size: 10px; line-height: 12px; */}
        <section className="text-white bg-[#1C1C28] px-[60px]">
          <section className="py-[24px] flex sm:flex-row justify-between xs:flex-col items-center gap[16px]">
            <aside>
              <span className="text-[#8F90A6]  font-[400] text-[10px] leading-[12px]">
                © AutoDigg 2021. All Rights Reserved.
              </span>
            </aside>
            <aside className="flex gap-[32px]">
              <span className="text-white text-[10px]">Terms of Service </span>
              <span className="text-white text-[10px]">Privacy Policy </span>
            </aside>
          </section>
        </section>
      </footer>
    </>
  );
}
