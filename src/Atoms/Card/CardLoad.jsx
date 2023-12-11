import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CardLoad() {
  const sceletons = [];
  for (let i = 0; i < 5; i++) {
    sceletons.push(
      <SkeletonTheme key={i} baseColor="#202020" highlightColor="#444">
        <div className="w-full flex justify-between text-sm font-light mt-5 px-3  py-1 items-center rounded-md">
          <div className="flex items-center  gap-3 w-1/3">
            <div className="text-sm w-4 h-4 font-medium">
              {/* <Skeleton /> */}
            </div>
            <div className="flex gap-5 w-max">
              <div className="w-12 h-12 overflow-hidden rounded-md">
                <Skeleton height={"100%"} />
              </div>
              <div className="flex flex-col  justify-around">
                <div className="font-medium w-24 h-5 text-[14px] text-white">
                  <Skeleton height={"100%"} />
                </div>
                <div className=" w-16 h-3 font-medium text-[12px] text-[#bbb]">
                  <Skeleton height={"100%"} />
                </div>
              </div>
            </div>
          </div>
          <div className="text-[13px] text-[#ddd] w-1/3 h-4">
            <Skeleton height={"100%"} />
          </div>
          <div className="text-[13px] text-[#ddd] w-10 h-5">
            <Skeleton height={"100%"} />
          </div>
        </div>
      </SkeletonTheme>
    );
  }
  return <>{sceletons}</>;
}

export default CardLoad;
