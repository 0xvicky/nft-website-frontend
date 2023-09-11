import React from "react";

const Button = ({imgURL, label}) => {
  return (
    <div className='flex items-center gap-2 justify-center text-white bg-mainPurple p-3 rounded-xl cursor-pointer w-fit font-tilum'>
      {imgURL}
      {label}
    </div>
  );
};

export default Button;
