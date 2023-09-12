import React from "react";

const TrendingCard = ({
  imgURL,
  label,
  sideImgURL_1,
  sideImgURL_2,
  ownerImg,
  ownerName,
  nftNumber
}) => {
  return (
    <div className='flex flex-col space-y-2'>
      <img
        src={imgURL}
        alt=''
        className='flex flex-wrap'
      />
      <div className='flex space-x-2 max-lg:hidden'>
        <img
          src={sideImgURL_1}
          alt=''
        />
        <img
          src={sideImgURL_2}
          alt=''
        />
        <div className='flex justify-center items-center text-white font-palanquin text-2xl h-[100px] w-[100px] bg-mainPurple rounded-3xl px-2'>
          {nftNumber}+
        </div>
      </div>
      <div className='flex flex-col max-md:items-center space-y-3'>
        <h3 className='text-white font-tilum font-semibold'>{label}</h3>
        <div className='flex space-x-2 '>
          <img
            src={ownerImg}
            alt=''
          />
          <p className='text-white font-palanquin'>{ownerName}</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
