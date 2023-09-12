import React, {useState} from "react";

const TrendingCard = ({
  imgURL,
  label,
  sideImgURL_1,
  sideImgURL_2,
  ownerImg,
  ownerName,
  nftNumber
}) => {
  const [mainNft, setMainNft] = useState(imgURL);
  const [nft_1, setNft_1] = useState(sideImgURL_1);
  const [nft_2, setNft_2] = useState(sideImgURL_2);

  const handleNft = e => {
    setMainNft(e.target.src);
    if (e.target.name === "nft_1") {
      setNft_1(mainNft);
    } else {
      setNft_2(mainNft);
    }
  };
  return (
    <div className='flex flex-col space-y-2'>
      <img
        src={mainNft}
        alt=''
        className='flex flex-wrap'
      />
      <div className='flex space-x-2 max-lg:hidden'>
        <img
          src={nft_1}
          alt=''
          className='cursor-pointer'
          onClick={handleNft}
          name='nft_1'
        />
        <img
          src={nft_2}
          alt=''
          className='cursor-pointer'
          onClick={handleNft}
          name='nft_2'
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
