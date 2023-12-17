import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
function SearcCardLoad() {
  const CardSkeleton = [];
  for (let i = 0; i < 10; i++) {
    CardSkeleton.push(
      <SkeletonTheme key={i} baseColor="#202020" highlightColor="#444">
        <div className="w-52 h-72 p-4 bg-[#b3a0a011] hover:bg-[#222] rounded-lg flex flex-col gap-2">
          <div className="relative w-full h-48 overflow-hidden rounded-lg shadow-xl">
            <Skeleton width={"100%"} height={"100%"} />
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-1/2 h-5 text-base font-semibold text-[#222]">
              <Skeleton width={"100%"} height={"100%"} />
            </div>
            <div className="w-1/3 h-4 text-base font-semibold text-[#222]">
              <Skeleton width={"100%"} height={"100%"} />
            </div>
          </div>
        </div>
      </SkeletonTheme>
    );
  }
  return <>{CardSkeleton}</>;
}

export default SearcCardLoad;
