import React from "react";

function Skeleton() {
  const arr = [1,2,3,4,5,6,7,8,9];
  return (
    <div className="wrapper bg-gray-100 flex flex-col h-[300px] rounded-xl p-5 items-end justify-end gap-5">
     <div className=" bg-gray-200 w-full h-7 rounded-lg"></div>
     <div className=" bg-gray-200 w-full h-2 rounded-lg"></div>
    </div>
  );
}

export default Skeleton;
