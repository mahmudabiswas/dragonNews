import React from "react";
import { BiLogoGoogle } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../assets/qZone1.png";
import qZone2 from "../assets/qZone2.png";
import qZone3 from "../assets/qZone3.png";
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3">
        <h1 className="text-3xl">Log in with</h1>
        <button className="btn btn-outline w-full">
          <BiLogoGoogle />
          Google
        </button>
        <button className="btn btn-outline w-full">
          <AiFillGithub />
          GitHub
        </button>
      </div>
      {/* Fiend Us */}
      <div className="p-4">
        <h1 className="text-3xl">Fiend Us</h1>
        <a
          className="p-4 text-lg  flex items-center border  rounded-lg "
          href=""
        >
          <FaFacebook className="mr-3" />
          <span>FaceBook</span>
        </a>
        <a
          className="p-4 text-lg flex items-center border  rounded-lg "
          href=""
        >
          <FaInstagram className="mr-3" />
          <span>Instagram</span>
        </a>
        <a
          className="p-4 text-lg flex items-center border  rounded-lg "
          href=""
        >
          <FaTwitter className="mr-3" />
          <span>Twitter</span>
        </a>
      </div>
      {/* Q Zone */}
      <div className="p-4 space-y-3 bg-gray-300">
        <h1 className="text-3xl"> Q Zone</h1>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
