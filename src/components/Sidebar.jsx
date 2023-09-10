import React from "react";
import {navLinks} from "../constants";
import {AiOutlineUser} from "react-icons/ai";
import Button from "./Button";
import {MdCancel} from "react-icons/md";

const Sidebar = ({isSideBar, setIsSideBar}) => {
  return (
    <div
      className={`absolute ${isSideBar && "-translate-x-40"}
   bg-white z-10 max-lg:flex hidden duration-400 transition-all -right-56 top-0 w-[150px] h-[450px] flex-col p-2 gap-6`}>
      <MdCancel
        fontSize={28}
        className='cursor-pointer'
        onClick={() => {
          setIsSideBar(false);
        }}
      />
      <ul className='flex flex-col justify-center items-center gap-8'>
        {navLinks.map(link => {
          return (
            <li key={link.label}>
              <a
                href={link.href}
                className='font-tilum font-medium cursor-pointer'>
                {link.label}
              </a>
            </li>
          );
        })}
        <Button
          imgURL={<AiOutlineUser />}
          label='Sign Up'
        />
      </ul>
    </div>
  );
};

export default Sidebar;
