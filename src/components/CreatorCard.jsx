import React from "react";

const CreatorCard = ({imgURL, name, totalSales, index}) => {
  return (
    <div className='flex flex-col items-center rounded-xl bg-slateGray h-[200px] w-[200px] py-3 space-y-3'>
      <img
        src={imgURL}
        alt=''
        className='h-24 w-24'
      />
      <span className='text-white font-tilum font-semibold capitalize'>{name}</span>
      <p className='text-white'>
        <span className='text-cardGray font-palanquin'>Total Sales:</span>{" "}
        <span className='font-tilum'>{totalSales} ETH</span>
      </p>
    </div>
  );
};

export default CreatorCard;
