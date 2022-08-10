import Head from "next/head";
import Image from "next/image";
import FooterComponent from "../Component/footer";
import { HeadComponent } from "../Component/head";
import { HeaderComponent } from "../Component/header";
import styles from "../styles/Home.module.css";
import { AiOutlineFilter } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <div className="px-[60px]  bg-[#FAFAFC] pt-[36px] pb-[26px] xs:flex justify-between items-start">
        <div className="flex flex-col gap-[8px]">
          <spna className="text-[12px] text-[#8F90A6] uppercase">
            Used cars for sale
          </spna>
          <h1 className="md:text-[32px] leading-[44px] text-[#28293D] text-bold h-[44px] xs:text-[18ox] leading-[28px] text-[#28293D]">
            Showing 1,234 cars
          </h1>
        </div>
        <div className="sm:hidden xs:d block bg-[#FF8800]   rounded-[10px] p-[10px] ">
          <AiOutlineFilter size={25} className="text-white" />
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
