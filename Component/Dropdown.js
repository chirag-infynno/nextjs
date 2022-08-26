import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import {
  changeBodyType,
  changeCarApi,
  changeExteriorColor,
  chanageTransmission,
  chanageDriveTrain,
  chanageFuelType,
  chanageFeatures,
  chanageInteriorColor,
} from "../redux/slice/homePageSlices";
export default function Dropdown({ apidata, bodydata, name }) {
  const {
    selectBodyType,
    selectExteriorColor,
    selectInteriorColor,
    selectTransmission,
    selectDriveTrain,
    selectFuelType,
    selectFeatures,
  } = useSelector((state) => state.homePageSlice);
  const [Dropdown, setDropdown] = useState(false);

  console.log("apidata", apidata, "body_type", bodydata, "name", name);
  const dispatch = useDispatch();
  const changeDropdown = () => {
    setDropdown(!Dropdown);
  };
  const handleSelect = (e) => {
    console.log(e.target.name);

    // e.target.name == "BODY STYLE";

    switch (e.target.name) {
      case "BODY STYLE":
        const bodyStyle = [...selectBodyType];

        e.target.checked
          ? bodyStyle.push(e.target.value)
          : bodyStyle.splice(bodyStyle.indexOf(e.target.value), 1);

        console.log(bodyStyle);
        dispatch(changeBodyType(bodyStyle));
        dispatch(changeCarApi());

        break;
      case "EXTERIOR COLOR":
        const exteriorColor = [...selectExteriorColor];

        e.target.checked
          ? exteriorColor.push(e.target.value)
          : exteriorColor.splice(exteriorColor.indexOf(e.target.value), 1);

        dispatch(changeExteriorColor(exteriorColor));
        dispatch(changeCarApi());

        break;
      case "INTERIOR COLOR":
        const interiorColor = [...selectInteriorColor];

        e.target.checked
          ? interiorColor.push(e.target.value)
          : interiorColor.splice(interiorColor.indexOf(e.target.value), 1);

        dispatch(chanageInteriorColor(interiorColor));
        dispatch(changeCarApi());
        break;
      case "TRANSMISSION":
        const transmission = [...selectTransmission];

        e.target.checked
          ? transmission.push(e.target.value)
          : transmission.splice(transmission.indexOf(e.target.value), 1);

        dispatch(chanageTransmission(transmission));
        dispatch(changeCarApi());
        break;
      case "DRIVE TRAIN":
        const driveTrain = [...selectDriveTrain];

        e.target.checked
          ? driveTrain.push(e.target.value)
          : driveTrain.splice(driveTrain.indexOf(e.target.value), 1);

        dispatch(chanageDriveTrain(driveTrain));
        dispatch(changeCarApi());
        break;
      case "FUEL TYPE":
        const fuelType = [...selectFuelType];

        e.target.checked
          ? fuelType.push(e.target.value)
          : fuelType.splice(fuelType.indexOf(e.target.value), 1);

        dispatch(chanageFuelType(fuelType));
        dispatch(changeCarApi());
        break;
      default:
        const features = [...selectFeatures];

        e.target.checked
          ? features.push(e.target.value)
          : features.splice(features.indexOf(e.target.value), 1);

        dispatch(chanageFeatures(features));
        dispatch(changeCarApi());
    }
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
              {bodydata[index] && data}
            </span>
            <div className="body-style-check flex flex-col gap-[10px]">
              {bodydata[index] &&
                Object?.keys(bodydata[index])?.map((key, number) => {
                  return (
                    bodydata[index][key] > 0 && (
                      <section
                        className="flex items-center justify-start gap-[16px]"
                        key={number.toString()}
                      >
                        <input
                          type="checkbox"
                          name={data}
                          onChange={handleSelect}
                          value={key}
                          className="w-[20px] h-[20px]"
                        />

                        <label className="text-[15px] leading-[20px] font-[500]">{`${key} `}</label>
                      </section>
                    )
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
