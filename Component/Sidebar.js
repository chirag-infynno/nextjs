import Image from "next/image";
import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { useRouter } from "next/router";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";

import { changePage, changeCarApi } from "../redux/slice/homePageSlices";

export function Sidebar({ cardata }) {
  const router = useRouter();

  const dispatch = useDispatch();

  const { totalpage, currentPage, loding } = useSelector(
    (state) => state.homePageSlice
  );

  const handlePageClick = (event) => {
    console.log("ivent", event.selected + 1);

    dispatch(changePage(event.selected + 1));

    dispatch(changeCarApi());
  };
  return (
    <>
      <div className="flex flex-col gap-[24px]  w-[100%]">
        {cardata.map((data, index) => (
          <section
            className={`shadow-cardShadow  rounded-[10px]  sm:pb-[0px] xs:pb-[16px] bg-white `}
            key={index}
          >
            <section className=" ">
              <section className="flex  bg-white sm:flex-row gap-[24px] xs:flex-col  ">
                <div className=" max-h-[254px] sm:w-[360px]  xs:w-[328px] ">
                  <Image
                    src={data.photos ? data.photos[0] : "/notfind.png"}
                    width={360}
                    height={254}
                    className="rounded-tl-[10px] xs:max-w-[200px] sm:max-w-[100px]  cursor-pointer "
                    alt="page not found"
                    onClick={() => router.push(`/${data.vin}`)}
                  />
                </div>
                <aside className="flex flex-col py-[24px] sm:justify-between  xs:gap-[10px] xs:pl-[20px]  ">
                  <section className=" w-[280px] flex flex-col gap-[3px] ">
                    <spna className="text-[#28293D] font-bold sm:text-[20px] leading-[32px] xs:text-[14px]  ">
                      {`${data.year} ${data.make} ${data.model}`}
                    </spna>
                    <spna className="text-[#8F90A6] text-[12px] leading-[16px]">
                      {`${data.dealership} • ${data.milage} Milage • ${data.exterior_color}`}
                    </spna>
                    <spna className="text-[#8F90A6] text-[12px] leading-[16px]">
                      {`${data.city} , ${data.state}`}
                    </spna>
                  </section>
                  <section className="flex justify-between  pr-[24px] items-center  sm:w-[500px]   xs:[400px] ">
                    <aside className="flex justify-start items-center gap-[8px]">
                      <span className="text-[#28293D] font-bold  sm:text-[28px] leading-[38px]  xs:text-[20px] leading-[30px] ">
                        {`$${data.price.toLocaleString("en-US")}`}
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
                  </section>
                </aside>
              </section>
            </section>
            <section className=" sm:block  bg-[#FFF8E6] py-[16px] pl-[24px]  rounded-b-[10px] xs: hidden">
              <aside className="flex  items-center gap-[4px]">
                <div className="w-[15px] h-[20px]">
                  <Image
                    src="/wheel.png"
                    width={15}
                    height={15}
                    alt="image not found"
                  />
                </div>

                <spna className="text-[#05A660] text-[12px] leading-[20px] uppercase">
                  Special offers
                </spna>
              </aside>
              <aside className="flex gap-[16px] sm:flex-row xs:flex-col ">
                <span className="text-[14px] leading-[24px]">
                  • 100% credit approval guaranteed
                </span>
                <span className="text-[14px] leading-[24px]">
                  • Complimentary 101pt safety check
                </span>
              </aside>
            </section>
          </section>
        ))}

        <div className="py-[64px] border-b-[1px] ">
          <ReactPaginate
            previousLabel={" <"}
            nextLabel={" >"}
            breakLabel={"..."}
            pageCount={totalpage}
            marginPagesDisplayed={4}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            // initialPage={currentPage}
            // forcePage={currentPage}
            containerClassName={"flex gap-[8px] justify-center	 items-center"}
            pageClassName={
              "w-[36px] flex items-center justify-center h-[36px] text-[#555770] font-[500] text-[14px] bg-white border-[1px] border-solid border-[#E4E4EB] rounded-[6px]"
            }
            // pageLinkClassName={""}
            previousClassName={
              " prev-btn w-[36px] font-[700] h-[36px] flex items-center rounded-[6px] justify-center bg-[#28293D] text-white mr-[3px]"
            }
            // previousLinkClassName={""}
            nextClassName={
              "next-btn w-[36px] h-[36px] font-[700] flex items-center justify-center rounded-[6px] bg-[#28293D] text-white"
            }
            // nextLinkClassName={""}
            // breakClassName={""}
            // breakLinkClassName={""}
            activeClassName={
              "border-[2px] border-solid border-[#FF8800] text-[#FF8800] "
            }
          />
        </div>

        <div className="mt-[36px] flex flex-col items-center gap-[12px]">
          <span className="font-[700] text-[28px] leading-[38px] text-[#28293D]">
            Why Autodigg?
          </span>
          <span className="font-[600] text-[14px] leading-[20px] text-[#8F90A6] text-center max-w-[760px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.{" "}
          </span>
        </div>
      </div>
    </>
  );
}
