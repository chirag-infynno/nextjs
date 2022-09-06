import React from "react";
import axios from "axios";
import { HeaderComponent } from "../Component/Header";
import { BsArrowLeftCircle } from "react-icons/bs";
import Image from "next/image";
// import Image from ""
// import Image from "next/dist/client/image";
// import Image from "next/image";
import Head from "next/head";
import ImageGallery from "react-image-gallery";
import { FooterComponent } from "../Component/Footer";
import { RWebShare } from "react-web-share";
const details = ({ cars }) => {
  const images = cars.photos.map((data) => {
    return {
      original: data,
      thumbnail: data,
    };
  });
  console.log("change");
  return (
    <>
      <Head>
        <meta property="og:title" content={`${cars.make}`} />
        <meta property="og:image" content={`${cars.photos[0]}`} />
        <meta property="og:image:width" content={`300`} />
        <meta property="og:image:height" content={`300`} />
        <meta property="og:description" content="car delaer ship" />
      </Head>
      <HeaderComponent />
      <nav className="max-w-[1440px] px-[60px] py-[24px] bg-white flex justify-between ">
        <div className="flex gap-[15px] items-start  ">
          <div className=" pt-[6px] cursor-pointer">
            <BsArrowLeftCircle size={36} color={"orange"} />
          </div>
          <div className="flex flex-col gap-[8px] ">
            <span className="text-[32px] leading-[44px] font-[700] flex items-start">
              {`${cars.make} ${cars.model}`}{" "}
            </span>

            <div className="flex flex-col gap-[10px]">
              <span className="text-[16px] leading-[14px] fomt-[400] text-[#8F90A6]">
                {cars.dealership} •{cars.milage} Mileage • {cars.exterior_color}
              </span>
              <span className="text-[16px] leading-[14px] fomt-[400] text-[#8F90A6]">
                {cars.city}, {cars.state}
              </span>
            </div>
          </div>
          <RWebShare
            data={{
              title: "Flamingos",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <button className="mt-[9px]  py-[6px] px-[16px] rounded-[10px]  bg-gradient-to-r from-[#FF8800] to-[#E63535] text-white">
              {" "}
              share
            </button>
          </RWebShare>
        </div>
        <div className="flex gap-[24px] items-start pt-[6px]">
          <aside className="flex justify-start items-center gap-[8px]">
            <span className="text-[#28293D] font-bold  sm:text-[28px] leading-[38px]  xs:text-[20px] leading-[30px] ">
              {`$${cars.price.toLocaleString("en-US")}`}
            </span>
            <Image
              src="/info.png"
              height={16}
              width={16}
              alt="image not found"
            />
          </aside>

          <button className="  rounded-[10px] bg-gradient-to-r from-[#FF8800] to-[#E63535] ">
            <spna className="flex justify-center items-center gap-[2px] py-[6px] px-[16px] text-[14px] leading-[24px] text-white      ">
              Invite dealer
              <div className="flex justify-center items-center">
                <Image
                  src="/arrow.png"
                  width={15}
                  height={24}
                  alt="image not found"
                />
              </div>
            </spna>
          </button>
        </div>
      </nav>

      <section className="spacial-offer bg-[#FFF8E6] px-[112px] py-[24px]">
        <div className="spacial-offer-div flex flex-col gap-[16px]">
          <div className="flex gap-[4px]">
            <Image
              src="/wheel.png"
              width={15}
              height={15}
              alt="image not found"
            />
            <span className="font-[600] text-[12px] leading-[20px] text-[#05A660]">
              Special offers
            </span>
          </div>
          <div className="flex gap-[16px] ">
            <span className="text-[14px] leading-[24px] ">
              • 100% credit approval guaranteed
            </span>
            <span className="text-[14px] leading-[24px] ">
              • Complimentary 101pt safety check
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] max-h-[828px] bg-[#1e1e1e] py-[36px] px-[70px] ">
        <ImageGallery showPlayButton={false} items={images} />
      </section>

      <section className="p-[36px]  bg-white shadow-specsShadow rounded-[10px] mx-[60px] my-[64px]">
        <div className="flex flex-col max-h-[388px]  gap-[36px] ">
          <div>
            <h1 className="font-[700] text-[32px] text-[#28293D] leading-[44px]">
              Car Details
            </h1>
          </div>
          <div className="flex  flex-wrap  justify-between  gap-[24px] max-h-[284px]">
            <div className="flex gap-[16px] w-[329px]">
              <div>
                <Image
                  src="/carType.png"
                  width={40}
                  height={40}
                  alt={"image not found"}
                />
              </div>
              <div>
                <h3 className="font-[600] text-[#8F90A6] text-[12px] leading-[16px]">
                  CAR TYPE
                </h3>
                <p className="font-[500] text-[#28293D] text-[14px] leading-[20px]">
                  {cars.car_type}
                </p>
              </div>
            </div>
            <div className="flex gap-[16px] w-[329px]">
              <div>
                <Image
                  src="/year.png"
                  width={40}
                  height={40}
                  alt={"image not found"}
                />
              </div>
              <div>
                <h3 className="font-[600] text-[#8F90A6] text-[12px] leading-[16px]">
                  YEAR
                </h3>
                <p className="font-[500] text-[#28293D] text-[14px] leading-[20px]">
                  {cars.year}
                </p>
              </div>
            </div>

            <div className="flex gap-[16px] w-[329px]">
              <div>
                <Image
                  src="/vin.png"
                  width={40}
                  height={40}
                  alt={"image not found"}
                />
              </div>
              <div>
                <h3 className="font-[600] text-[#8F90A6] text-[12px] leading-[16px]">
                  VIN
                </h3>
                <p className="font-[500] text-[#28293D] text-[14px] leading-[20px]">
                  {cars.vin}
                </p>
              </div>
            </div>
            <div className="flex gap-[16px] w-[329px]">
              <div>
                <Image
                  src="/mileage.png"
                  width={40}
                  height={40}
                  alt={"image not found"}
                />
              </div>
              <div>
                <h3 className="font-[600] text-[#8F90A6] text-[12px] leading-[16px]">
                  MILEAGE
                </h3>
                <p className="font-[500] text-[#28293D] text-[14px] leading-[20px]">
                  {cars.milage.toLocaleString("en-US")}
                </p>
              </div>
            </div>

            <div className="flex gap-[16px] w-[329px]">
              <div>
                <Image
                  src="/paint.png"
                  width={40}
                  height={40}
                  alt={"image not found"}
                />
              </div>
              <div>
                <h3 className="font-[600] text-[#8F90A6] text-[12px] leading-[16px]">
                  EXTERIOR COLOR
                </h3>
                <p className="font-[500] text-[#28293D] text-[14px] leading-[20px]">
                  {cars.exterior_color}
                </p>
              </div>
            </div>

            <div className="flex gap-[16px] w-[329px]">
              <div>
                <Image
                  src="/fuelType.png"
                  width={40}
                  height={40}
                  alt={"image not found"}
                />
              </div>
              <div>
                <h3 className="font-[600] text-[#8F90A6] text-[12px] leading-[16px]">
                  FUEL TYPE
                </h3>
                <p className="font-[500] text-[#28293D] text-[14px] leading-[20px]">
                  {cars.fuel_type}
                </p>
              </div>
            </div>
            <div className="flex gap-[16px] w-[329px]">
              <div>
                <Image
                  src="/carType.png"
                  width={40}
                  height={40}
                  alt={"image not found"}
                />
              </div>
              <div>
                <h3 className="font-[600] text-[#8F90A6] text-[12px] leading-[16px]">
                  TRIM
                </h3>
                <p className="font-[500] text-[#28293D] text-[14px] leading-[20px]">
                  {cars.trim}
                </p>
              </div>
            </div>

            <div className="flex gap-[16px] w-[329px]">
              <div>
                <Image
                  src="/transmission.png"
                  width={40}
                  height={40}
                  alt={"image not found"}
                />
              </div>
              <div>
                <h3 className="font-[600] text-[#8F90A6] text-[12px] leading-[16px]">
                  TRANSMISSION
                </h3>
                <p className="font-[500] text-[#28293D] text-[14px] leading-[20px]">
                  {cars.transmission}
                </p>
              </div>
            </div>

            <div className="flex gap-[16px] w-[329px]">
              <div>
                <Image
                  src="/driveTrain.png"
                  width={40}
                  height={40}
                  alt={"image not found"}
                />
              </div>
              <div>
                <h3 className="font-[600] text-[#8F90A6] text-[12px] leading-[16px]">
                  DRIVE TRAIN
                </h3>
                <p className="font-[500] text-[#28293D] text-[14px] leading-[20px]">
                  {cars.drivetrain}
                </p>
              </div>
            </div>

            <div className="flex gap-[16px] w-[329px]">
              <div>
                <Image
                  src="/engine.png"
                  width={40}
                  height={40}
                  alt={"image not found"}
                />
              </div>
              <div>
                <h3 className="font-[600] text-[#8F90A6] text-[12px] leading-[16px]">
                  ENGINE
                </h3>
                <p className="font-[500] max-w-[314px] text-[#28293D] text-[14px] leading-[20px]">
                  {cars.engine_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-[64px]  p-[36px] bg-white flex flex-col gap-[36px] ">
        <div className="">
          <span className="font-[700] text-[32px] leading-[44px] text-[#28293D]">
            Other features
          </span>
        </div>
        <div className="flex flex-wrap justify-between gap-8 h-auto ">
          {cars?.features1?.split(",").map((data, index) => {
            return (
              <p
                key={index}
                className="font-[500] text-[#28293D] h-[20px] overflow-hidden text-[13px] leading-[20px] w-[360px]"
              >
                {data.replace(/[\[\]"]+/g, "")}
              </p>
            );
          })}
        </div>
      </section>
      <div className="mt-[64px]">
        <FooterComponent />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  const { data } = await axios.get(
    `https://autodigg.com/ad-api/cars/list?vin=${params.details}`
  );
  const cardata = data[0];

  return {
    props: { cars: cardata },
  };
}
export default details;
