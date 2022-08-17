import { AiOutlineFilter } from "react-icons/ai";
import { HeaderComponent } from "../Component/Header";
import { FooterComponent } from "../Component/Footer";
import { FilterBar } from "../Component/Filterbar";
import { Sidebar } from "../Component/Sidebar";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <div className="  bg-[#FAFAFC] pt-[36px] pb-[26px] xs:flex justify-between items-start sm:px-[60px] xs:px-[16px]">
        <div className="flex flex-col gap-[8px]">
          <spna className="text-[12px] text-[#8F90A6] uppercase">
            Used cars for sale
          </spna>
          <h1 className="md:text-[32px] leading-[44px] text-[#28293D] font-bold h-[44px] xs:text-[18ox] leading-[28px] text-[#28293D]">
            Showing 1,234 cars
          </h1>
        </div>

        <div className="sm:hidden xs:d block bg-[#FF8800]   rounded-[10px] p-[10px] ">
          <AiOutlineFilter size={25} className="text-white" />
        </div>
      </div>{" "}
      <section className="flex flex-row gap-[24px]  sm:mx-[60px]  xs:mx-[16px]">
        <FilterBar />
        <Sidebar />
      </section>
      <FooterComponent />
    </>
  );
}
