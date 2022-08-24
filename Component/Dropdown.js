import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

export default function Dropdown({ apidata, bodydata, name }) {
  const [Dropdown, setDropdown] = useState(false);

  const datas = (data) => {
    console.log("datas", data);
  };
  const changeDropdown = () => {
    setDropdown(!Dropdown);
  };
  return (
    <section className="Performance w-[100%] px-[16px] ">
      <div
        className={`flex justify-between  items-center  w-[100%]  cursor-pointer `}
        onClick={changeDropdown}
      >
        <span className=" text-[16px] leading-[24px] font-[600]">{name}</span>
        <BsChevronDown />
      </div>
      <div
        className={`style  w-[100%]   flex flex-col gap-[10px] ${
          Dropdown ? "max-h-[1000px] py-[10px] " : " h-[0px] "
        }transition-all ease-in-out duration-9000 overflow-hidden `}
      >
        {apidata.map((data, index) => (
          <div className="Performance flex flex-col gap-[10px]" key={index}>
            <span className="text-[12px] text-[#8F90A6] font-[600]">
              {data}
            </span>
            <div className="body-style-check flex flex-col">
              {Object.keys(bodydata[index]).map((key, number) => {
                return (
                  <section
                    className="flex items-center justify-start gap-[10px]"
                    key={number.toString()}
                  >
                    <input
                      type="checkbox"
                      name={key}
                      onChange={() => {
                        "as";
                      }}
                    />

                    <label className="text-[14px] leading-[20px] font-[500]">{`${key}`}</label>
                  </section>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
