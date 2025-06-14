import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faGlobe } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Sidebar() {
  return (
    <>
      <div className="sidebar-container h-full">
        <div className="header flex justify-between items-center mb-14">
          <p>Your Library</p>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="mb-24">
          {[
            {
              title: "Create your first playlist",
              desc: "It's easy, we'll help you",
              btn: "Create playlist",
            },
            {
              title: "Let's find some podcast to follow",
              desc: "We'll keep you updated on new episodes",
              btn: "Browse podcasts",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="playlist bg-[#6b6a6a4d] px-4 py-4 rounded-md mb-5 text-gray-200"
            >
              <h3 className="font-bold text-md mb-1">{item.title}</h3>
              <p className="font-bold text-sm mb-3">{item.desc}</p>
              <button className="px-4 py-1 bg-white rounded-3xl text-black font-bold mb-2 hover:scale-110 transition-all duration-300 ease-in-out">
                {item.btn}
              </button>
            </div>
          ))}
        </div>

      <div className="footer">
        <ul className="flex gap-3 justify-start items-center text-xs text-gray-400 mb-3 font-semibold px-2">
          {[
            "legal",
            "Safety & Privacy center",
            "Privacy Policy",
            "Cookies",
          ].map((st) => (
            <li className="cursor-pointer">{st}</li>
          ))}
        </ul>
        <ul className="flex gap-3 justify-start items-center text-xs text-gray-400 mb-3 font-semibold px-2">
          {["About Ads", "Accessibility"].map((st) => (
            <li className="cursor-pointer">{st}</li>
          ))}
        </ul>
        <ul className="text-sm text-gray-400 mb-3 font-semibold px-2">
          <li className="cursor-pointer hover:underline">Cookies</li>
        </ul>
        <button className="px-3 py-1 border-2 border-white rounded-3xl mt-4">
          <FontAwesomeIcon icon={faGlobe} className="mr-2" />
          <span>English</span>
        </button>
      </div>
      </div>
    </>
  );
}

export default Sidebar;
