import React, {useState} from "react";
import {AiOutlineShop, AiOutlineUser} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi";
import {navLinks} from "../constants";
import Button from "./Button";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSideBar, setIsSideBar] = useState(false);

  return (
    <div className='w-full'>
      <nav className='relative flex justify-between items-center max-container'>
        <a
          href='/'
          className='flex gap-2 items-center'>
          <AiOutlineShop
            fontSize={30}
            color='#A259FF'
          />
          <span className='text-white font-semibold font-tilum text-2xl'>
            NFT Marketplace
          </span>
        </a>
        <ul className='max-lg:hidden flex  justify-center items-center gap-16'>
          {navLinks.map(link => {
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className='font-tilum text-white font-medium cursor-pointer'>
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
        <div
          className='max-lg:block hidden cursor-pointer'
          onClick={() => {
            setIsSideBar(true);
          }}>
          <GiHamburgerMenu
            color='white'
            fontSize={32}
          />
        </div>

        <Sidebar
          isSideBar={isSideBar}
          setIsSideBar={setIsSideBar}
        />
      </nav>
    </div>
  );
};

export default Navbar;
