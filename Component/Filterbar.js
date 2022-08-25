import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import { Listbox, Transition, Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import {
  changeCarApi,
  newapi,
  changeCarTypeState,
  changeMakeData,
} from "../redux/slice/homePageSlices";
import { useDispatch, useSelector } from "react-redux";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import Dropdown from "./Dropdown";

export function FilterBar({
  user,
  bodytype,
  exteriorcolor,
  interiorcolor,
  transmission,
  drivetrain,
  model,
  fueltype,
  features,
  make,
}) {
  const dispatch = useDispatch();
  // const [carType, setCarType] = useState(["used+car"]);

  const { carType } = useSelector((state) => state.homePageSlice);
  const people = Object.keys(make);
  const [styledropdown, setStleDropdown] = useState(false);
  const [performancedropdown, setPerformancedropdown] = useState(false);
  const [featuredropdown, setFeaturedropdown] = useState(false);
  const [multiRange, setMultiRange] = useState([0, 100000]);
  const [multiRangeModel, setMultiRangeModel] = useState([2000, 2010]);
  const [multiRangeMileage, setMultiRangeMileage] = useState(30);

  const [miles, setMiles] = useState(0);

  const [showmore, setShowmore] = useState(false);

  const changeModel = (e) => {};

  const changeshowmore = () => {
    setShowmore(!showmore);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedPersons, setSelectedPersons] = useState([]);

  const changeCartype = (e) => {
    const type = [...carType];

    e.target.checked
      ? type.push(e.target.value)
      : type.splice(type.indexOf(e.target.value), 1);
    dispatch(changeCarTypeState(type));

    dispatch(changeCarApi());
  };
  function isSelected(value) {
    return selectedPersons.find((el) => el === value) ? true : false;
  }

  function handleSelect(value) {
    if (!isSelected(value)) {
      const selectedPersonsUpdated = [
        ...selectedPersons,
        people.find((el) => el === value),
      ];

      setSelectedPersons(selectedPersonsUpdated);
      dispatch(changeMakeData(selectedPersonsUpdated));
      dispatch(changeCarApi());
    } else {
      handleDeselect(value);
    }
    setIsOpen(true);
  }

  function handleDeselect(value) {
    const selectedPersonsUpdated = selectedPersons.filter((el) => el !== value);
    console.log("new", selectedPersonsUpdated);
    setSelectedPersons(selectedPersonsUpdated);
    dispatch(changeMakeData(selectedPersonsUpdated));
    dispatch(changeCarApi());
    setIsOpen(true);
  }

  useEffect(() => {}, []);

  return (
    <section className=" w-[312px] border-[2px]  bg-white h-fit sm:block  xs:hidden pb-[16px]">
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
            <input
              type="checkbox"
              onChange={changeCartype}
              className="accent-black h-[20px] w-[20px]"
              value="new+car"
            />
            <label className="text-[14px] leading-[20px]">New</label>{" "}
            <input
              type="checkbox"
              onChange={changeCartype}
              className="accent-black h-[20px] w-[20px]"
              value="used+car"
              defaultChecked
            />
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
              {miles} miles
            </spna>
          </div>
          <div>
            <Slider
              inverted={false}
              allowCross={true}
              min={20}
              max={500}
              onChange={(e) => setMiles(e)}
              defaultValue={miles}
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[12px] leading-[16px]  text-[#28293D] font-Poppins">
              1 miles
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
                            ? "Select Make"
                            : selectedPersons.toString()}
                        </span>

                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <BiChevronDown />
                        </span>
                      </Listbox.Button>
                    </span>

                    <Transition
                      unmount={false}
                      show={isOpen}
                      leave="transition ease-in duration-9000"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                      className="absolute mt-1 w-full rounded-md bg-white shadow-lg "
                    >
                      <Listbox.Options
                        static
                        className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                      >
                        {people.map((person, index) => {
                          const selected = isSelected(person);

                          return (
                            <Listbox.Option key={index} value={person}>
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

        <section className={`flex flex-col gap-[14px]  overflow-hidden `}>
          <aside className="uppercase">model</aside>
          <div
            className={`${
              showmore ? "h-auto" : "h-[211px]"
            } flex flex-col gap-[14px]  overflow-hidden`}
          >
            {Object.keys(model).map((key, index) => {
              return (
                <section
                  className="flex items-center justify-start gap-[10px]"
                  key={index}
                >
                  <input type="checkbox" name={key} onChange={changeModel} />
                  <label className="uppercase">{`${key} (${model[key]})  `}</label>
                </section>
              );
            })}
          </div>
          <aside
            className={` flex items-center gap-[5px] cursor-pointer  `}
            onClick={changeshowmore}
          >
            <span className="text-[#FF8800]">
              {showmore ? "Show Less" : "Show More"}
            </span>
            <aside className="flex items-center">
              <BsChevronDown className="text-[#FF8800]" />
            </aside>
          </aside>
        </section>
        <div className="w-[100%] h-[1px] bg-[#E4E4EB] my-[16px]" />

        {/* <dciv className="line my-[16px] w-[100%] h-[1px] bg-[#E4E4EB]" /> */}
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
                {multiRangeMileage == 30 ? `Any` : `${multiRangeMileage}`}
              </span>
            </div>
            <div>
              <Slider
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
                0
              </span>
              <span className="text-[16px] leading-[24px]  text-[#28293D] font-[600]">
                Any
              </span>
            </div>
          </section>
        </section>
      </section>

      {/* <div className="line w-[100%] h-[2px] bg-[#E4E4EB] mt-[16px] mb-[16px]" /> */}
      <div className="line w-[100%] h-[2px] bg-[#E4E4EB] mt-[16px] mb-[16px]" />

      <Dropdown
        apidata={["BODY STYLE", "EXTERIOR COLOR", "INTERIOR COLOR"]}
        bodydata={[bodytype, exteriorcolor, interiorcolor]}
        name={"Style"}
        key={1}
      />

      {/* , "DRIVE TRAIN"" */}
      <div className="line w-[100%] h-[2px] bg-[#E4E4EB] mt-[16px] mb-[16px]" />
      <Dropdown
        apidata={["TRANSMISSION", "DRIVE TRAIN", "FUEL TYPE"]}
        bodydata={[transmission, drivetrain, fueltype]}
        name={"Performance"}
      />
      <div className="line w-[100%] h-[2px] bg-[#E4E4EB] mt-[16px] mb-[16px]" />
      <Dropdown
        apidata={[
          "INTERIOR FEATURES",
          "TECHNOLOGY FEATURES",
          "SAFETY FEATURES",
          "EXTERIOR FEATURES",
          "Other",
        ]}
        bodydata={[
          features["Interior Features"],
          features["Technology Features"],
          features["Safety Features"],
          features["Exterior Features"],
          features["Others"],
        ]}
        name={"Feature"}
      />
      {/* 
      {/* INTERIOR FEATURES */}
    </section>
  );
}
