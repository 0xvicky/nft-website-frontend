import React from "react";

const Button = ({imgURL, label, isType_2}) => {
  return (
    <div
      className={`flex items-center gap-2 justify-center ${
        !isType_2
          ? "text-mainPurple bg-transparent border border-mainPurple"
          : "text-white bg-mainPurple"
      } p-3 rounded-xl cursor-pointer w-fit font-tilum`}>
      {imgURL && imgURL}
      {label}
    </div>
  );
};

export default Button;
