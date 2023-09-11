import React from "react";
import {Button} from "../components";
import {BiRocket} from "react-icons/bi";
import {statistics} from "../constants";
import {heroHigl, heroAvat} from "../assets/images";

const Hero = () => {
  return (
    <div className='p-2 padding flex lg:flex-row flex-col items-center justify-between min-h-screen bg-red-500'>
      <div className='flex flex-col gap-8 w-2/5'>
        <h1 className='flex flex-col justify-center capitalize gap-y-3 font-bold text-7xl text-white font-tilum'>
          <span>Discover</span>
          <span> digital art & </span>
          Collect NFTs
        </h1>
        <p className='text-white font-palanquin capitalize'>
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from
          more than 20k NFT artists.
        </p>
        <Button
          imgURL={<BiRocket />}
          label='Get Started'
        />
        <div className='flex gap-16 text-white'>
          {statistics.map(stat => {
            return (
              <div className=''>
                <h2 className='font-semibold text-3xl font-tilum'>{stat.value}</h2>
                <p className='font-palanquin text-lg'>{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <img
          src={heroHigl}
          alt=''
        />
        <div className='bg-[#3B3B3B] text-white flex flex-col p-2 py-4 space-y-2 rounded-b-2xl'>
          <h2 className='font-tilum'>Space Walking</h2>
          <div className='flex gap-2 font-light'>
            <img
              src={heroAvat}
              alt=''
              className='rounded-full'
            />
            <p className='font-palanquin'>Animakid</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
