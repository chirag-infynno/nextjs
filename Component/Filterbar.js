import Image from "next/image";
import React, { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
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

export function FilterBar() {
  const [multiRange, setMultiRange] = useState([0, 100000]);
  const [multiRangeModel, setMultiRangeModel] = useState([2000, 2010]);
  const [multiRangeMileage, setMultiRangeMileage] = useState([1, 30]);

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
          <span className=" text-[12px] leading-[16px] font-[600] text-[#8F90A6] uppercase">
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
            <span className="text-[12px] leading-[16px text-[#8F90A6] uppercase font-[600]">
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
        <div className="flex  flex-col my-[16px] gap-[8px] w-[280px] ">
          <span>MAKE</span>
          <div className="w-full max-w-xs mx-auto">
            <Listbox
              as="div"
              className="space-y-1"
              value={selectedPersons}
              onChange={(value) => handleSelect(value)}
              open={isOpen}
            >
              {() => (
                <>
                  <div className="relative ">
                    <span className="inline-block w-full rounded-md shadow-sm">
                      <Listbox.Button
                        className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                        onClick={() => setIsOpen(!isOpen)}
                        open={isOpen}
                      >
                        <span className="block truncate overflow-hidden">
                          {selectedPersons.length < 1
                            ? "Select persons"
                            : selectedPersons.map((data) => {
                                return data;
                              })}
                        </span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"></span>
                      </Listbox.Button>
                    </span>

                    <Transition
                      unmount={false}
                      show={isOpen}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                      className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
                    >
                      <Listbox.Options
                        static
                        className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                      >
                        {people.map((person) => {
                          const selected = isSelected(person);

                          return (
                            <Listbox.Option key={person} value={person}>
                              {({ active }) => (
                                <div
                                  className={`${
                                    active
                                      ? "text-red-900 bg-blue-600"
                                      : "text-gray-900 "
                                  } cursor-default select-none relative py-2 pl-8 pr-4`}
                                >
                                  <span
                                    className={`${
                                      selected ? "font-semibold" : "font-normal"
                                    } block truncate`}
                                  >
                                    {person}
                                  </span>
                                </div>
                              )}
                            </Listbox.Option>
                          );
                        })}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>
        </div>

        <section className="flex flex-col gap-[14px]">
          <aside className="uppercase">model</aside>
          <section className="flex items-center justify-start gap-[10px]">
            <input type="checkbox" />
            <label className="uppercase">ILX (7)</label>
          </section>
          <aside className=" flex items-center gap-[5px]">
            <span className="text-[#FF8800]">Show More</span>
            <aside className="flex items-center">
              <BsChevronDown className="text-[#FF8800]" />
            </aside>
          </aside>
        </section>
        <div className="w-[100%] h-[1px] bg-[#E4E4EB] my-[16px]" />

        <section className="bodytype flex flex-col gap-[14px]">
          <span className="uppercase  text-[12px] leading-[16px] font-[600] text-[#8F90A6]">
            body type
          </span>
          <div className="checkbox-bodytype flex gap-[10px]">
            <input type="checkbox" />
            <label className="text-[14px] leading-[20px] font-[500]">
              Sedan (12)
            </label>
          </div>
        </section>
        <div className="line my-[16px] w-[100%] h-[1px] bg-[#E4E4EB]" />
        <section className="range flex flex-col gap-[16px]">
          <section className="price-range flex flex-col gap-[15px]">
            <div className="flex justify-between items-center">
              <span className="text-[12px] leading-[16px] text-[#8F90A6]  font-[600] uppercase">
                Price
              </span>
              <span className="text-[16px] leading-[24px]  text-[#28293D] font-[600]">
                {multiRange[0] == 0 &&
                multiRange[multiRange.length - 1] == 100000
                  ? `Any`
                  : `${multiRange[0]}-${multiRange[multiRange.length - 1]}`}

                {/* } */}
              </span>
            </div>
            <div>
              <Slider
                range
                color="red"
                inverted={false}
                allowCross={false}
                min={0}
                max={100000}
                onChange={(e) => setMultiRange(e)}
                defaultValue={multiRange}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[16px] leading-[16px] text-[#28293D]   font-[600] uppercase">
                $0
              </span>
              <span className="text-[16px] leading-[24px]  text-[#28293D] font-[600]">
                $100,000
              </span>
            </div>
          </section>
          <div className="w-[100%] h-[1px] bg-[#E4E4EB] "></div>{" "}
          <section className="modal-range flex flex-col gap-[15px]">
            <div className="flex justify-between items-center">
              <span className="text-[12px] leading-[16px] text-[#8F90A6]  font-[600] uppercase">
                Make Year
              </span>
              <span className="text-[16px] leading-[24px]  text-[#28293D] font-[600]">
                {multiRangeModel[0] == 1990 &&
                multiRangeModel[multiRangeModel.length - 1] == 2021
                  ? `Any`
                  : `${multiRangeModel[0]}-${
                      multiRangeModel[multiRangeModel.length - 1]
                    }`}
              </span>
            </div>
            <div>
              <Slider
                range
                inverted={false}
                allowCross={true}
                min={1990}
                max={2021}
                onChange={(e) => setMultiRangeModel(e)}
                defaultValue={multiRangeModel}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[16px] leading-[16px] text-[#28293D]   font-[600] uppercase">
                1990
              </span>
              <span className="text-[16px] leading-[24px]  text-[#28293D] font-[600]">
                2021
              </span>
            </div>
          </section>
          <div className="w-[100%] h-[1px] bg-[#E4E4EB] "></div>{" "}
          <section className="milage-range flex flex-col gap-[15px]">
            <div className="flex justify-between items-center">
              <span className="text-[12px] leading-[16px] text-[#8F90A6]  font-[600] uppercase">
                Mileage
              </span>
              <span className="text-[16px] leading-[24px]  text-[#28293D] font-[600]">
                {multiRangeMileage[0] == 1 &&
                multiRangeMileage[multiRangeMileage.length - 1] == 30
                  ? `Any`
                  : `${multiRangeMileage[0]}-${
                      multiRangeMileage[multiRangeMileage.length - 1]
                    }`}
              </span>
            </div>
            <div>
              <Slider
                range
                inverted={false}
                allowCross={true}
                min={1}
                max={30}
                onChange={(e) => setMultiRangeMileage(e)}
                defaultValue={multiRangeMileage}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[16px] leading-[16px] text-[#28293D]   font-[600] uppercase">
                1
              </span>
              <span className="text-[16px] leading-[24px]  text-[#28293D] font-[600]">
                Any
              </span>
            </div>
          </section>
        </section>
      </section>
      <div className="line w-[100%] h-[2px] bg-[#E4E4EB] mt-[36px] mb-[10px]" />
      <section className="style my-[16px] w-[100%]  "></section>
    </section>
  );
}
