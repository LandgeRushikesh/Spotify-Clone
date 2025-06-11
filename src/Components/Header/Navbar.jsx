import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";


function Navbar() {
  return (
    <>
      <div className="Navbar flex justify-between">
        <div className="nav-left flex justify-center items-center ">
          <div className="logo mx-2">
            <FontAwesomeIcon icon={faSpotify} className="text-4xl" />
          </div>
          <div className="home mx-2">
            <button className="p-2 bg-[#4442424d] rounded-full"><FontAwesomeIcon icon={faHouse} className="text-2xl"/></button>
          </div>
          <div className="search-box flex justify-center items-center px-5 py-3 bg-[#4442424d] rounded-3xl mx-2">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2 text-xl text-gray-500" />
              <input type="text" placeholder="What do you want to play?" className="bg-transparent pr-6 border-none pl-1 " />
          </div>
        </div>
        <div className="nav-right flex flex-[1]s">
          <button className="sign-up text-gray-500 mx-2">
            Sign up
          </button>
          <button className="login px-8 font-bold bg-white text-black rounded-3xl mx-2">
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
