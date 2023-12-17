import React from "react";
function Player({ cardTarget }) {
  return (
    <div className="w-[30%] items-center pl-2 flex gap-2">
      <div className="w-16 h-16 rounded-md overflow-hidden">
        <img
          src={
            cardTarget
              ? cardTarget?.image?.url
              : "https://k-gen.fr/wp-content/uploads/2018/04/blackpink-boombayah-300millions-1366x768.png"
          }
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-start">
        <h1 className="text-white font-semibold text-sm">{cardTarget.name}</h1>
        <h2 className="text-[12px] font-medium text-[#ccc] ">
          {cardTarget.artists[0]}
        </h2>
      </div>
    </div>
  );
}

export default Player;
