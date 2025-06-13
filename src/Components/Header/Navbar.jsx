import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faMagnifyingGlass,faDownLong} from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";


function Navbar() {
  return (
    <>
      <div className="Navbar flex justify-between h-[30%]">
        <div className="nav-left flex justify-start items-center w-[40%]">
          <div className="logo mx-2">
            <FontAwesomeIcon icon={faSpotify} className="text-4xl" />
          </div>
          <div className="home mx-2">
            <button className="p-2 bg-[#4442424d] rounded-full"><FontAwesomeIcon icon={faHouse} className="text-2xl"/></button>
          </div>
          <div tabIndex={0} className="search-box flex justify-center items-center px-5 py-3 border-2 border-transparent bg-[#4442424d] rounded-3xl mx-2 w-[70%] hover:bg-[#5654544d] cursor-pointer focus-within:border-white transition-all duration-300 ease-in">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2 text-xl text-gray-500 hover:text-white" />
              <input type="text" placeholder="What do you want to play?" className="bg-transparent outline-none border-none pr-6 pl-1  w-[100%]" />
          </div>
        </div>
        <div className="nav-right flex items-center justify-end text-gray-500 font-bold w-[50%]">
          <div className="flex justify-center items-center gap-2">
            <p className="hover:text-white cursor-pointer transition-all duration-300 ease-in">Premium</p>
            <p className="hover:text-white cursor-pointer transition-all duration-300 ease-in">Support</p>
            <p className="hover:text-white cursor-pointer transition-all duration-300 ease-in">Download</p>
          </div>
          <div className="vertical-separation h-[60%] w-[3px] bg-white mx-4">
          </div>
          <div className="install flex justify-center items-center gap-1 mx-4 hover:text-white cursor-pointer transition-all duration-300 ease-in">
              <FontAwesomeIcon icon={faDownLong}  />
              <p>Install App</p>
          </div>
          <button className="sign-up mx-2 hover:text-white cursor-pointer transition-all duration-300 ease-in">
            Sign up
          </button>
          <button className="login px-8 py-2 font-bold bg-white text-black rounded-3xl mx-2">
            Log in
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
