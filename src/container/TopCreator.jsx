import React from "react";
import {Button} from "../components";
import {BiRocket} from "react-icons/bi";
import {creatorDet} from "../constants";
import CreatorCard from "../components/CreatorCard";
const TopCreator = () => {
  return (
    <div className='space-y-5'>
      <div className='flex justify-between items-end'>
        <div className='flex flex-col space-y-2'>
          <h2 className='text-white font-tilum font-semibold text-3xl'>Top Creators</h2>
          <p className='text-white font-palanquin'>
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <Button
          label='Rankings'
          imgURL={<BiRocket />}
        />
      </div>
      <div className='grid grid-cols-4 gap-3 max-xl:grid-cols-3 '>
        {creatorDet.map((creator, index) => {
          return (
            <CreatorCard
              key={creator.name}
              index={index}
              {...creator}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopCreator;
