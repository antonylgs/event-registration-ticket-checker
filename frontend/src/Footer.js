import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-col pt-6">
      <div className="flex flex-col gap-8 mb-8">
        <nav className="flex gap-6 items-center">
          <Link to="">
            <img src="/nb-instagram.svg"></img>
          </Link>
          <Link to="">
            <img src="/nb-facebook.svg"></img>
          </Link>
          <Link to="">
            <img src="/nb-x.svg"></img>
          </Link>
          <Link to="">
            <img src="/nb-youtube.svg"></img>
          </Link>
          <Link to="">
            <img src="/nb-pinterest.svg"></img>
          </Link>
          <Link to="">
            <img src="/nb-tiktok.svg"></img>
          </Link>
        </nav>
        <div className="flex gap-4 items-center">
          <p className="text-nbgraytext">Change region: </p>
          <img src="/nb-us.jpg" className="h-[16px]"></img>
          <p className="text-nbgraytext">EN</p>
        </div>
      </div>
      <div className="w-screen relative right-4 bg-nbgray flex flex-col lg:flex-row sm:justify-between gap-4 p-4 pb-20 lg:pb-12">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          <Link to="">
            <p className="underline">Privacy policy</p>
          </Link>
          <Link to="">
            <p className="underline">General terms and conditions</p>
          </Link>
          <Link to="">
            <p className="underline">Cookie settings</p>
          </Link>
        </div>

        <p>Copyright 2024, New Balance</p>
      </div>
    </div>
  );
}

export default Footer;
