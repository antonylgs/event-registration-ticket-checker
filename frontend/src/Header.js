import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-col pb-6">
      <div className="w-screen relative right-4 h-20 bg-nbgray flex flex-col justify-end items-center gap-2 pb-2 px-4">
        <p className="text-xs font-bold text-center">
          Livraison gratuite à partir de 100€ d'achat + Retours gratuits
        </p>
        <div className="flex gap-2">
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <div className="h-2 w-2 rounded-full bg-black"></div>
        </div>
      </div>
      <div className="py-4 flex justify-between">
        <Link to="/">
          <img src="/nb-logo.svg"></img>
        </Link>
        <div className="relative hidden min-w-[400px] sm:flex">
          <input
            type="text"
            placeholder="Rechercher"
            className="w-full border border-ngbray h-10 px-2"
          ></input>
          <img
            src="/nb-search.svg"
            className="absolute right-6 top-3 cursor-pointer"
          ></img>
        </div>
        <div className="flex gap-4">
          <Link to="">
            <img src="/nb-shop.svg"></img>
          </Link>
          <Link to="">
            <img src="/nb-burger.svg"></img>
          </Link>
        </div>
      </div>
      <div className="relative sm:hidden">
        <input
          type="text"
          placeholder="Rechercher"
          className="w-full border border-ngbray h-10 px-2"
        ></input>
        <img
          src="/nb-search.svg"
          className="absolute right-6 top-3 cursor-pointer"
        ></img>
      </div>
    </div>
  );
}

export default Header;
