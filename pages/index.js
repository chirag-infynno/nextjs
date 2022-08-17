import Head from "next/head";
import Image from "next/image";
import FooterComponent from "../Component/footer";
import { HeadComponent } from "../Component/head";
import { HeaderComponent } from "../Component/header";
import styles from "../styles/Home.module.css";
import { AiOutlineFilter } from "react-icons/ai";
import { Filterbar } from "../Component/Filterbar";
import { Sidebar } from "../Component/Sidebar";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

import { Listbox, Transition } from "@headlessui/react";
import { data } from "autoprefixer";
const people = [
  "Wade Cooper",
  "Arlene Mccoy",
  "Devon Webb",
  "Tom Cook",
  "Tanya Fox",
  "Hellen Schmidt",
  "Caroline Schultz",
  "Mason Heaney",
  "Claudie Smitham",
  "Emil Schaefer",
];
export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPersons, setSelectedPersons] = useState([]);

  function isSelected(value) {
    return selectedPersons.find((el) => el === value) ? true : false;
  }

  function handleSelect(value) {
    console.log("value", value);
    if (!isSelected(value)) {
      // console.log(isSelected(value));
      const selectedPersonsUpdated = [
        ...selectedPersons,
        people.find((el) => el === value),
      ];
      setSelectedPersons(selectedPersonsUpdated);
    } else {
      handleDeselect(value);
    }
    setIsOpen(true);
  }

  function handleDeselect(value) {
    const selectedPersonsUpdated = selectedPersons.filter((el) => el !== value);
    setSelectedPersons(selectedPersonsUpdated);
    setIsOpen(true);
  }
  useEffect(() => {
    setCookie("Name", "chirag");
    removeCookie("Name");
  }, []);

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
      <section className="flex flex-row gap-[24px]  sm:mx-[60px]   xs:mx-[16px]">
        <Filterbar />
        <Sidebar />
      </section>
      <FooterComponent />
    </>
  );
}
