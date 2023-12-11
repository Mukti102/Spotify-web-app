import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
function PlaylistsLoad() {
  const skeletons = [];
  for (let i = 0; i < 5; i++) {
    skeletons.push(
      <SkeletonTheme key={i} baseColor="#202020" highlightColor="#444">
        <div className="w-full h-[60px] mt-3 flex items-center gap-2 rounded-lg cursor-pointer px-2">
          <div className="w-[50px] h-[50px] rounded-md overflow-hidden">
            <Skeleton height={"100%"} />
          </div>
          <div className="flex flex-col w-32 gap-[1px]">
            <Skeleton height={"100%"} />
            <div className="w-14 h-4">
              <Skeleton height={"100%"} />
            </div>
          </div>
        </div>
      </SkeletonTheme>
    );
  }
  return <>{skeletons}</>;
}

export default PlaylistsLoad;
