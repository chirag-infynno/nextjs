import { AiOutlineFilter } from "react-icons/ai";
import { HeaderComponent } from "../Component/Header";
import { FooterComponent } from "../Component/Footer";
import { FilterBar } from "../Component/Filterbar";
import { Sidebar } from "../Component/Sidebar";

import axios from "axios";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";

export default function Home({
  totalcar,
  cardata,
  model,
  bodytype,
  exteriorcolor,
  interiorcolor,
  transmission,
  drivetrain,
  fueltype,
  features,
}) {
  // const [newmodel, setNewdata] = useState([]);
  useEffect(() => {}, []);
  return (
    <>
      <HeaderComponent />
      <div className="  pt-[36px] pb-[26px] xs:flex justify-between items-start   sm:px-[60px]  xs:px-[16px] ">
        <div className="flex flex-col gap-[8px]   ">
          <spna className="text-[12px] text-[#212229] uppercase">
            Used cars for sale
          </spna>
          <h1 className="md:text-[32px]  leading-[44px] text-[#28293D] font-bold h-[44px] xs:text-[18ox] leading-[28px] text-[#28293D]">
            Showing {totalcar} cars
          </h1>
        </div>

        <div className="sm:hidden xs:d block bg-[#FF8800]   rounded-[10px] p-[10px] ">
          <AiOutlineFilter size={25} className="text-white" />
        </div>
      </div>{" "}
      <section className="flex flex-row gap-[24px]  sm:mx-[60px]  xs:mx-[16px]">
        <FilterBar
          model={model}
          bodytype={bodytype}
          interiorcolor={interiorcolor}
          exteriorcolor={exteriorcolor}
          transmission={transmission}
          drivetrain={drivetrain}
          fueltype={fueltype}
          features={features}
        />
        <Sidebar cardata={cardata} />
      </section>
      <FooterComponent />
    </>
  );
}

export async function getStaticProps() {
  const carnumberapi =
    "https://autodigg.com/ad-api/cars/list?usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&return=count";
  const totalcar = await axios.get(carnumberapi);
  const totalcarnumber = totalcar.data;

  const url =
    "https://autodigg.com/ad-api/cars/list?usedCar=true&car_type=Used+car&page=1&radius=100";
  const response = await axios.get(url);
  const data = response.data;

  const modelUrl = "https://autodigg.com/ad-api/cars/list?make=&return=model";
  const modelResponse = await axios.get(modelUrl);
  const model = modelResponse.data;
  const bodyTypeUrl =
    "https://autodigg.com/ad-api/cars/list?make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=body_type";
  const bodyResponse = await axios.get(bodyTypeUrl);
  const bodyType = bodyResponse.data;

  const exteriorColorUrl =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=exterior_color";
  const extRes = await axios.get(exteriorColorUrl);
  const exteriorColor = extRes.data;

  const interiorColorUrl =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=interior_color";
  const intRes = await axios.get(interiorColorUrl);
  const interiorColor = intRes.data;

  const transmissionUrl =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=transmission";
  const transRes = await axios.get(transmissionUrl);
  const transmission = transRes.data;

  const driveTrainUrl =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=drivetrain";
  const driveRes = await axios.get(driveTrainUrl);
  const driveTrain = driveRes.data;

  const fuelTypeUrl =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=fuel_type";
  const fuelRes = await axios.get(fuelTypeUrl);
  const fuelType = fuelRes.data;

  const featuresUrl =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=features";
  const fetRes = await axios.get(featuresUrl);
  const features = fetRes.data;
  return {
    props: {
      totalcar: totalcarnumber.count,
      cardata: data,
      model: model,
      bodytype: bodyType,
      exteriorcolor: exteriorColor,
      interiorcolor: interiorColor,
      transmission: transmission,
      drivetrain: driveTrain,
      fueltype: fuelType,
      features: features,
    },
  };
}
