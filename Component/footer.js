import React from "react";
import Image from "next/image";

export default function FooterComponent() {
  return (
    <>
      <div className=" xs:bg-green-600 md:bg-red-800  sm:bg-blue-800  ">
        name
      </div>

      <footer className="">
        <section className="  bg-[#28293D] flex text-white px-[60px]  justify-between pt-[60px] pb-[36px]   ">
          <div className="flex flex-col gap-[24px]">
            <div>
              <Image src="/autodigg_footer.png" height={36} width={132} />
            </div>
            <div className="max-w-[424px] border-[1px] border-red-700 h-[72px]">
              <span className="text-[#8F90A6] h-[72px] overflow-hidden">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </span>
            </div>
          </div>
          <aside className="flex flex-col gap-[74px] whitespace-nowrap">
            <aside className="text-white flex items-center gap-[36px] justify-end">
              <Image src="/facebook (2).png" height={24} width={24} />
              <Image src="/twitter.png" height={24} width={24} />
              <Image src="/insta.png" height={24} width={24} />
            </aside>
            <aside className="text-white flex items-center gap-[30px]">
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
          </aside>
        </section>

        <section className="text-white bg-[#1C1C28] px-[60px]">
          <section className="py-[24px]  flex justify-between">
            <aside>
              <span className="text-[#8F90A6] ">
                © AutoDigg 2021. All Rights Reserved.{" "}
              </span>
            </aside>{" "}
            <aside className="flex gap-[32px]">
              <span className="text-white font-[10px]">Terms of Service </span>
              <span className="text-white font-[10px]">Privacy Policy </span>
            </aside>
          </section>
        </section>
      </footer>
    </>
  );
}
