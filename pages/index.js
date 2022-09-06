import { AiOutlineFilter } from "react-icons/ai";
import { HeaderComponent } from "../Component/Header";
import { FooterComponent } from "../Component/Footer";
import { FilterBar } from "../Component/Filterbar";
import { Sidebar } from "../Component/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { homePageSlice, newapi } from "../redux/slice/homePageSlices";

import axios from "axios";
import { useEffect, useState } from "react";

import HomPage from "../Component/HomPage";
import { Loding } from "../Component/Loding";

export default function Home(props) {
  const [multiRangeModel, setMultiRangeModel] = useState([2011, 2021]);
  const [cardata, setCarData] = useState(props.cars);
  const [totalCar, setTotoalCar] = useState(props.totalcarnumber);
  const [totalpage, setTotalpage] = useState(props.totalpage);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [currentPage, setCurrentPage] = useState(1);
  const loding = useSelector((state) => state.homePageSlice.loding);

  useEffect(() => {}, [totalCar, cardata]);
  return (
    <>
      <HeaderComponent />

      <div className="  pt-[36px] pb-[26px] xs:flex justify-between items-start   sm:px-[60px]  xs:px-[16px] ">
        <div className="flex flex-col gap-[8px]   ">
          <spna className="text-[12px] text-[#212229] uppercase">
            Used cars for sale
          </spna>
          <h1 className="md:text-[32px]  leading-[44px] text-[#28293D] font-bold h-[44px] xs:text-[18ox] leading-[28px] text-[#28293D]">
            Showing {totalCar.toLocaleString("en-US")} cars
          </h1>
        </div>

        <div className="sm:hidden xs:d block bg-[#FF8800]   rounded-[10px] p-[10px] ">
          <AiOutlineFilter size={25} className="text-white" />
        </div>
      </div>
      <section className="flex flex-row gap-[24px]  sm:mx-[60px]  xs:mx-[16px] ">
        <FilterBar
          model={props.model}
          bodytype={props.bodytype}
          interiorcolor={props.interiorcolor}
          exteriorcolor={props.exteriorcolor}
          transmission={props.transmission}
          drivetrain={props.drivetrain}
          fueltype={props.fueltype}
          features={props.features}
          make={props.make}
          setCarData={setCarData}
          setTotoalCar={setTotoalCar}
          totalpage={totalpage}
          setTotalpage={setTotalpage}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          multiRangeModel={multiRangeModel}
          setMultiRangeModel={setMultiRangeModel}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        {loding ? (
          <Loding />
        ) : (
          <Sidebar
            cardata={cardata}
            count={props.totalcarnumber}
            multiRangeModel={multiRangeModel}
            priceRange={priceRange}
            totalpage={totalpage}
            setTotalpage={setTotalpage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </section>
      <FooterComponent />
    </>
  );
}

export async function getServerSideProps() {
  const url =
    "https://autodigg.com/ad-api/cars/list?usedCar=true&car_type=Used+car&page=1&radius=100";

  const carnumberapi =
    "https://autodigg.com/ad-api/cars/list?usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&return=count";

  const modelUrl = "https://autodigg.com/ad-api/cars/list?make=&return=model";
  const bodyTypeUrl =
    "https://autodigg.com/ad-api/cars/list?make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=body_type";
  const exteriorColorUrl =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=exterior_color";

  const interiorColorUrl =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=interior_color";

  const transmissionUrl =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=transmission";

  const driveTrainUrl =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=drivetrain";
  const fuelTypeUrl =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=fuel_type";

  const featuresUrl =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=features";
  const makeurl = "https://autodigg.com/ad-api/cars/list?return=make";

  const res = await Promise.all([
    axios.get(url),
    axios.get(makeurl),
    axios.get(featuresUrl),
    axios.get(fuelTypeUrl),
    axios.get(driveTrainUrl),
    axios.get(transmissionUrl),
    axios.get(interiorColorUrl),
    axios.get(exteriorColorUrl),
    axios.get(bodyTypeUrl),
    axios.get(modelUrl),

    axios.get(carnumberapi),
  ]);

  return {
    props: {
      cars: res[0].data,
      totalcarnumber: res[10].data.count,
      model: res[9].data,
      bodytype: res[8].data,
      exteriorcolor: res[7].data,
      interiorcolor: res[6].data,
      transmission: res[5].data,
      drivetrain: res[4].data,
      fueltype: res[3].data,
      features: res[2].data,
      loding: false,
      make: res[1].data,
      totalpage: Math.ceil(res[10].data.count / 20),
    },
  };
}
