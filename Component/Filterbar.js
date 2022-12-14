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
  changeCarModel,
} from "../redux/slice/homePageSlices";
import { useDispatch, useSelector } from "react-redux";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import Dropdown from "./Dropdown";

export function FilterBar(props) {
  const dispatch = useDispatch();
  const [modeldata, setModeldata] = useState(props.model);
  const [apiData, setApiData] = useState({
    bodytype: props.bodytype,
    exteriorcolor: props.exteriorcolor,
    interiorcolor: props.interiorcolor,
    transmission: props.transmission,
    drivetrain: props.drivetrain,
    fueltype: props.fueltype,
    features: props.features,
  });

  const people = Object.keys(props.make);

  const [multiRangeMileage, setMultiRangeMileage] = useState(30);

  const [miles, setMiles] = useState(0);

  const {
    carType,
    cars,
    totalcarnumber,
    model,
    selcetCarModel,
    bodytype,
    exteriorcolor,
    interiorcolor,
    transmission,
    drivetrain,
    fueltype,
    features,
    totalpage,
  } = useSelector((state) => state.homePageSlice);

  const [showmore, setShowmore] = useState(false);

  const changeshowmore = () => {
    setShowmore(!showmore);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedPersons, setSelectedPersons] = useState([]);

  const changeCartype = (e) => {
    props.setCurrentPage(0);
    const type = carType;
    let arr = e.target.checked
      ? [...type, e.target.value]
      : type.filter((dta) => dta != e.target.value);

    arr.length > 0
      ? dispatch(changeCarTypeState(arr))
      : dispatch(changeCarTypeState(["used+car", "new+car"]));

    dispatch(
      changeCarApi({
        priceRange: props.priceRange,
        makeYear: props.multiRangeModel,
        page: 1,
      })
    );
  };

  const changePrice = (e) => {
    props.setCurrentPage(0);
    props.setPriceRange(e);
    dispatch(
      changeCarApi({ priceRange: e, makeYear: props.multiRangeModel, page: 1 })
    );
    // changeCarApi({ priceRange: e, makeYear: multiRangeModel });
  };

  const changeMakeYear = (e) => {
    props.setCurrentPage(0);
    props.setMultiRangeModel(e);
    dispatch(
      changeCarApi({ priceRange: props.priceRange, makeYear: e, page: 1 })
    );
    // changeCarApi({ priceRange: e, makeYear: multiRangeModel });
  };
  const changeModel = (e) => {
    props.setCurrentPage(0);
    const carModel = [...selcetCarModel];

    e.target.checked
      ? carModel.push(e.target.value)
      : carModel.splice(carModel.indexOf(e.target.value), 1);
    dispatch(changeCarModel(carModel));

    dispatch(
      changeCarApi({
        priceRange: props.priceRange,
        makeYear: props.multiRangeModel,
        page: 1,
      })
    );
  };

  function isSelected(value) {
    return selectedPersons.find((el) => el === value) ? true : false;
  }

  function handleSelect(value) {
    dispatch(changeCarModel([]));
    if (!isSelected(value)) {
      const selectedPersonsUpdated = [
        ...selectedPersons,
        people.find((el) => el === value),
      ];

      setSelectedPersons(selectedPersonsUpdated);
      dispatch(changeMakeData(selectedPersonsUpdated));
      dispatch(
        changeCarApi({
          priceRange: props.priceRange,
          makeYear: props.multiRangeModel,
        })
      );
    } else {
      handleDeselect(value);
    }
    setIsOpen(true);
  }

  function handleDeselect(value) {
    const selectedPersonsUpdated = selectedPersons.filter((el) => el !== value);

    setSelectedPersons(selectedPersonsUpdated);
    dispatch(changeMakeData(selectedPersonsUpdated));
    props.setCurrentPage(0);
    dispatch(
      changeCarApi({
        priceRange: props.priceRange,
        makeYear: props.multiRangeModel,
        page: 1,
      })
    );
    setIsOpen(true);
  }

  function changealldata() {
    props.setTotoalCar(totalcarnumber);

    props.setCarData(cars);
    props.setTotalpage(totalpage);
    setApiData({
      bodytype: bodytype,
      exteriorcolor: exteriorcolor,
      interiorcolor: interiorcolor,
      transmission: transmission,
      drivetrain: drivetrain,
      fueltype: fueltype,
      features: features,
    });
    setModeldata(model);
  }

  useEffect(() => {
    cars.length > 0 ? changealldata() : "";
  }, [cars]);

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
                                    active ? "" : "text-gray-900 "
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
              showmore ? "h-auto" : "h-[200px]"
            } flex flex-col gap-[14px]  overflow-hidden`}
          >
            {Object.keys(modeldata).map((key, index) => {
              return (
                <section
                  className="flex items-center justify-start gap-[10px]"
                  key={index}
                >
                  <input
                    type="checkbox"
                    name={key}
                    onChange={changeModel}
                    value={key}
                    className="w-[20px] h-[20px]"
                  />

                  <label className="uppercase font-[500] text-[15px] leading-[20px]">{`${key} (${modeldata[key]})  `}</label>
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
                {props.priceRange[0] == 0 &&
                props.priceRange[props.priceRange.length - 1] == 100000
                  ? `Any`
                  : `${props.priceRange[0]}-${
                      props.priceRange[props.priceRange.length - 1]
                    }`}
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
                onChange={(e) => changePrice(e)}
                defaultValue={props.priceRange}
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
                {props.multiRangeModel[0] == 1990 &&
                props.multiRangeModel[props.multiRangeModel.length - 1] == 2021
                  ? `Any`
                  : `${props.multiRangeModel[0]}-${
                      props.multiRangeModel[props.multiRangeModel.length - 1]
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
                onChange={(e) => changeMakeYear(e)}
                defaultValue={props.multiRangeModel}
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
        priceRange={props.priceRange}
        multiRangeModel={props.multiRangeModel}
        apidata={["BODY STYLE", "EXTERIOR COLOR", "INTERIOR COLOR"]}
        bodydata={[
          apiData.bodytype,
          apiData.exteriorcolor,
          apiData.interiorcolor,
        ]}
        name={"Style"}
        setCurrentPage={props.setCurrentPage}
        key={1}
      />

      {/* , "DRIVE TRAIN"" */}
      <div className="line w-[100%] h-[2px] bg-[#E4E4EB] mt-[16px] mb-[16px]" />
      <Dropdown
        multiRangeModel={props.multiRangeModel}
        apidata={["TRANSMISSION", "DRIVE TRAIN", "FUEL TYPE"]}
        bodydata={[apiData.transmission, apiData.drivetrain, apiData.fueltype]}
        name={"Performance"}
        priceRange={props.priceRange}
        setCurrentPage={props.setCurrentPage}
      />
      <div className="line w-[100%] h-[2px] bg-[#E4E4EB] mt-[16px] mb-[16px]" />
      <Dropdown
        multiRangeModel={props.multiRangeModel}
        priceRange={props.priceRange}
        apidata={[
          "INTERIOR FEATURES",
          "TECHNOLOGY FEATURES",
          "SAFETY FEATURES",
          "EXTERIOR FEATURES",
          "Other",
        ]}
        setCurrentPage={props.setCurrentPage}
        bodydata={[
          apiData.features["Interior Features"] &&
            apiData.features["Interior Features"],
          apiData.features["Technology Features"],
          apiData.features["Safety Features"],
          apiData.features["Safety Features"],
          apiData.features["Others"],
        ]}
        name={"Feature"}
      />
      {/* 
      {/* INTERIOR FEATURES */}
    </section>
  );
}
