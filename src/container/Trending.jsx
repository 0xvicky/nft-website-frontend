import React from "react";
import {TrendingCard} from "../components";
import {trendDetails} from "../constants";
const Trending = () => {
  return (
    <div className='flex flex-col space-y-5'>
      <div className='flex flex-col space-y-2'>
        <h2 className='text-white font-tilum font-bold text-3xl'>Trending Collection</h2>
        <p className='text-white font-palanquin'>
          Checkout our weekly updated trending collection.
        </p>
      </div>
      <div className='flex max-md:flex-col max-md:space-y-5 justify-between items-center space-x-7'>
        {trendDetails.map(trend => {
          return (
            <TrendingCard
              key={trend.ownerName}
              {...trend}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
