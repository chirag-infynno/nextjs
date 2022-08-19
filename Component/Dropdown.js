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
          <>
            <div className="Performance flex flex-col gap-[10px]">
              <span className="text-[12px] text-[#8F90A6] font-[600]">
                {data}
              </span>
              <div className="body-style-check flex flex-col">
                {Object.keys(bodydata[index]).map((key) => {
                  return (
                    <>
                      <section className="flex items-center justify-start gap-[10px]">
                        <input
                          type="checkbox"
                          name={key}
                          // onChange={changeModel}
                        />
                        {/* {datas(key)} */}
                        <label className="uppercase">{`${key}`}</label>
                        {/* <h1>a</h1> */}
                      </section>
                    </>
                  );
                })}
                {/* <div className="body-style-input flex gap-[10px]">
                  <input type="checkbox" />
                  <lable>Convertable</lable>
                </div> */}
              </div>
            </div>
          </>
        ))}

        {/* <div className="DRIVE-TRAIN flex flex-col gap-[10px]">
          <span className="text-[12px] text-[#8F90A6] font-[600]">
            DRIVE TRAIN
          </span>
          <div className="body-style-check flex flex-col">
            <div className="body-style-input flex gap-[10px]">
              <input type="checkbox" />
              <lable>Convertable</lable>
            </div>
          </div>
        </div>

        <div className="FUEL-TYPE flex flex-col gap-[10px]">
          <span className="text-[12px] text-[#8F90A6] font-[600]">
            FUEL TYPE
          </span>
          <div className="body-style-check flex flex-col">
            <div className="body-style-input flex gap-[10px]">
              <input type="checkbox" />
              <lable>Convertable</lable>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
